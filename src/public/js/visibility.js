// var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('views'));


function visibilityStart() {

  $(document).ready(function(){

    $("#all").on('click', function(e) {
      all();
    });

    $("#public").on('click', function(e) {
      public();
    });

    $("#private").on('click', function(e) {
      private();
    });

  })
}


async function all() {
  let res = await doJSONRequest('GET', '/profile/all', undefined, undefined);


  let obj = {};
  obj.posts = res;

  nunjucks.render('post/list.html', obj, (err, cont) => {
    document.getElementsByClassName("cards")[0].innerHTML = cont;
  });
}

async function public() {

  let res = await doJSONRequest('GET', '/profile/public', undefined, undefined);


  let obj = {};
  obj.posts = res;

  nunjucks.render('post/list.html', obj, (err, cont) => {

    document.getElementsByClassName("cards")[0].innerHTML = cont;
  });


}


async function private() {
  let res = await doJSONRequest('GET', '/profile/private', undefined, undefined);


  console.log(res);
  let obj = {};
  obj.posts = res;

  console.log(obj)

  nunjucks.render('post/list.html', obj, (err, cont) => {
    // console.log(cont);
    // console.log($(".ui.three.stackable.cards").innerHTML);
    console.log();
    document.getElementsByClassName("cards")[0].innerHTML = cont;
  });

}
