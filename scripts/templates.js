function getBookTemplate(allBooks){
   return `<div class="book_window"><header class="book_header">
        <h1>${allBooks.name}</h2>
        </header>
         
        <section class="section_1">
        <img class="preview" 
        src=${allBooks.cover}
        alt=${allBooks.alt}>
        </section>
        
        <section class="section_2">
        <header class="header_section2">${allBooks.price}
        <div class="likes">${allBooks.likes}
        <img id="heart" class="like_btn" src="">
        </div></header>
            <div class="table">
            <table>
                <tr><td>Author:</td></tr>
                <tr><td>Release:</td></tr>
                <tr><td>Genre:</td></tr>
            </table>
            <table>
                <tr><td>${allBooks.author}</td></tr>
                <tr><td>${allBooks.publishedYear}</td></tr>
                <tr><td>${allBooks.genre}</td></tr>
            </table>
            </div>
            </section>
            
            <section class="section_3">
            <header class="header_section3">Kommentare:</header>
            <div class"comments"></div>
            <footer id="book_footer"><input type="text"></footer>

            
            `}


