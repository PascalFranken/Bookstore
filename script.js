const allComments = [];
let allBooks = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "cover": "./img/preview_picture/ocean.jpg",
      "alt": "Weite Meeresoberfläche unter einem bewölkten Himmel mit Sonnenlicht, das durch Wolken bricht",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": "19.99€",
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
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
      "price": "14.50€",
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Der letzte Sonnenuntergang",
      "cover": "./img/preview_picture/sun.jpg",
      "alt": "Leuchtende Sonne am Himmel mit orange-roten Wolken bei Sonnenuntergang",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": "22.95€",
      "publishedYear": 2019,
      "genre": "Romantik",
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

    for(let i = 0; i < allBooks.length; i++)
        allBooksRef.innerHTML += getBookTemplate(allBooks[i]);

    // for(let j = 0; j < bookCollection.length; j++){
    //     const togglePicture = document.getElementById(`heart`)
    //     togglePicture.onclick= toggleLike();
    // }
}     

function addComment(){
  const commentInputRef = document.getElementById(`addComments`)
  const commentInput = commentInputRef.value;

  allComments.push(library);
  renderBook();
}