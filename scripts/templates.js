function getBookTemplate(allBooks, ){
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
             <h2>Kommentare:</h2>
            
             <table class="table_comments" ${allBooks.table}>
             <tr></tr>
             <tr></tr>
             <tr><td><p>${allBooks.comments[0].name}</p></td></tr>
             <tr><td><p>${allBooks.comments[0].comment}</p></td></tr>
             <tr><td><p>${allBooks.comments[1].name}</p></td></tr>
             <tr><td><p>${allBooks.comments[1].comment}</p></td></tr>
             <tr><td><p>${allBooks.comments[2].name}</p></td></tr>
             <tr><td><p>${allBooks.comments[2].comment}</p></td></tr>
             <tr><td><p>${allBooks.comments[3].name}</p></td></tr>
             <tr><td><p>${allBooks.comments[3].comment}</p></td></tr>
             <tr><td><p>${allBooks.comments[4].name}</p></td></tr>
             <tr><td><p>${allBooks.comments[4].comment}</p></td></tr>
             </table>
             <div class="input_field_container">
             <input ${allBooks.input}>
             <input ${allBooks.submitBtn}>
             </div>
            
            
            </section>
            </div>


            
            `}

function getCommentTemplate(indexComments){
    return/*html*/`
        <td><p>[Pascal]:</p></td>
        <td>${firstBookComments[indexComments]}</td></tr>`;
}

function getSecondCommentTemplate(indexComments){
    return/*html*/`
        <td><p>[Pascal]:</p></td>
        <td>${secondBookComments[indexComments]}</td></tr>`;
}

function getThirdCommentTemplate(indexComments){
    return/*html*/`
        <td><p>[Pascal]:</p></td>
        <td>${thirdBookComments[indexComments]}</td></tr>`;
}

// function getOtherCommentTemplate(indexComments){
//     return/*html*/`
//         <td><p>[Pascal]:</p></td>
//         <td>${firstBookComments[indexComments]}</td></tr>`;
// }

// function getOtherSecondCommentTemplate(indexComments){
//     return/*html*/`
//         <td><p>[Pascal]:</p></td>
//         <td>${secondBookComments[indexComments]}</td></tr>`;
// }

// function getOtherThirdCommentTemplate(indexComments){
//     return/*html*/`
//         <td><p>[Pascal]:</p></td>
//         <td>${thirdBookComments[indexComments]}</td></tr>`;
// }
