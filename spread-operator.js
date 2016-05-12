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

//More examples of the spread operator
let array1 = [1, 2, 4];
let array2 = [23, 4, 6, 7];
let array3 = [2, ...array1, 3, 67, ...array2];
array3.forEach((e) => console.log(e));