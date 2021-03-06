//Without ES 6
function arrayToVariables(args: Array<any>) {
    if (args !== null && args.length === 3) {
        let a, b, c;
        a = args[0];
        b = args[1];
        c = args[2];
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
    }
}

arrayToVariables([1, 2, 3])

//With ES6
function arrayToVariablesWithES6(args: Array<any>) {
    if (args !== null && args.length === 3) {
        let [a, b, c] = args;
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
    }
}

arrayToVariablesWithES6([4, 5, 6])

//More examples
let [x, y, z = 'Hello'] = ['mes', 'sdt'];
console.log(`x: ${x}, y: ${y}, z: ${z}`)

let [a, , , ...b] = [1, 2, 3, 4, 5, 6];

console.log(a);
console.log(b);