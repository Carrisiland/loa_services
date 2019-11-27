let player = null;
let id = null;
let start = null;
let end = null;
let duration = null;

function vimeoPlayer(videoId, startTime, endTime, repeat = true) {
  let videoUrl = "https://player.vimeo.com/video/"+videoId;
  start = startTime;
  end = endTime;
  duration = end - start;

  var frame = document.getElementById('vimeo');
  frame.innerHTML= '<iframe src="'+ videoUrl +'" width="960" height="570"frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen> </iframe>';
  let iframe = document.querySelector('iframe')
  player = new Vimeo.Player(iframe);

    player.ready().then(function() {
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
    }); 
  player.on('play', function() {
      setTimeout(stopVideo, duration *1000);
    console.log('Played the video');
  });
  function stopVideo(){
      player.pause().then(function() {
          console.log("video paused");
          }).catch(function(error) {
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



    //////////
    
