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
             <h2>Kommentare:</h2>
             <div class="table_comments">
             <table  ${allBooks.table}>
             
             </table>
             </div>
             <div class="input_field_container">
             <textarea ${allBooks.input} required></textarea> 
             <input ${allBooks.submitBtn}>
             </div>
            
            
            </section>
            </div>


            
            `}

// #region
function getOwnCommentTemplate(indexComments){
    return/*html*/`
        <tr><td><p>[Pascal]:</p></td>
        <td class="td"><p>${firstBookComments[indexComments]}</p></td></tr>`;
}

function getOwnSecondCommentTemplate(indexComments){
    return/*html*/`
        <tr><td><p>[Pascal]:</p></td>
        <td class="td"><p>${secondBookComments[indexComments]}</p></td></tr>`;
}

function getOwnThirdCommentTemplate(indexComments){
    return/*html*/`
        <tr><td><p>[Pascal]:</p></td>
        <td class="td"><p>${thirdBookComments[indexComments]}</p></td></tr>`;
}

function getOtherCommentTemplate(indexComments){
    return/*html*/`
        <tr><td><p>${firstBookComments[indexComments]}</p></td></tr>`;
}

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
