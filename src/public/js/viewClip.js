// vim: set ts=2 sw=2 et tw=80:

function loadVideo(link, startTime, ednTime){
  const match = youtubeRegex.exec(link);
  const vmatch = vimeoRegex.exec(link);
  const start = parseTime(startTime);
  const end = parseTime(ednTime);
  console.log("entrato")
  if (match) {
    new Player().play('youtube', match[1], start, end);
  } else {
    new Player().play('vimeo', vmatch.pop(), start, end);
  }
}

function onYouTubeIframeAPIReady() {
  const post = JSON.parse($("#selected-video").html());
  loadVideo(post.video.link, post.video.start, post.video.end);
}
