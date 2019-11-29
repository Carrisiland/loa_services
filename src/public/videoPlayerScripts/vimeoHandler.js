// vim: set ts=2 sw=2 et tw=80:

window.playState = window.playState || {
  service: null,
  player: null,
  volume: null
};

function vimeoPlayer(videoId, startTime, endTime, repeat = true) {
  start = startTime;
  end = endTime;
  duration = end - start;

  if (playState.service === 'youtube') {
    youtubeDestroy();
  }

  playState.service = 'vimeo';

  $('#player').html('');
  player = new Vimeo.Player('player', {
    id: videoId
  });

  player.ready().then(function() {
    timeSeeker();
    startPlayer();
  });

  function startPlayer() {
    player.play();
    setTimeout(stopVideo, duration * 1000);
    console.log('Played the video');
  }

  function timeSeeker() {
    player.setCurrentTime(startTime).then(function(seconds) {
      console.log(startTime);
    }).catch(function(error) {
      switch (error.name) {
        case 'RangeError':
          // The time is less than 0 or greater than the video's duration
          break;

        default:
          // Some other error occurred
          break;
      }
    });
  }

  function stopVideo(){
    player.pause().then(function() {
      console.log('video paused');
      if (repeat) {
        timeSeeker();
        startPlayer();
      }
    }).catch(error => {
      switch (error.name) {
        case 'PasswordError':
          // The video is password-protected
          break;

        case 'PrivacyError':
          // The video is private
          break;

        default:
          // Some other error occurred
          break;
      }
    });
  }
}
