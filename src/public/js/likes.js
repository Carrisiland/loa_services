const upvotesBtn = document.getElementsByName("upvotes");
const downvoteBtn = document.getElementsByName('downvotes');

// function upvote() {
    
    upvotesBtn.addEventListener('click', event => {
        event.preventDefault();
        const post = document.getElementsByName('card');
        console.log('post:' , post);
        
        doJSONRequest('POST', '/likes/', {}, ) //or PUT ?
        .then(data => {
            document.querySelector('upvotes').innerText = upvotesBtn.val() + 1;
        })
        .catch(console.error());
    });
    
// }
function downvote() {
    const downvotes = document.getElementsByName("downvotes").val();
}