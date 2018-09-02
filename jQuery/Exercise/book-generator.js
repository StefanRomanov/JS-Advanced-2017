let bookGenerator = (function bookGenerator() {
    let id = 1;
    return function(selector, title, author, isbn) {
        let mainDiv = $(`<div id="book${id}">`);
        let bookTitle = $(`<p class="title">${title}</p>`);
        let bookAuthor = $(`<p class="author">${author}</p>`);
        let bookIsbn = $(`<p class="isbn">${isbn}</p>`);
        let select = $(`<button>Select</button>`);
        let deselect = $(`<button>Deselect</button>`);

        mainDiv.append(bookTitle);
        mainDiv.append(bookAuthor);
        mainDiv.append(bookIsbn);
        mainDiv.append(select);
        mainDiv.append(deselect);

        mainDiv.appendTo($(selector));

        select.click(selectDiv);
        deselect.click(deselectDiv);

        function selectDiv() {
            mainDiv.css('border', '2px solid blue');
        }

        function deselectDiv() {
            mainDiv.css('border', 'none');
        }
        id++;
    }
}());