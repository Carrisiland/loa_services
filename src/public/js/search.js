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



    function checkExists(inputValue) {
      // console.log(inputValue);

      var x = document.getElementById("results");
      var i;
      for (i = 0; i < x.options.length; i++) {
          if(inputValue == x.options[i].value) {
            let startSymbol = x.options[i].value.substring(0,1);
              if (startSymbol == "Ⓤ") {
                return {type: "user", id: x.options[i].id};
              } else {
                return {type: "post", id: x.options[i].id};
              }

          }
      }
      return undefined;
    }

async function search(value) {


  let res = await doJSONRequest("GET", '/search', {"Accept": 'application/json'}, undefined);

  nunjucks.render('searchResultLive.html', res, (err, cont) => {
    document.getElementById("results").innerHTML = cont;

    $("#searchBar").bind('input', function () {
      // console.log("OOOOOO")
      let d = checkExists( $('#searchBar').val());
      if(d != undefined) {
        let k = d.id;
        if (d.type == "post") {
          window.location = "/post/" + k;
        } else {
          console.log("Userrrr")
          window.location = "/profile/" + k;
        }
      }
    });

  });


}
