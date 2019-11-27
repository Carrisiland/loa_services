// vim: set ts=2 sw=2 et tw=80:
// This code loads the IFrame Player API code asynchronously.

let player = null;
let id = null;
let start = null;
let end = null;
let duration = null;
let firstUnstarted = true;

function youtubePlayer(videoId, startTime, endTime, repeat = true) {
  return new Promise((resolve, reject) => {
    id = videoId;
    start = startTime;
    end = endTime;
    duration = end - start;

    console.log(id, start, end, duration);

    $(document).ready(() => {
      if (player) {
        player.destroy();
      }
      player = new YT.Player('player', {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });

      // The API will call this function when the video player is ready.
      function onPlayerReady() {
        player.loadVideoById({
          videoId: id,
          startSeconds: start,
          endSeconds: end
        });
        player.mute();
        player.playVideo();
      }

      function onPlayerStateChange(e) {
        console.log(player.getDuration(), e.data, firstUnstarted);
        if (e.data == YT.PlayerState.UNSTARTED && firstUnstarted) {
          firstUnstarted = false;
        } else {
          resolve({
            duration: player.getDuration()
          });
        }

        if (e.data == YT.PlayerState.ENDED && repeat) {
          player.seekTo(start, true);
          player.playVideo();
        }
      }
    });
  });
}
