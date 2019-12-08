function commentStart() {
  $(document).ready(function(){

    $(".del").on('click', function(e) {
      del(jQuery(this).attr('id'));
    });

  });
}
