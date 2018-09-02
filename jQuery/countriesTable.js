function initializeTable() {
    hideLinks();
    $('#createLink').click(initiateCountry);
    createCountry('Bulgaria','Sofia');
    createCountry('Germany','Berlin');
    createCountry('Russia','Moscow');

    function initiateCountry(){
        let name = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        createCountry(name,capital);
        hideLinks();
        name = "";
        capital = "";
    }

    function createCountry(name, capital) {
        let row = $('<tr>')
            .append($(`<td>${name}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        row.css('display','none');
        $('#countriesTable').append(row);
        row.fadeIn();
        hideLinks();
    }

    function moveUp(){
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.insertBefore(row.prev());
            row.fadeIn();
            hideLinks();
        });

    }

    function moveDown(){
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.insertAfter(row.next());
            row.fadeIn();
            hideLinks();
        });

    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.remove();
            hideLinks();
        });

    }

    function hideLinks(){
        $('#countriesTable').find('a').css('display','inline');
        $('#countriesTable tr:eq(2)').find('a:contains("Up")').css('display','none');
        $('#countriesTable tr:last-child').find('a:contains("Down")').css('display','none');
    }
}
