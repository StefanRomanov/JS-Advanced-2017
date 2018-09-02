function solve(commands){
    let processor = (function(){
        let list = [];
        function add(item){
            list.push(item);
        }

        function remove(item){
            "use strict";
            list = list.filter(e => e !== item);
        }

        function  print(){
            "use strict";
            console.log(list.toString());
        }

        return {add,remove,print}
    })();

    for(let command of commands){
        let commandTokens = command.split(" ");
        processor[commandTokens[0]](commandTokens[1]);
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);