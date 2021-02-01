class Student{
    constructor(sId , sName){
        this.id = sId;
        this.name = sName; 
        this.schoolName = "daffodill international college"
     }
}
const student1 = new  Student(05, "Rafi");
const student2 = new Student(02, "Rifat");
console.log(student1.name, student2.name);