const wiffy = "depends";
wiffy = "other girls";
console.log(wiffy);
// error happend because const cant be changed.

let patience = "rohim chacha";
patience = "fatema khala";
console.log(patience);
// we can use let instead of const if we want to change the variable
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;  
}
console.log(i);
// error happend because let leak proof
// but var do leak