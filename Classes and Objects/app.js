const student ={
    fullName: "vikas mathe",
    marks: 94.4,
    printMarks: function(){
        console.log("marks", this.marks);
        
    }
}

//Make prototype

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun ={
    salary: 50000,
};
const karanArjun2 ={
    salary: 50000,
};
const karanArjun3 ={
    salary: 50000,
};
const karanArjun4 ={
    salary: 50000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;

//---------------------Class------------------//

class ToyotaCar{

    // constructor(){
    //     console.log("Creating an Object");
         
    // }
    constructor(brand,mileage){
        console.log("Creating an Object");
        this.brand = brand;
        this.mileage = mileage;
         
    }

    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}
let fortuner = new ToyotaCar("Fortuner",10);
fortuner.setBrand("Fortuner");

//---------------Inheritance-------------//

class Person{
    constructor(){
        
        this.species = "HomoSapiens";
    }
    eat(){
        console.log("eat");
    }
    
    sleep(){
        console.log("sleep");
    }
}
class Engineer extends Person{
    work(){
        console.log("Solve problem, Doing coding..");
    }
}
let vikasObj = new Engineer(); 

//------------super keyword-------------//

class Human{
    constructor(name){
        
        //console.log("parent called");
        this.species = "HomoSapiens";
        this.name = name;
    }

}
class Type extends Human{
    
    constructor(name){
        //console.log("child called");
        super(name);
        // this.branch = branch;
        //console.log("child exit");
    }
}
let engobj = new Type("Vikas");  

let Data ="Secret Information";
class User{
    // name(name){
    //     this.name = name;
    // }
    // email(email){
    //     this.email = email;
    // }
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data: ",Data);
    }
}
let obj =new User("vikas","vikasmathe143@gmail.com");
obj.viewData();

class Admin extends User{
    editData(){
        Data = "Some new value";
    }
}
let admin = new Admin();
