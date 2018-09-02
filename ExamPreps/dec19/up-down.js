function move(value) {
    let options = $('#towns option');
    let selected = $('#towns option:selected');
    let index = selected.index();

    if(value === -1){
        selected.insertBefore(options[index - 1]);
    } else {
        selected.insertAfter(options[index + 1]);
    }
}