function commentReplyStart() {

  $(document).ready(function(){

    $(".replyComment").on('click', function(e) {
      newReplyArea(jQuery(this).attr('id'));
    });

  });

}
