function processCommands(array){
    let commandProcessor = (function () {
        let text = "";
        return {
            append: (newText) => text += newText,
            removeStart: (number) => text = text.slice(number),
            removeEnd: (number) => text = text.slice(0,text.length - number),
            print: () => console.log(text)
        }
    })();

    for(let string of array){
        let [command, value] = string.split(" ");
        commandProcessor[command](value);
    }
}
processCommands(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);