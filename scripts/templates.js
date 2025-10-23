function getBookTemplate(book,i){
   return `<div class="book_window"><header class="book_header">
        <span>${book.title}</span>
        </header>
         
        <section class="section_1">
        <img class="preview" 
        src=${book.path} 
        alt="Rundes, blaues Logo mit einer weißen Darstellung eines geöffneten Buches und dem Schriftzug BOOKSTORE">
        </section>
        
        <section class="section_2">
        <header class="header_section2">${book.price}
        <div class="likes">${book.likes}
        <button id="toggle">
        <img class="like_btn" src="./img/btn/heart.jpg">
        <img class="like_btn" src="./img/btn/grey-heart.png">
        </button></div></header>
            <div class="table">
            <table>
                <tr><td>Author:</td></tr>
                <tr><td>Release:</td></tr>
                <tr><td>Genre:</td></tr>
            </table>
            <table>
                <tr><td>${book.author}</td></tr>
                <tr><td>${book.year}</td></tr>
                <tr><td>${book.genre}</td></tr>
            </table>
            </div>
            </section>
            
            <section class="section_3">
            <header class="header_section3">Kommentare:</header>
            <div class"comments"></div>
            <footer class"book_footer"><input type="text"></footer>

            
            `}


