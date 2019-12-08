function commentReplyStart() {

  $(document).ready(function(){

    $(".replyComment").on('click', function(e) {
      newReplyArea(jQuery(this).attr('id'));
    });

  });

}

function newReplyArea(id) {
  console.log(id);

  let realId = id.substr(0, id.length - 11);

  let textArea = "<div>"
  textArea +="<div class='field reply'>"
  textArea += "<textarea id='textArea" + realId + "'></textarea>"
  textArea += "</div>"
  textArea += "<button id='" + realId + "'comment class='ui blue labeled replySend icon button'>"
  textArea += "<i class='icon edit'></i> Add Reply </button> </div>"

  document.getElementById(realId+"replyArea").innerHTML = textArea;

  $(".replySend").on('click', function(e) {
    newReplyComment(realId);
  });

}

async function newReplyComment(realId) {

  console.log(realId)

  const reply = document.getElementById("textArea"+realId).value;
  console.log(reply);
  document.getElementById(realId+"replyArea").innerHTML = "";

  const res = await doJSONRequest('PATCH', '/post/commentReply/'+realId, undefined, {reply});
  let obj = {};
  obj.commentReply = res;

  nunjucks.render('post/commentReply.html', obj, (err, cont) => {
    document.getElementById(realId + "commentReplies").innerHTML += cont;
  });

  likeStart();


}
