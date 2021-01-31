// function helloWorld(nai){
//     return nai*2;
// }
// const hello = helloWorld(35);
// console.log(hello);


// const helloWorld = function (nai){
//     return nai * 2;
// }
// const hello = helloWorld(35);
// console.log(hello);

const helloWorld = nai => nai *2;

const hello = helloWorld(35);
console.log(hello);

const add = (x , y) => x + y;
const addTotal = add(34, 34);
console.log(addTotal);

const sum = () => 5
const totalSum = sum()
console.log(totalSum);


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum + diff;
    return result;
}
const total = doMath(7, 5)
console.log(total)