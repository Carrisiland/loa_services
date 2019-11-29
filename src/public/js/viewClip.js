
const youtubeRegex =
new RegExp('^(?:(?:(?:https?:\\/\\/)?(?:www\\.)?youtube\\.com\\/watch\\?v=)|' +
           '(?:(?:https?:\\/\\/)?(?:www\\.)?youtu\\.be\\/))' +
           '([\\w+]{11})$', '');
const timeRegex = /^(?:(?:(1?\d):)?([0-5]?\d):)?([0-5]\d)$/;
const vimeoRegex =
new RegExp('(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|' +
           'groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)');


function parseTime(timeString) {
    const match = timeRegex.exec(timeString);
    if (!match) return null;
    match.shift();
    return match.reduce((sum, e) => sum * 60 + (e ? parseInt(e) : 0), 0);
  }

 function loadVideo(link, startTime, ednTime){
    const match = youtubeRegex.exec(link);
    const vmatch = vimeoRegex.exec(link);
    const start = parseTime(startTime);
    const end = parseTime(ednTime);
    console.log("entrato")
    youtubePlayer(match[1], start, end)

}