function domSearch(id,isCaseSensitive){
    let addDiv = $(`<div class="add-controls">`)
        .append($(`<label>Enter text: </label>`))
        .append($(`<input>`))
        .append($('<a class="button" href="#">Add</a>'));

    let searchDiv = $(`<div class="search-controls">`)
        .append($(`<label>Search text: </label>`))
        .append($(`<input>`));

    let resultsDiv = $(`<div class="result-controls">`)
        .append($(`<ul class="items-list">`));

    $(id).append(addDiv);
    $(id).append(searchDiv);
    $(id).append(resultsDiv);

    $(`a.button`).on(`click`, add);
    $(`.search-controls input`).on(`change`, search);

    function add(){
        let text = $('.add-controls input').val();
        let listItem = $(`<li class="list-item">`)
            .append($('<a href="#" class="button">X</a>')).on(`click`,deleteItem)
            .append($(`<strong>${text}</strong>`));

        listItem.appendTo($(`.result-controls ul`));
    }

    function deleteItem(){
        this.remove();
    }

    function search(){
        let text = $(this).val();

        if(isCaseSensitive){
            $(`li`).each(function (){
                $(this).css(`display`,`block`);
                if($(this).find('strong').text().indexOf(text) === -1){
                    $(this).css(`display`,`none`);
                }
            });
        } else {
            $(`li`).each(function (){
                $(this).css(`display`,`block`);
                if($(this).find('strong').text().toLowerCase().indexOf(text.toLowerCase()) === -1){
                    $(this).css(`display`,`none`);
                }
            });
        }
    }
}
