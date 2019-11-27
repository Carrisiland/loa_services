// vim: set ts=2 sw=2 et tw=80:
// This code loads the IFrame Player API code asynchronously.

let player = null;
let id = null;
let start = null;
let end = null;
let duration = null;
let done = false;

function youtubePlayer(videoId, startTime, endTime, repeat = true) {
  return new Promise((res, rej) => {
    id = videoId;
    start = startTime;
    end = endTime;
    duration = end - start;

    $(document).ready(() => {
      if (!player) {
        player = new YT.Player('player', {
          height: '480',
          width: '720',
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        });
      } else if (ready) {
        onPlayerReady();
      }

      // The API will call this function when the video player is ready.
      function onPlayerReady() {
        ready = true;
        console.log(player, id, start, end);
        player.loadVideoById({
          videoId: id,
          startSeconds: start,
          endSeconds: end
        });
        player.mute();
        player.playVideo();
      }

      function onPlayerStateChange(e) {
        if (e.data == YT.PlayerState.ENDED && repeat) {
          player.seekTo(start, true);
          player.playVideo();
        }
      }
    });
  });
}
