function followStart() {

  $(document).ready(function(){

    $(".followButton").on('click', function(e) {
      e.preventDefault();
      changeButton(jQuery(this).attr('id'));
    });

  })
}


async function changeButton(id) {

  await doFetchRequest("POST", '/follow/'+id, undefined, "");

  if (document.getElementById("followContent").innerHTML == "Follow") {
    document.getElementById("followContent").innerHTML = "Unfollow"
  } else {
    document.getElementById("followContent").innerHTML = "Follow"
  }
}
