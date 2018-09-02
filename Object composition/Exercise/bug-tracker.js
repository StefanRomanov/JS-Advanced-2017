function solve(){
    let reports = [];
    let id = 0;
    let element = "";

    function report(author,description, reproducible, severity){
        let element = {
            ID: id,
            author: author,
            description: description,
            reproducible: reproducible,
            severity: severity,
            status: 'Open'
        };
        id++;
        reports.push(element);
        appendDiv()
    }

    function setStatus(id,newStatus){
        let current = reports.filter(e => e.ID === id)[0];
        current.status = newStatus;
        appendDiv()
    }

    function remove(id){
        let index = reports.findIndex(e => e.ID === id);
        reports.splice(index,1);
        appendDiv()
    }

    function sort(method){
        switch(method){
            case 'author':
                reports = reports.sort((a,b) => a.author.localeCompare(b.author));
                break;
            case 'severity':
                reports = reports.sort((a,b) => a.severity - b.severity);
                break;
            default:
                reports = reports.sort((a,b) => a.ID - b.ID);
        }
        appendDiv()
    }

    function output(selector){
        element = $(selector);
    }

    function appendDiv(){
        if(element !== ""){
            element.html("");
            console.log(reports);
            for(let report of reports){
                console.log(report);
                let div = $(`<div id="report_${report.ID}" class="report">
                            <div class="body">
                                <p>${report.description}</p>
                            </div>
                            <div class="title">
                                <span class="author">Submitted by: ${report.author}</span>
                                <span class="status">${report.status} | ${report.severity}</span>
                            </div>
                        </div>`);
                element.append(div);
            }
        }
    }

    return {report,setStatus,remove,sort,output}
}


//let obj = solve;
//obj.output(`#content`);
//obj.report('guy', 'report content', true, 5);
//obj.report('acho','blablaba',false,3);
//obj.setStatus(1,'Closed');
//obj.sort();

