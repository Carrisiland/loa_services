function likeStart() {

  $(document).ready(function(){
    console.log($(".likeUp"));

    // const $likeUp = $['button[class=likeUp]'];
    // const $likeDown = $['button[class=likeDown]'];

    $(".likeUp").on('click', function(e) {
      // console.log(e.target.attr('id'));
      e.preventDefault();
      likeUp(jQuery(this).attr('id'));
    });

    $(".likeDown").on('click', function(e) {
      // console.log(e.target.attr('id'));
      e.preventDefault();
      likeDown(jQuery(this).attr('id'));
    });

  });

}


function likeUp(id) {
  // doFetchRequest('GET', '/ciao/post', undefined, {});

}

function likeDown(id) {

}
