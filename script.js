//Ins HTML rendern
function renderBook() {
    const allBooksRef = document.getElementById("allBooks");
    allBooksRef.innerHTML = "";
    for (let i = 0; i < allBooks.length; i++) {
        allBooksRef.innerHTML += getBookTemplate(i);

        const allDefaultCommentsRef = document.getElementById(
            `defaultComments${[i]}`
        );
        allDefaultCommentsRef.innerHTML = "";
        for (let j = 0; j < allBooks[i].comments.length; j++) {
            allDefaultCommentsRef.innerHTML += getDefaultCommentTemplate(i, j);
        }addClass(i);
    }
}
// #region addComment
function addComment(i) {
    const commentInputRef = document.getElementById(`addComments${[i]}`);
    const commentInput = commentInputRef.value.replace(/\n/g, "<br>");
    const allDefaultCommentsRef = document.getElementById(
        `defaultComments${[i]}`
    );

    if (commentInputRef.value.replace(/\n/g, "<br>")) {
    } else {
    }

    allBooks[i].comments.unshift(commentInput);
    allDefaultCommentsRef.innerHTML += /*html*/ `
        <tr><td><p>[Pascal]:</p></td> <td class="td"><p>${allBooks[i].comments[0]}</p></td></tr>`;
    commentInputRef.value = "";
}

function addClass(i) {
    if (allBooks[i].liked) {
        document.getElementById(`heart${i}`).classList.add("like_btn");
    } else {
        document.getElementById(`heart${i}`).classList.add("dislikeBtn");
    }
}

function toggleBtn(i) {
    if (allBooks[i].liked) {
        document.getElementById(`heart${i}`).classList.toggle("dislikeBtn");
        allBooks[i].likes --;
    } else {
        document.getElementById(`heart${i}`).classList.toggle("like_btn");
        allBooks[i].likes ++;
    }
const numberRef = document.getElementById(`number${i}`); 
      numberRef.innerText = allBooks[i].likes;

      allBooks[i].liked=!allBooks[i].liked;
}
