function tableBuilder(selector) {
    let table = $('<table>');

    function createTable(cols) {
        let tr = $('<tr>');
        for(let col of cols){
            let th = $(`<th></th>`).text(col);
            tr.append(th);
        }
        tr.append($('<th>Action</th>'));
        table.append(tr);
        $(selector).empty();
        $(selector).append(table);
    }
    
    function fillData(rows) {
        for(let row of rows){
            let tr = $('<tr>');
            for(let el of row){
                let td = $(`<td></td>`).text(el);
                tr.append(td);
            }
            let deleteButton = $('<button>Delete</button>');
            tr.append($('<td>').append(deleteButton));
            deleteButton.on('click',deleteRow);
            $(table).append(tr);
        }
    }

    function deleteRow() {
        $(this).parent().parent().remove();
    }

    return {
        createTable,
        fillData
    }
}