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

    $(".album").on('click', function(e) {
      album(jQuery(this).attr('id'));
    });

  })
}


async function all() {
  let res = await doJSONRequest('GET', '/profile/all', undefined, undefined);


  let obj = {};
  obj.posts = res;

  nunjucks.render('post/list.html', obj, (err, cont) => {
    document.getElementsByClassName("cont_iterator")[0].innerHTML = cont;
  });

  eventHandler();
}

async function public() {

  let res = await doJSONRequest('GET', '/profile/public', undefined, undefined);


  let obj = {};
  obj.posts = res;

  nunjucks.render('post/list.html', obj, (err, cont) => {
    document.getElementsByClassName("cont_iterator")[0].innerHTML = cont;
  });

  eventHandler();

}


async function private() {
  let res = await doJSONRequest('GET', '/profile/private', undefined, undefined);


  let obj = {};
  obj.posts = res;


  nunjucks.render('post/list.html', obj, (err, cont) => {
    document.getElementsByClassName("cont_iterator")[0].innerHTML = cont;
  });

  eventHandler();
}

async function album(id) {

  console.log("OOOOO");
  let res = await doJSONRequest('GET', '/album/user/'+id, undefined, undefined);

  console.log(res);

  nunjucks.render('profile/albumViews.html', res, (err, cont) => {
    document.getElementsByClassName("cont_iterator")[0].innerHTML = cont;
  });

  eventHandler();
}

function eventHandler() {
  $(document).ready(() => {
    $('select.dropdown').dropdown();
    $('div.dropdown').dropdown();
    likeStart();
  });

}
