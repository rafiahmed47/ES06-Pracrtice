const ages = [34, 23, 25, 26, 75];
const ages1 = [34, 64,  34, 35];
const ages2 = [345, 2454, 24, 244, 245]

const totalAges = ages.concat(ages1).concat([5]).concat(ages2);
const totalAges2 = [...ages, ...ages1, 5, ...ages2]
console.log(totalAges);

const businessMan = [345];
const shochib = [342];
const minister = [495];
// if it comes as a array we can use threedots to solve the matter.
const takapoisha = [344, 324,412];
const max = Math.max(...takapoisha);
console.log(max);