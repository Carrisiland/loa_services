// vim: set ts=2 sw=2 et tw=80:

$(".search-form .ui.icon.input > i").click(() => $(".search-form").submit());

function searchStart() {
    $(document).ready(function(){

      $(".search-form").on('keyup', function(e) {
        search($('input[name=searchBar]').val());
      });

      $(".search-form .ui.icon.input > i").click(() => $(".search-form").submit());

    })
}


async function search(value) {


  let res = await doJSONRequest("GET", '/search', {"Accept": 'application/json'}, undefined);

  // console.log(res);

  nunjucks.render('searchResultLive.html', res, (err, cont) => {
    // console.log(cont);
    document.getElementById("results").innerHTML = cont;
  });
}
