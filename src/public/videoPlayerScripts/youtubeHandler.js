// vim: set ts=2 sw=2 et tw=80:
// This code loads the IFrame Player API code asynchronously.

window.playState = window.playState || {
  service: null,
  player: null,
  volume: null
};

function youtubeDestroy() {
  if (playState.player.getVolume)
    playState.volume = playState.player.getVolume();
  playState.player.destroy();
  playState.service = null;
}

function youtubePlayer(videoId, startTime, endTime, repeat = true) {
  return new Promise((resolve, reject) => {
    let firstPlay = true;

    //if (playState.service === 'vimeo') {
    //  vimeoDestroy();
    //}

    playState.service = 'youtube';

    $(document).ready(() => {
      if (playState.player) {
        youtubeDestroy();
      }
      setTimeout(function() {
        playState.player = new YT.Player('player', {
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        })
      }, 0);

      // The API will call this function when the video player is ready.
      function onPlayerReady() {
        playState.player.loadVideoById({
          videoId: videoId,
          startSeconds: startTime,
          endSeconds: endTime
        });
        playState.player.setVolume(playState.volume);
        playState.player.playVideo();
      }

      function onPlayerStateChange(e) {
        if (e.data == YT.PlayerState.PLAYING && player.getDuration && firstPlay) {
          firstPlay = false;
          resolve({
            duration: player.getDuration()
          });
        }

        if (e.data == YT.PlayerState.ENDED && repeat) {
          playState.player.seekTo(startTime, true);
          playState.player.playVideo();
        }
      }
    });
  });
}
