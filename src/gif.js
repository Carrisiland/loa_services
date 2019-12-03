// vim: set ts=2 sw=2 et tw=80:

const youtubedl = require('youtube-dl');
const ffmpeg = require('fluent-ffmpeg');

const url = 'http://www.youtube.com/watch?v=dQw4w9WgXcQ';
const start = 50;
const end = 60;

youtubedl.getInfo(url, ['-f worst'], (err, info) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('title:', info.title);
  console.log('url:', info.url);

  // ffmpeg -i (youtube-dl -f worst --get-url
  // https://www.youtube.com/watch\?v=$ID) -ss 60 -t 5 -c:v copy -c:a copy
  // /tmp/out.mp4 && ffmpeg -i /tmp/out.mp4 -pix_fmt rgb8 -r 10 out.gif &&
  // convert -layers Optimize out.gif out.gif; open out.gif
  //
  ffmpeg(info.url)
    .seekInput(start)
    .duration(end - start)
    .outputOptions('-pix_fmt rgb8')
    .fps(10)
    .output('out.gif')
    .on('stderr', console.warn)
    .run()
});


