function generateSummary(selector){
    $(selector).click(createSummary);

    function createSummary() {
        let text = $('#content strong').text();
        let result = $(`<div id="summary"><h2>Summary</h2><p>${text}</p></div>`)
        result.appendTo($('#content').parent());
    }
}
