// // class Message{
// //     f1(){
// //         console.log("f1 executed....");
// //     }
// //     f2(){
// //         console.log("f2 executed....");
// //     }
// //     static greet(){
// //         console.log("Happy learning....");
// //     }
// // }

// // let obj = new Message();
// // obj.f1();
// // obj.f2();
// // Message.greet(); //call by class name

// // //================================================
// // class Addition{
// //     constructor(a,b){
// //         this.a = a;
// //         this.b = b;
// //     }
// //     add(){
// //         console.log("Addition : "+(this.a+this.b));
// //     }
// // }

// // let obj1 = new Addition(20,10);
// // obj1.add();

// // //==================================================
// // class Parent{
// //     call1(){
// //         console.log("Call 1...");
// //     }
// //     call2(){
// //         console.log("Call 2...");   
// //     }
// // }
// // class Child extends Parent{
// //     call3(){
// //      console.log("Call 3....");
// //     }
// //  }
 
// //  let obj2 = new Child();
// //  obj2.call1();
// //  obj2.call2();
// //  obj2.call3();

// // //=========================================================
// // const add = (array) => {
// //     let sum = 0;
// //     for (let i of array) {
// //         sum += i;
// //     }
// //     console.log(sum);
// // }

// // const mainFunction = (callback) => {
// //     setTimeout(() => {
// //         callback([1, 15, 20, 13, 444]);
// //     }, 2000)
// // }

// // mainFunction(add);

// // //1. Write a js function which defines a loop to call the setTimeout function 5 times to print the counter variable - 
// // //Observe whether the values are in sequence or random

// // function fiveTimes(){
// //     for(let i=0; i<5; i++){
// //         setTimeout(() =>{
// //             console.log(i);
// //         },2000);
// //     }
// // }

// // //2. Write a js function to print your name continuously 10 times with a time delay of 3sec

// // function printName(){
// //     let count = 0;
// //     const name = "Vikas";

// //     const interval = setInterval(() =>{
// //         console.log(name);
// //         count++;

// //         if(count >= 10){
// //             clearInterval(interval);
// //         }
// //     },3000);
// // }

// // //printName();

// // // 3. write a check function, which takes a callback function as argument to read username, if username is equal to "Infobeans" then only call setTimeout function to accept password after a delay of 2 sec, If password is 1234 then show a welcome message in an alert box.For any other user invalid message needs to be shown

// // function check(callback){
// //     let username = prompt("Enter Username..");
// //     if(username === "Infobeans"){
        
// //         setTimeout(function (){
// //             let password = prompt("Enter password..");
// //             if(password == 1234){   
// //                 alert("Welcome..");
// //             }
// //             else alert("Incorrect password");
// //         },2000);
// //     }
// //     else alert("User Invalid..");
// // }

// // //check();

// // //4. write a js function to change the background color of body element every 5 seconds.

// // function changeColor(){
// //     let bodyElement = document.getElementById("main-body");
// //     let count = 0;
// //     setInterval(() =>{
// //         if(count % 2 === 0){
// //             bodyElement.setAttribute("style","background-color: red;");
// //         }
// //         else{
// //             bodyElement.setAttribute("style","background-color: yellow;");
// //         }
// //         count++;

// //     },2000);
// // }


// // //5. Define a Student class with necessary functions to accept his personal details

// // class Student{
// //      constructor(name,mobileNo,age) {
// //         this.name = name; 
// //         this.mobileNo = mobileNo;
// //         this.age = age;
// //     }
// //     displayDetails(){
// //         console.log(this.name ,this.mobileNo,this.age);
// //     }
// // }
// // let student = new Student("Vikas", 9200009960, 27);
// // student.displayDetails();


// function ticketBooking()
// {
//   return new Promise((resolve, rejected)=>
//               {let loadWebPage =loadSite()
//               if (loadWebPage)
//               {
//                 console.log("Web page is laoded lets try with login");
//                 status =setTimeout((()=>loadLogin()) , 2000)
//                 resovle(status)
//               }
//               else
//               {
//                 reject();
//               }
//               } )
// }

// ticketBooking().then((status)=>console.log("your login status - mostly u r logged in " +status) )
//             .catch((status)=>console.log("sorry not logged in"))
//             .finally(()=>console.log("will always support you"))


// setTimeout(()=>{ console.log("hai")
//         setTimeout(()=> {console.log("hello") },1000)} , 4000)

// setTimeout(()=>{ console.log("1")
//         setTimeout(()=> {console.log("2") },1000)} , 2000)
        
        
// setTimeout(()=>{ console.log("#$%$#")
//         setTimeout(()=> {console.log("ASDD") },1000)} , 4000)


//=============First Case================

// const promise1 = new Promise((resolve, reject) => {
//   // resolve('Success!');
//   reject('failed!');
// });
// promise1.then((value) => {
//   console.log(value);
//   // expected output: "Success!"
// }, (error) => {
//   console.log(error);
// }).catch((error) => {
//   console.log(error);
// })

//=============Second Case================

//The Promise.resolve() method returns a resolved Promise object with a given value.
//Depending upon a resolved promise value, it

// 1. returns promise if fulfilled with promise
// 2. returns a value if fulfilled with the value

// Promise.resolve('Success').then((value) => {
//   console.log(value); // "Success"
// }).catch((error) => {
//   console.log(error);
// });

//=============Third Case================

//Promise.reject() method returns a Promise object that is rejected with a given reason.
// Promise.reject('failure').then((value) => {
//   console.log(value); 
// }).catch((error) => {
//   console.log(error); // "failure"
// });

// =======================================================================================================
// Common Promise utility methods: - Promise.all(), Promise.race(), Promise.any(), Promise.allSetteled()

