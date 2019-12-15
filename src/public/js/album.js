function albumStart() {

  $(document).ready(function(){

    $(".addAlbum").on('click', function(e) {
      addAlbum(jQuery(this).attr('id'));
    });

  });

}


async function addAlbum(id) {

  let postId = id.substr(0, id.length - 5);

  let res = await doFetchRequest('GET', '/album/user/', undefined, undefined);

  nunjucks.render('post/albumResults.html', res, (err, cont) => {
    document.getElementsByClassName("res")[0].innerHTML = cont;

    $(".albumNames").on('click', function(e) {
      let albumId = jQuery(this).attr('id');
      doJSONRequest('PUT', '/album/', undefined, {id: postId, album: albumId})
    });
  });
}
