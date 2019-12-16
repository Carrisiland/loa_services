// vim: set ts=2 sw=2 et tw=80:

function onYouTubeIframeAPIReady() {
  const post = JSON.parse($("#selected-video").html());
  const match = youtubeRegex.exec(post.link);
  const vmatch = vimeoRegex.exec(post.link);
  const start = parseTime(post.startTime);
  const end = parseTime(post.endTime);
  if (match) {
    new Player().play('youtube', match[1], post.start, post.end);
  } else {
    new Player().play('vimeo', vmatch.pop(), post.start, post.end);
  }
}

