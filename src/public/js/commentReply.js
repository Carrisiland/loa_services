function commentReplyStart() {

  $(document).ready(function(){

    $(".replyComment").on('click', function(e) {
      newReplyArea(jQuery(this).attr('id'));
    });

  });

}

function newReplyArea(id) {

  let realId = id.substr(0, id.length - 11);

  let textArea = "<form id='replyForm'" + realId + "class='ui reply form'>"
  textArea +="<div class='field reply'>"
  textArea += "<textarea id='reply'" + realId + "></textarea>"
  textArea += "</div>"
  textArea += "<button id=" + realId+ "comment class='ui blue labeled submit icon button'>"
  textArea += "<i class='icon edit'></i> Add Reply </button> </form>"

  document.getElementById(realId+"replyArea").innerHTML = textArea;

  $(".replyForm").on('click', function(e) {
    newReplyComment(realId);
  });

}

async function newReplyComment(realId) {

  const reply = document.getElementById("reply"+realId).value;
  document.getElementById(realId+"replyArea").innerHTML = "";

  const res = await doJSONRequest('POST', '/post/commentReply/'+realId, undefined, {reply});
  let obj = {};
  obj.commentReply = res;

  nunjucks.render('post/commentReply.html', obj, (err, cont) => {
    document.getElementsById(realId + "commentReplies").innerHTML += cont;
  });


}
