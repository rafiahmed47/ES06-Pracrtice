// expectation
function addNumbers(num1, num2) {
    return num1 + num2;
}
const total = addNumbers(12, 23);
console.log(total);

// reality
function addNumbers(num1, num2 = 20) {
    return num1 + num2;
}
const total = addNumbers(12);
console.log(total);



// we can use "=20" as a default perameter;