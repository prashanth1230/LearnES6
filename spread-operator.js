function accpetsTwoParameters(a, b) {
    return a + b;
}

//Without ES6
let myArray = [1, 2];
let firstResult = accpetsTwoParameters(myArray[0], myArray[1]);
console.log(firstResult);

//With ES6 Spread operator
let data = [2, 3];
let secondResult = accpetsTwoParameters(...data);
console.log(secondResult);