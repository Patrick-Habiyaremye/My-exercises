// ## Task Instructions

// 1. Define a generic function named `swapEnds` that uses a type parameter `<T>`.
// 2. The function should accept a single parameter: an array of type `T[]`.
// 3. Inside the function:
//    - If the array has fewer than 2 elements, return a **copy** of the original array (to avoid mutating the input).
//    - Otherwise, create a new array with the same elements but with the first and last elements swapped.
//    - Do **not** modify the original array.
// 4. The function should explicitly return an array of type `T[]`.
// 5. Call the function with three different types of arrays:
//    - An array of numbers: `[1, 2, 3, 4]`
//    - An array of strings: `["apple", "banana", "cherry", "date", "elderberry"]`
//    - An array of objects: `[{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]`
// 6. For each call, store the result and print it using `console.log()`. When printing arrays of objects, use `JSON.stringify(result)` to display them in a readable format.

function swapEnds<T> (arr: T[]): T[]{
    if(arr.length < 2){
        return [...arr]
    }
    let newArr = [...arr];
    let firstIndex = newArr[0];
    let lastIndex = newArr.length - 1;
    newArr[0] = newArr[lastIndex];
    newArr[lastIndex] = firstIndex;
    return newArr
}

const numberArray = [1, 2, 3, 4];
const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
const objectArray = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

let result = swapEnds(objectArray)

console.log(swapEnds(numberArray));
console.log(swapEnds(stringArray));
console.log(JSON.stringify(result))