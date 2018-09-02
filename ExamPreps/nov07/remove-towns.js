function attachEvents() {
    $('#btnDelete').on('click',deleteTown);

    function deleteTown(){
        let text = $('#townName').val();
        let found = $(`#towns option`).filter(function(){
            return $(this).text() === text
        });
        if(found.length === 0){
            $('#result').text(`${text} not found.`)
        } else {
            $('#result').text(`${text} deleted.`)
        }
        found.remove();
    }
}