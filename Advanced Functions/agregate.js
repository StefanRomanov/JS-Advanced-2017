function aggregate(arr) {

    function reduce(array, func) {
        let numbers = [];
        Object.assign(numbers, array);
        let result = numbers.shift();

        for (let number of numbers) {
            result = func(result, number)
        }
        return result;
    }
    console.log(`Sum = ${reduce(arr,(a,b) => a + b)}`);
    console.log(`Min = ${reduce(arr,(a,b) => Math.min(a,b))}`);
    console.log(`Max = ${reduce(arr,(a,b) => Math.max(a,b))}`);
    console.log(`Product = ${reduce(arr,(a,b) => a * b)}`);
    console.log(`Join = ${reduce(arr,(a,b) => "" + a + b)}`);
}

aggregate([1,2,3,4,5]);