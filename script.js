//Erstellung der Klasse (Vorlage)

class Bookinfo {
    constructor(_title, _author, _year, _genre, _price, _path, _likes, _isLiked, _comments){
    this.title = _title;
    this.author = _author;
    this.year = _year;
    this.genre = _genre;
    this.price = _price;
    this.path = _path;
    this.likes = _likes;
    this.isLiked = _isLiked;
    this.comments = _comments;
}
//Methode zum liken
// likeBook(){
//    if(this.isLiked == false){
//     this.likes++;
//    } else{
//     this.likes--;
//    }
//     this.isLiked = !this.isLiked;
// }
//Methode um das Liken zu toggeln
toggleLike(){
    if (this.isLiked){
        document.getElementById(`heart`).src = `./img/btn/heart.jpg`;
        this.likes++;
    } else {
        document.getElementById(`heart`).src = `./img/btn/grey-heart.jpg`;
        this.likes--;
    }
    this.isliked = !this.isLiked;
    
}
}

//Instanzierungen
const book1 = new Bookinfo(
    "Der Ozean", 
    "Clara Meer",
    2018,
    "Fantasy",
    "20.00€",
    "./img/preview_picture/ocean.jpg",
    1300,
    true,
    [],
)

const book2 = new Bookinfo("Die Sonne", "Lara Hell", 2019, "Drama", "15.00€", "./img/preview_picture/sun.jpg", 900, false, []);
const book3 = new Bookinfo("Der Mond", "Jonas Licht", 2020, "Sci-Fi", "25.00€", "./img/preview_picture/moon.jpg", 450, false, []);

//Array zum Iterieren der Instanzierungen
const bookCollection = [book1,book2,book3];

//Ins HTML rendern
function renderBook(){
    const bookCollectionRef = document.getElementById('book_collection')
    bookCollectionRef.innerHTML = "";

    for(let i = 0; i < bookCollection.length; i++)
        bookCollectionRef.innerHTML += getBookTemplate(bookCollection[i],i);

    for(let j = 0; j < bookCollection.length; j++){
        const togglePicture = document.getElementById(`heart`)
        togglePicture.onclick= toggleLike();
    }
}     
