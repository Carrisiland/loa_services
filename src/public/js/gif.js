// vim: set ts=2 sw=2 et tw=80:

const gifButton = $('#gifit');
const gifSegment = $('#gif-segment');

gifButton.click(() => {
  gifSegment.toggle(true);
  doFetchRequest('POST', `/post/${gifButton.attr('data-postid')}/gif`, {}, "")
    .then(res => res.arrayBuffer())
    .then(ab => {
      console.log(ab);
      gifButton.attr('disabled', true);
      const blob = new Blob([ab]);
      const imgPlace = $('#gif-segment > div');
      console.log(blob, imgPlace);
      imgPlace.html(`<img height="100%"
        src=${window.URL.createObjectURL(blob)}>`);
    })
    .catch(e => {
      console.error(e);
      gifSegment.toggle(false);
    });
});
