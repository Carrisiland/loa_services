console.log("cd5sec");
  var iframe = document.querySelector('iframe');
  var player = new Vimeo.Player(iframe);
  
  player.ready().then(function() {
      player.setCurrentTime(85).then(function(seconds) {
      console.log("85sec");
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
      setTimeout(stopVideo, 10000);
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
  



    //////////
    
