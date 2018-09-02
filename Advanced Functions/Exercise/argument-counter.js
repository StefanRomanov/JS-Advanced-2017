function solve(args) {
    let result = new Map();

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof(obj);
        console.log(`${type}: ${obj}`);

        if (!result.has(type)) {
            result.set(type, 0)
        }
        result.set(type, result.get(type) + 1);

    }

    result = new Map([...result].sort((a,b) => b[1] - a[1]));

    for (let [k, v] of result) {
        console.log(`${k} = ${v}`)
    }
}

solve(42, 'cat', 15, 'kitten', 'tomcat');