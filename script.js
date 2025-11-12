const firstBookComments = [];
const secondBookComments = [];
const thirdBookComments = [];

//Ins HTML rendern
function renderBook(){
    const allBooksRef = document.getElementById('allBooks')
    
    allBooksRef.innerHTML = "";
    

    for(let i = 0; i < allBooks.length; i++){
      allBooksRef.innerHTML += getBookTemplate(i);

      const allDefaultCommentsRef = document.getElementById('defaultComments')
      allDefaultCommentsRef.innerHTML ="";

      for(let j = 0; j < allBooks[i].comments.length; j++){
        allDefaultCommentsRef.innerHTML += getDefaultCommentTemplate(allBooks[i].comments[j]);
      }
      
    }
        
    }
 
// #region addComment
function addComment(){
  const commentInputRef = document.getElementById(`addComments`)
  const commentInput = commentInputRef.value.replace(/\n/g, "<br>");

  if(commentInputRef.value.replace(/\n/g, "<br>")){

      firstBookComments.unshift(commentInput);
  }else{}

  // renderComments();
  commentInputRef.value = "";
}

function addSecondComment(){
  const commentInputRef = document.getElementById(`addSecondComments`)
  const commentInput = commentInputRef.value.replace(/\n/g, "<br>");

  if(commentInputRef.value.replace(/\n/g, "<br>")){

    secondBookComments.unshift(commentInput);
  }else{}

  renderSecondComments();
  commentInputRef.value = "";
}

function addThirdComment(){
  const commentInputRef = document.getElementById(`addThirdComments`)
  const commentInput = commentInputRef.value.replace(/\n/g, "<br>");

  if(commentInputRef.value.replace(/\n/g, "<br>")){

    thirdBookComments.unshift(commentInput);
  }else{}

  renderThirdComments();
  commentInputRef.value = "";
}
// #endregion
// #region renderComments
// function renderComments(){
//   const commentsRef = document.getElementById(``)
//   commentsRef.innerHTML = "";

//   for(let i = 0; i < firstBookComments.length; i++)
//     commentsRef.innerHTML += getOwnCommentTemplate(i);
// }

function renderSecondComments(){
  const commentsRef = document.getElementById(`comments_2`)
  commentsRef.innerHTML = "";

  for(let i = 0; i < secondBookComments.length; i++)
    commentsRef.innerHTML += getOwnSecondCommentTemplate(i);
}

function renderThirdComments(){
  const commentsRef = document.getElementById(`comments_3`)
  commentsRef.innerHTML = "";

  for(let i = 0; i < thirdBookComments.length; i++)
    commentsRef.innerHTML += getOwnThirdCommentTemplate(i);
}

function toggleBtn(){
  

  if(allBooks.liked == true){
    document.getElementById('heart').classList.toggle('dislikeBtn');
  }else{
    // document.getElementById('heart').classList.toggle('like_btn');
  }
    
}
// #endregion
// #region other comments
// function addOtherComments(){
//   const commentsRef = document.getElementById(`comments`)
//   commentsRef.innerHTML = "";
  
//   for(let i = 0; i < allBooks.bookOneComments.length; i++){
//     firstBookComments.push(allBooks.bookOneComments[i])
//     commentsRef.innerHTML += getOtherCommentTemplate(i);
// }
// }
// function renderOtherSecondComments(){
//   const commentsRef = document.getElementById(`comments_2`)
//   commentsRef.innerHTML = "";

//   for(let i = 0; i < secondBookComments.length; i++)
//     commentsRef.innerHTML += getOtherSecondCommentTemplate(i);
// }

// function renderOtherThirdComments(){
//   const commentsRef = document.getElementById(`comments_3`)
//   commentsRef.innerHTML = "";

//   for(let i = 0; i < thirdBookComments.length; i++)
//     commentsRef.innerHTML += getOtherThirdCommentTemplate(i);
// }

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }
