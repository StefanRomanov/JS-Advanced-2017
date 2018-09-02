function increment(div) {
    let masterDiv = $(`${div}`);
    let textArea = $('<textarea class="counter" disabled="true">');
    let temp = document.createDocumentFragment();
    textArea.val(0);
    let incButton = $('<button class="btn" id="incrementBtn">Increment</button>');
    let addButton = $('<button class="btn" id="addBtn">Add</button>')
    let uList = $(`<ul class="results">`);

    textArea.appendTo(temp);
    incButton.appendTo(temp);
    addButton.appendTo(temp);
    uList.appendTo(temp);

    masterDiv.append(temp);

    incButton.on("click", increase);
    addButton.on("click", add);

    function increase(){
        let number = $(`.counter`).val();
        number++;
        $(`.counter`).val(number);
    }

    function add(){
        let li = $('<li>');
        li.text(`${$('.counter').val()}`);
        li.appendTo(uList);
    }
}
