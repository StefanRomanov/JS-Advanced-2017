let printArray = require('./print');
let array = [1,2,3];

let commands  = {
    print: printArray
};

console.log(commands.print(array));;