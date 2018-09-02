let solve =(function(){
    let counter = 0;

    return class Extendable{

        constructor(){
            this.id = counter;
            counter++;
        }

        extend(template){
            for(let prop in template){
                if(typeof(template[prop]) === 'function'){
                    Extendable.prototype[prop] = template[prop];
                } else {
                    this[prop] = template[prop];
                }
            }
        }
    }
})()


let ext = solve();

