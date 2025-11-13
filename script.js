const firstBookComments = [];
const secondBookComments = [];
const thirdBookComments = [];

//Ins HTML rendern
function renderBook(){
    const allBooksRef = document.getElementById('allBooks')
    allBooksRef.innerHTML = "";
    for(let i = 0; i < allBooks.length; i++){
      allBooksRef.innerHTML += getBookTemplate(i);
      const allDefaultCommentsRef = document.getElementById(`defaultComments${[i]}`)
      allDefaultCommentsRef.innerHTML ="";
      for(let j = 0; j < allBooks[i].comments.length; j++){
        allDefaultCommentsRef.innerHTML += getDefaultCommentTemplate(i,j);
      }}}
 
// #region addComment
function addComment(i){
  const commentInputRef = document.getElementById(`addComments${[i]}`)
  const commentInput = commentInputRef.value.replace(/\n/g, "<br>");
  const allDefaultCommentsRef = document.getElementById(`defaultComments${[i]}`)
  
  if(commentInputRef.value.replace(/\n/g, "<br>")){
    }else{}
        allBooks[i].comments.name.unshift(`[Pascal]:`);
        allBooks[i].comments.comment.unshift(commentInput);
        allDefaultCommentsRef.innerHTML += /*html*/`
        <tr><td><p>[Pascal]:</p></td> <td class="td"><p>${allBooks[i].comments[0]}</p></td></tr>`;
        commentInputRef.value = "";
        // renderBook();
}

function toggleBtn(){
  

  if(allBooks.liked == true){
    document.getElementById('heart').classList.toggle('dislikeBtn');
  }else{
    // document.getElementById('heart').classList.toggle('like_btn');
  }
    
}

