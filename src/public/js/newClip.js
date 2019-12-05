// vim: set ts=2 sw=2 et tw=80:

const $link = $('input[name=link]');
const $start = $('input[name=start]');
const $end = $('input[name=end]');
const $submit = $('button[type=submit]');

let urlConstraints;

function onYouTubeIframeAPIReady() {
  const player = new Player();
//  $submit.attr('disabled', true);
  checkVideo();

  function clearVideo() {
    // The JQuery selector must be invoked every time since the DOM object changes
    // every time we reload the video
    $('#player').replaceWith($('#player-placeholder').html());
  }

  function checkVideo() {
    const start = parseTime($start.val());
    const end = parseTime($end.val());

    if ((start !== 0 && !start) || !end || start >= end) {
      clearVideo();
      return;
    }

//    $submit.add('disabled', true);
    let match;
    if (match = youtubeRegex.exec($link.val())) {
      player.play('youtube', match[1], start, end).then(e => {
        if (end > e.duration) {
          clearVideo();
        } else {
//          $submit.attr('disabled', false);
        }

        urlConstraints = e;
      });
    } else if (match = vimeoRegex.exec($link.val())) {
      player.play('vimeo', match[match.length - 1], start, end).then(e => {
        urlConstraints = e;
      });
    } else {
      console.log('none', $link.val());
      clearVideo();
    }
  }

  $link.on('keyup', checkVideo);
  $start.on('keyup', checkVideo);
  $end.on('keyup', checkVideo);
}

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
