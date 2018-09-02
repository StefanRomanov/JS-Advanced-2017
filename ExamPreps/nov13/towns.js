function attachEvents(){
    $('#btnAdd').click(add);
    $('#btnDelete').click(deleteTown);

    function add(){
        let text = $('#newItem').val();
        if(text !== ""){
            let element = $(`<option>${text}</option>`);
            $('#towns').append(element);
            $('#newItem').val("");
        }
    }

    function deleteTown() {
        let element = $('#towns option').filter(":selected");
        element.remove();
    }
}
