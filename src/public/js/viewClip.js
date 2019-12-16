// vim: set ts=2 sw=2 et tw=80:

function onYouTubeIframeAPIReady() {
  const post = JSON.parse($("#selected-video").html());
  const match = youtubeRegex.exec(post.video.link);
  const vmatch = vimeoRegex.exec(post.video.link);
  const start = parseTime(post.video.start);
  const end = parseTime(post.video.end);
  if (match) {
    new Player().play('youtube', match[1], start, end);
  } else {
    new Player().play('vimeo', vmatch.pop(), start, end);
  }
}

