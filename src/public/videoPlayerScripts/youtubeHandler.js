// vim: set ts=2 sw=2 et tw=80:
// This code loads the IFrame Player API code asynchronously.

let player = null;
let id = null;
let start = null;
let end = null;
let duration = null;
let volume = 0;

function youtubePlayer(videoId, startTime, endTime, repeat = true) {
  return new Promise((resolve, reject) => {
    let firstPlay = true;

    id = videoId;
    start = startTime;
    end = endTime;
    duration = end - start;

    console.log(id, start, end, duration);

    $(document).ready(() => {
      if (player) {
        if (player.getVolume)
          volume = player.getVolume();
        player.destroy();
      }

      
        setTimeout(function() {
          player = new YT.Player('player', {
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        }) 
        
      }, 0);
    
      
      
      
      // The API will call this function when the video player is ready.
    
      function onPlayerReady() {
        player.loadVideoById({
          videoId: id,
          startSeconds: start,
          endSeconds: end
        });
        player.setVolume(volume);
        player.playVideo();
      }

      function onPlayerStateChange(e) {
        if (e.data == YT.PlayerState.PLAYING && firstPlay) {
          firstPlay = false;
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
