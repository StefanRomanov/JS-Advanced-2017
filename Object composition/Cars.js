function solve(commands){
    let whatevs = (function(){
        let objects = new Map();

        function create(name,param,parent){
            if(param){
                return inherit(name,parent);
            } else {
                objects.set(name, {});
            }
        }

        function inherit(name,parent){
            objects.set(name, Object.create(objects.get(parent)));
        }

        function set(name,key,value){
            objects.get(name)[key] = value;
        }

        function print(name){
            let current = objects.get(name);
            let props = [];
            for(let key in current){
                props.push(`${key}:${current[key]}`);
            }

            console.log(props.join(", "));
        }

        return {create,set,print};
    })();

    for(let command of commands){
        let [cmd,name,param,value] = command.split(" ");
        whatevs[cmd](name,param,value);
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);