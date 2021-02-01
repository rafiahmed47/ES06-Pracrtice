class Parents{
    constructor () {
        this.fatherName = "anythingsFather";
    }
}

class Child extends Parents{
    constructor (name){
        super();
        this.name = name;
    }
getFullName(){
    return this.name + " " + this.fatherName
}
}
const baby = new Child("anything");
const baby2 = new Child("something");
console.log(baby.getFullName());
console.log(baby2.getFullName())