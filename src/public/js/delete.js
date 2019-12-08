function deleteStart() {

  $(document).ready(function(){

    $(".del").on('click', function(e) {
      del(jQuery(this).attr('id'));
    });
    
  });

}


async function del(id) {

  let realId = id.substr(0, id.length - 8);

  await doFetchRequest('DELETE', '/post/delete/'+realId, undefined, undefined);

  document.getElementById(realId+"card").outerHTML = "";
}
