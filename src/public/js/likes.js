const upvotesBtn = document.getElementsByName("upvotes");

function upvote() {
    
    upvotesBtn.addEventListener('click', event => {
        event.preventDefault();
        doJSONRequest('POST', '/likes/', {}, ) //or PUT ?
        .then(data => {
            document.querySelector('upvotes').innerText = upvotesBtn.val() + 1;
        })
        .catch(console.error());
    });
    
}
function downvote() {
    const downvotes = document.getElementsByName("downvotes").val();
}