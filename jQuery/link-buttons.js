function attachEvents(){
    $('a.button').on('click',activateButton);

    function activateButton(){
        "use strict";
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}
