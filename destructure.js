const me = {name: "rafi ahmed rifat", phone: "01935976401", ages: 19, gf: "nai" };
const {phone} = me;
const {name} = me;
console.log(phone, name);
console.log(phone, name);
console.log(phone, name);
console.log(phone, name);



const num = [34, 23, 54, 34, 37, 87, 35, 34, 39];
const [sum, ...rest] = num;
console.log(rest);


const complexObject = {
    name: "hasnat";
    info: {
        leader : "tiger"
    }
}
const {leader} = complexObject.info;