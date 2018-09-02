function attachEvents(){
    $('#items').on('click','li',selectTown);
    $('#showTownsButton').on('click',showTowns);


    function selectTown(){
        let town = $(this);
        if(town.attr('data-selected')){
            town.removeAttr('data-selected');
            town.css('background',"");
        } else {
            town.attr('data-selected','true');
            town.css('background', '#DDD');
        }
    }

    function showTowns(){
        let text = $('li[data-selected=true]').toArray().map(li => li.textContent).join(", ");
        $('#selectedTowns').text(text);
    }
}
