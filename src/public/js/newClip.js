// vim: set ts=2 sw=2 et tw=80:

const youtubeRegex =
  new RegExp('^(?:(?:(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=)|' +
             '(?:(?:https?:\\/\\/)?(?:www\\.)?youtu\\.be\\/))' +
             '([\\w+]{11})$', '');
const timeRegex = new RegExp("/^(?:(?:(1?\d):)?([0-5]?\d):)?([0-5]\d)$/");
const vimeoRegex =
  new RegExp( '(?:(?:https:\/\/vimeo\.com\/)(([\d+]{9})|'+
            '(album\/([\d+]{9})\/video\/([\d+]{9}))|(channels\/([\d+]{9})\/([\d+]{9}))|'+
            '(groups\/([\d+]{9})\/videos\/([\d+]{9}))|(ondemand\/([\d+]{9})\/([\d+]{9}))))');


const urlDom = $('input[name=link]');
const startDom = $('input[name=start]');
const endDom = $('input[name=end]');


function parseTime(timeString) {
  const match = timeRegex.exec(timeString);
  if (!match) return null;
  match.shift();
  return match.reduce((sum, e) => sum * 60 + (e ? parseInt(e) : 0), 0);
}

checkVideo();

function checkVideo() {
  const match = youtubeRegex.exec(urlDom.val());
  console.log("yt")
  const vmatch = vimeoRegex.exec(urlDom.val());
  console.log("vim")
  console.log("id = ", vmatch)
  if (match === null) {

    const start = parseTime(startDom.val());
    const end = parseTime(endDom.val());

    if (!match || (start !== 0) && !start || !end || start >= end) {
      $('#player').replaceWith($('#player-placeholder').html());
      return;
    }
    vimeoPlayer(vmatch[1], start, end);
  }

  const start = parseTime(startDom.val());
  const end = parseTime(endDom.val());
  if (!match || (start !== 0) && !start || !end || start >= end) {
    $('#player').replaceWith($('#player-placeholder').html());
    return;
  }
  console.log(match[1], "prima", start, end);
  youtubePlayer(match[1], start, end);
}

urlDom.on('keyup', checkVideo);
startDom.on('keyup', checkVideo);
endDom.on('keyup', checkVideo);

// Form validation code for form
$('.ui.form').form({
  fields: {
    name: {
      identifier: 'link',
      rules: [{ type: 'regExp',
        value: youtubeRegex,
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
