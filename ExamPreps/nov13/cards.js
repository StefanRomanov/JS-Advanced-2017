function cardDeckBuilder(selector) {

    function addCard(face,suit){
        let suits = {
            C: '\u2663',
            D: '\u2666',
            H: '\u2665',
            S: '\u2660'
        };
        let card = $(`<div class="card">${face} ${suits[suit]}</div>`);
        card.on('click',reverse);
        card.appendTo($(selector));
    }

    function reverse() {
        $(selector).children().each((i,card) => $(selector).prepend(card));
    }

    return {
        addCard
    }
}