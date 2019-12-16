// vim: set ts=2 sw=2 et tw=80:

let socket = io();

function galleryStart() {
  socket.on('new.post', function(event){
    getPosts();
  });

  socket.on('delete.post', function(event){
    getPosts();
  });
}


async function getPosts() {
  let res = await doJSONRequest("GET", '/post/gallery',
    {"Accept": 'application/json'}, undefined);

  nunjucks.render('post/list.html', res, (err, cont) => {
    document.getElementById("posts").innerHTML = cont;
  });
}
