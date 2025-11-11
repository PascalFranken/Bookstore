const firstBookComments = [];
const secondBookComments = [];
const thirdBookComments = [];

let allBooks = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "cover": "./img/preview_picture/ocean.jpg",
      "alt": "Weite Meeresoberfläche unter einem bewölkten Himmel mit Sonnenlicht, das durch Wolken bricht",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "btn": "class='like_btn'",
      "price": "19.99€",
      "publishedYear": 2018,
      "genre": "Fantasy",
      "input": `id= addComments class=input type=text placeholder="Schreibe einen Kommentar" `,
      "submitBtn": "class=input_style type=submit onclick=addComment()",
      "comments": [
        {
          "name": "Leser123:",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84:",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic:",
          "comment": "Eine spannende Naturgeschichte, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "NovelLover:",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Die Wunder des Mondes",
      "cover": "./img/preview_picture/moon.jpg",
      "alt": "Halbmond des Mondes mit sichtbaren Kratern vor schwarzem Nachthimmel",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "btn": "class='dislikeBtn'",
      "price": "14.50€",
      "publishedYear": 2021,
      "genre": "Fantasy",
      "input": `id=addSecondComments class=input type=text placeholder="Schreibe einen Kommentar" required`,
      "submitBtn": "class=input_style type=submit onclick=addSecondComment()",
      "comments": []
    },
    {
      "name": "Der letzte Sonnenuntergang",
      "cover": "./img/preview_picture/sun.jpg",
      "alt": "Leuchtende Sonne am Himmel mit orange-roten Wolken bei Sonnenuntergang",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "btn": "class='like_btn'",
      "price": "22.95€",
      "publishedYear": 2019,
      "genre": "Romantik",
      "input": `id=addThirdComments class=input type=text placeholder="Schreibe einen Kommentar" required`,
      "submitBtn": "class=input_style type=submit onclick=addThirdComment()",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    }
]



//Ins HTML rendern
function renderBook(){
    const allBooksRef = document.getElementById('allBooks')
    
    allBooksRef.innerHTML = "";
    

    for(let i = 0; i < allBooks.length; i++){
      allBooksRef.innerHTML += getBookTemplate(allBooks[i]);

      const allDefaultCommentsRef = document.getElementById('comments')
      allDefaultCommentsRef.innerHTML = "";

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
