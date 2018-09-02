function extractText(){
    "use strict";
    let list = $('ul#items li').toArray().map(li => li.textContent).join(", ");
    $('#result').text(list);
}
