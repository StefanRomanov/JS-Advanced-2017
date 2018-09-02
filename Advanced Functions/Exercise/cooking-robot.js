let solve = (function(){

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour:0
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3

        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1

        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10

        }
    };

    return function(command){
        let commandTokens = command.split(' ').filter(e => e != "");
        let instruction = commandTokens[0];

        switch(instruction){
            case 'restock':
                stock[commandTokens[1]] += +commandTokens[2];
                break;
            case 'prepare':
                let recipe = commandTokens[1];
                let amount = commandTokens[2];
                let ingredients = recipes[recipe];

                for(let ingredient of Object.keys(ingredients)){
                    if(stock[ingredient] < ingredients[ingredient] * amount){
                        return `Error: not enough ${ingredient} in stock`
                    }
                }

                for(let ingredient of Object.keys(ingredients) ){
                    stock[ingredient] -= ingredients[ingredient] * amount;
                }
                break;
            case  'report':
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }

        return "Success";
    }
})();

console.log(solve('restock carbohydrate 10'));
console.log(solve('restock flavour 10'));
console.log(solve('prepare apple 1'));
console.log(solve('restock fat 10'));
console.log(solve('prepare burger 1'));
console.log(solve('report'));