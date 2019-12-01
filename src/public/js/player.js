// vim: set ts=2 sw=2 et tw=80:
// This code loads the IFrame Player API code asynchronously.

class Player {
  domId = 'player';
  type = null;
  player = null;
  volume = 0;
  playCode = {};
  destroyer = {};

  play(type, id, start, end, repeat = true) {
    if (this.type) {
      this.destroyer[this.type]();
    }

    this.service = type;

    return this.playCode[type](id, start, end, repeat);
  }

  constructor() {
    this.destroyer['youtube'] = () => {
      if (this.player.getVolume)
        this.volume = this.player.getVolume();
      this.player.destroy();
    };

    this.destroyer['vimeo'] = () => {
      this.player.destroy();
    };

    this.playCode['youtube'] = (videoId, startTime, endTime, repeat) => {
      return new Promise((resolve, reject) => {
        let firstPlay = true;
        let firstOnReady = true;

        const onReady = () => {
          if (!firstOnReady) return;

          if (!this.player.loadVideoById) {
            setTimeout(onReady, 0);
            return;
          }

          console.log(videoId, startTime, endTime);
          this.player.loadVideoById({
            videoId: videoId,
            startSeconds: startTime,
            endSeconds: endTime
          });
          this.player.setVolume(this.volume);
          this.player.playVideo();

          firstOnReady = false;
        };

        // The API will call this function when the video player is ready.
        const onStateChange = e => {
          if (e.data == YT.PlayerState.PLAYING &&
            player.getDuration && firstPlay) {

            firstPlay = false;
            resolve({
              duration: player.getDuration()
            });
          }

          if (e.data == YT.PlayerState.ENDED && repeat) {
            this.player.seekTo(startTime, true);
            this.player.playVideo();
          }
        };

        this.player = new YT.Player(this.domId, {
          events: { onReady, onStateChange }
        });
      });
    };

    this.playCode['vimeo'] = (videoId, startTime, endTime, repeat) => {
      return new Promise((resolve, reject) => {
        $(`#${this.domId}`).html('');
        this.player = new Vimeo.Player('player', {
          id: videoId
        });

        this.player.setVolume(this);

        const stopVideo = () => {
          this.player.pause().then(() => {
            console.log('video paused');
            if (repeat) {
              timeSeeker()
                .then(this.player.play());
            }
          }).catch(console.error);
        }

        const timeSeeker = () => {
          return this.player.setCurrentTime(startTime)
            .catch(console.error);
        }

        this.player.ready().then(() => {
          $(`#${this.domId} > iframe`)
            .attr('width', '100%')
            .attr('height', '100%');

          this.player.setVolume(0)
            .catch(console.error);
          this.player.addCuePoint(endTime)
            .catch(console.error);
          this.player.on('cuepoint', stopVideo);
          timeSeeker()
            .then(this.player.play())
            .catch(console.error);

          this.player.getDuration()
            .then(e => resolve({ duration: e }))
            .catch(reject);
        });
      });
    };
  }
}
