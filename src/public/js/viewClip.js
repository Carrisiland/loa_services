// vim: set ts=2 sw=2 et tw=80:

let fix;

function onYouTubeIframeAPIReady() {
  const post = JSON.parse($("#selected-video").html());
  const match = youtubeRegex.exec(post.video.link);
  const vmatch = vimeoRegex.exec(post.video.link);
  const start = parseTime(post.video.start);
  const end = parseTime(post.video.end);

  if (!match) {
    new Player().play('vimeo', vmatch.pop(), start, end);
    return;
  }

  fix = setInterval(() => {
    if ($('#player').prop('nodeName') === "IFRAME" || $('#player').html().length > 0) {
      clearInterval(fix);
      return;
    }
    new Player().play('youtube', match[1], start, end);
  }, 100);
}

