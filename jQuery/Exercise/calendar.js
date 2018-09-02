function calendar(dateArray){
    let table = $(`<table>`);
    let date = new Date(dateArray[2],dateArray[1]-1,dateArray[0]);
    let lastDay = new Date(dateArray[2],dateArray[1],0);
    let previousMonthDay = (new Date(dateArray[2], dateArray[1]-1, 0)).getDay();
    let daysCounter = 1 - previousMonthDay;

    let monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let caption = $(`<caption>`).text(`${monthNames[date.getMonth()]} ${date.getFullYear()}`);
    let titleRow = $(`<tr>`)
        .append($(`<th>Mon</th>`))
        .append($(`<th>Tue</th>`))
        .append($(`<th>Wed</th>`))
        .append($(`<th>Thu</th>`))
        .append($(`<th>Fri</th>`))
        .append($(`<th>Sat</th>`))
        .append($(`<th>Sun</th>`));

    let firstRow = $(`<tr>`);
    for(let i = 1; i <= 7 ; i++){
        let td = $(`<td>`);

        if(daysCounter > 0){
            td.text(daysCounter);
        }
        td.appendTo(firstRow);
        daysCounter++
    }

    table.append(caption)
        .append(titleRow);
    firstRow.appendTo(table);

    while(lastDay.getDate() - daysCounter >= 7){
        let midRow = $(`<tr>`);
        for(let i = 0; i < 7 ; i++){
            let td = $(`<td>`);
            td.text(daysCounter);
            daysCounter++;
            td.appendTo(midRow);
        }
        midRow.appendTo(table);
    }

    if(daysCounter <= lastDay.getDate()){
        let lastRow = $(`<tr>`);
        for(let i = 0; i < 7 ; i++){
            let td = $(`<td>`);

            if( daysCounter <= lastDay.getDate()){
                td.text(daysCounter);
            }
            daysCounter++;
            td.appendTo(lastRow);
        }
        lastRow.appendTo(table);
    }

    table.appendTo($(`#content`));

    $(`td`).each(function(){
        if(+$(this).text() === date.getDate()){
            $(this).addClass(`today`);
        }
    });
}