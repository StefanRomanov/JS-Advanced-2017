function search() {
    let input = $('#searchText').val();
    let matches = $(`ul#towns li:contains(${input})`).css('font-weight','bold');
    $(`ul#towns li:not(:contains(${input}))`).css('font-weight','');
    let count = matches.length;
    $('#result').text(`${count} matches found`);
}
