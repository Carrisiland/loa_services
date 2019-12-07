// vim: set ts=2 sw=2 et tw=80:

const $link = $('input[name=link]');
const $start = $('input[name=start]');
const $end = $('input[name=end]');
const $submit = $('button[type=submit]');

let urlConstraints = {};

function onYouTubeIframeAPIReady() {
  const player = new Player();
  checkVideo();

  function clearVideo() {
    // The JQuery selector must be invoked every time since the DOM object changes
    // every time we reload the video
    $('#player').replaceWith($('#player-placeholder').html());
  }

  function setThumbnail(imgSrc) {
    console.log(imgSrc);
    $('#player').replaceWith(`<div id="player" class="img">
      <img src="${imgSrc}">
    </div>`);
  }

  function checkVideo() {
    let match, type, cancel = false;
    if (match = youtubeRegex.exec($link.val())) {
      type = 'youtube';
      match = match[1];
      setThumbnail(`http://i3.ytimg.com/vi/${match}/hqdefault.jpg`);
    } else if (match = vimeoRegex.exec($link.val())) {
      type = 'vimeo';
      match = match.pop();
      fetch(`http://vimeo.com/api/v2/video/${match}.json`)
        .then(r => r.json())
        .then(infoJson => {
          if (cancel) return;
          setThumbnail(infoJson[0].thumbnail_large)
        }).catch(e => {
          console.error(e);
          clearVideo();
        });
    } else {
      console.log('none', $link.val());
      clearVideo();
      return;
    }

    console.log(type, match);

    const start = parseTime($start.val());
    const end = parseTime($end.val());

    if ((start !== 0 && !start) || !end || start >= end) {
      return;
    }

    cancel = true;
    player.play(type, match, start, end).then(e => {
      console.log('duration resolved', e);
      urlConstraints = e;
      if (end > e.duration) {
        clearVideo();
      }
      $('.ui.form').form('validate field', 'end');
    });
  }

  $link.on('keyup', checkVideo);
  $start.on('keyup', checkVideo);
  $end.on('keyup', checkVideo);
}

$.fn.form.settings.rules.videoRe = function(value) {
  return value && (value.match(youtubeRegex) || value.match(vimeoRegex));
};

$.fn.form.settings.rules.urlDuration = function(value) {
  if (!(value = parseTime(value))) {
    return false;
  }
  console.log('urlDuration validation', value, urlConstraints.duration);
  return !urlConstraints ||
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
