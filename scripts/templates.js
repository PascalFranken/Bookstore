function getBookTemplate(i){
   return /*html*/`
    
    <div class="book_window"><header class="book_header">
        <h1>${allBooks[i].name}</h2>
        </header>
         
        <section class="section_1">
        <img class="preview" 
        src=${allBooks[i].cover}
        alt=${allBooks[i].alt}>
        </section>
        
        <section class="section_2">
        <header class="header_section2">${allBooks[i].price}
        <div class="likes">${allBooks[i].likes}
         <!-- <button id="heart" ${i.btn} onclick="toggleBtn()"> -->
        
        </button>
        </div></header>
            <div class="table">
            <table>
                <tr><td>Author:</td></tr>
                <tr><td>Release:</td></tr>
                <tr><td>Genre:</td></tr>
            </table>
            <table>
                <tr><td>${allBooks[i].author}</td></tr>
                <tr><td>${allBooks[i].publishedYear}</td></tr>
                <tr><td>${allBooks[i].genre}</td></tr>
            </table>
            </div>
            </section>
            
            <section class="section_3">
             <h2>Kommentare:</h2>
             <div class="table_comments">
             <table id="defaultComments">
             
             </table>
             </div>
             <div class="input_field_container">
             <textarea ${allBooks[i].input} required></textarea> 
             <input ${allBooks[i].submitBtn}>
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

function getDefaultCommentTemplate(comment){
    return/*html*/`
        <tr><td><p>${comment.name}</p></td>
        <td class="td"><p>${comment.comment}</p></td></tr>`;
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






// <!-- <tr><td>${allBooks[0].bookOneComments[0].name}</td></tr>;
//              <tr><td>${allBooks[0].bookOneComments[0].comment}</td></tr>; -->