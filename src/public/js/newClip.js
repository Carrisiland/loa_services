// vim: set ts=2 sw=2 et tw=80:

const youtubeRegex =
  new RegExp('^(?:(?:(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=)|' +
    '(?:(?:https?:\\/\\/)?(?:www\\.)?youtu\\.be\\/))' +
    '([\\w+]{11})$', '');
const timeRegex = /^(?:(?:(1?\d):)?([0-5]?\d):)?([0-5]\d)$/;
const vimeoRegex =
  new RegExp('^(http|https)?:\\/\\/(www\\.)?vimeo.com\\/(?:channels\\/(?:\\w+\\/)?|' +
    'groups\\/([^\\/]*)\\/videos\\/|)(\\d+)(?:|\\/\\?)$');


const $link = $('input[name=link]');
const $start = $('input[name=start]');
const $end = $('input[name=end]');
const $submit = $('button[type=submit]');

function parseTime(timeString) {
  const match = timeRegex.exec(timeString);
  if (!match) return null;
  match.shift();
  return match.reduce((sum, e) => sum * 60 + (e ? parseInt(e) : 0), 0);
}

$submit.attr('disabled', true);
checkVideo();

let urlConstraints;

function clearVideo() {
  // The JQuery selector must be invoked every time since the DOM object changes
  // every time we reload the video
  $('#player').replaceWith($('#player-placeholder').html());
}

function checkVideo() {
  const start = parseTime($start.val());
  const end = parseTime($end.val());

  console.log(start, end);

  if ((start !== 0 && !start) || !end || start >= end) {
    clearVideo();
    return;
  }

  $submit.add('disabled', true);
  let match;
  if (match = youtubeRegex.exec($link.val())) {
    console.log('youtube', start, end, $link.val());
    youtubePlayer(match[1], start, end).then(e => {
      if (end > e.duration) {
        clearVideo();
      } else {
        $submit.attr('disabled', false);
      }

      urlConstraints = e;
    });
  } else if (match = vimeoRegex.exec($link.val())) {
    console.log('vimeo', match[1], start, end);
    vimeoPlayer(match[1], start, end);
  } else {
    console.log('none', $link.val());
    clearVideo();
  }
}

$link.on('keyup', checkVideo);
$start.on('keyup', checkVideo);
$end.on('keyup', checkVideo);

$.fn.form.settings.rules.videoRe = function(value) {
  return value && (value.match(youtubeRegex) || value.match(vimeoRegex));
};

$.fn.form.settings.rules.urlDuration = function(value) {
  return (value = parseTime(value)) || !urlConstraints ||
    (value > 0 && value < urlConstraints.duration);
};

// Form validation code for form
$('.ui.form').form({
  fields: {
    name: {
      identifier: 'link',
      rules: [{ type: 'videoRe',
        prompt: 'Please enter a valid Youtube/Vimeo link'
      }]
    },
    start: {
      identifier: 'start',
      rules: [{
        type: 'regExp',
        value: timeRegex,
        prompt: 'Please enter a valid timestamp'
      }]
    },
    end: {
      identifier: 'end',
      rules: [{
        type: 'urlDuration',
        prompt: 'End timestamp is not in video bounds'
      },{
        type: 'regExp',
        value: timeRegex,
        prompt: 'Please eneter a valid timestamp'
      }]
    },
    title: {
      identifier: 'title',
      rules: [
        {
          type: 'empty',
          prompt: 'Please enter a title'
        },
        {
          type: 'maxLength[20]',
          prompt: 'Please enter a title shorter than 20 characters'
        }
      ]
    },
    visibility: {
      identifier: 'visibility',
      rules: [{ type: 'empty', prompt: 'Please choose a visibility' }]
    },
  }
});
