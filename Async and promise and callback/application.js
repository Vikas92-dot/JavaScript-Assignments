// // //--------Async Example-----------//

// // console.log("one");
// // console.log("two");
// // setTimeout(()=>{
// //     console.log("Hello");
// // },2000);
// // console.log("three");
// // console.log("four");

// // //-------callback function-------//

// // function sum(a,b){
// //     console.log(a+b);
// // }
// // function calculator(a,b,sum){
// //     sum(a,b);
// // }

// // calculator(1,2,sum);

// // calculator(2,3,(a,b)=>{ //we can pass arrow function
// //     console.log(a+b);
// // });

// // const hello = ()=>{
// //     console.log("Helloworld");
    
// // }
// // setTimeout(hello,2000);

// // //-----nested or callback Hell------//
// // function getData(dataId, getNextData){
// //     setTimeout(()=>{
// //         console.log("data",dataId);
// //         if(getNextData){
// //             getNextData();
// //         }
// //     },2000);
// // }
// // getData(1,()=>{
// //     getData(2,()=>{
// //         getData(3);
// //     });
// // });

// // //-----------Promise------------//

// // function getDataNew(dataId, getNextData){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             //console.log("data",dataId);
// //             //resolve("Success"); //Success
// //             reject("error");
// //             if(getNextData){
// //                 getNextData();
// //             }
// //         },5000);
// //     });
// // }
// // //let promise = getDataNew(123);

//==================Promise=================

// function saveDb(data, success, failure){
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if(internetSpeed > 4){
//     success();
//   }
//   else{
//     failure();
//   }
// }
// saveDb("Apna college",() =>{
//   console.log("Success: your data was saved");
//   saveDb("hello world",() =>{
//     console.log("Success2: second data saved");
//     saveDb("vikas",()=>{
//       console.log("Success3");
//     },()=>{
//       console.log("failure3");
//     })
//   },() =>{
//     console.log("failure2 : weak connection");
//   })
// }, () =>{
//   console.log("Failure: weak connection. data not saved");
// })

function saveDb(data){
  return new Promise((resolve,reject) =>{
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
      resolve("success: data saved");
    }
    else{
      reject("failure: weak connection");
    }
  })
}

let request = saveDb("vikas");
request.then(() =>{
  console.log("promise resolved");
  console.log(request);
  
})
.catch(() =>{
  console.log("promise rejected");
  console.log(request);
  
})



// // //------then and catch functions------//
// // const getPromise = () => {
// //     return new Promise((resolve,reject) =>{
// //         //console.log("I am Promise");
// //         //resolve("Success");
// //         reject("Network error");
// //     });
// // };

// // let promise = getPromise();

// // promise.then((res) =>{
// //     console.log("promise fullfilled",res);
    
// // });

// // promise.catch((err) =>{
// //     console.log("rejected",err);
    
// // });

// //---------Promise chaining---------//

// // function asyncFunc1(){
// //     return new Promise((resolve,reject) =>{
// //         setTimeout(() =>{
// //             console.log("data1");
// //             resolve("success");
// //         },4000);
// //     });
// // }
// // function asyncFunc2(){
// //     return new Promise((resolve,reject) =>{
// //         setTimeout(() =>{
// //             console.log("data2");
// //             resolve("success");
// //         },4000);
// //     });
// // }

// // console.log("fetching data 1...");
// // let p1 = asyncFunc1();

// // p1.then((res) =>{
// //     console.log("fetching data 2...");
// //     let p2 = asyncFunc2();
// //     p2.then((res) =>{})    
//     // asyncFunc1().then((res) =>{
//     //     console.log("fetching data 2...");
//     //     asyncFunc2().then((res) =>{})
        
//     // });
// //})  

// // function getData(dataId){
// //     return new Promise((resolve,reject) =>{
// //         setTimeout(()=>{
// //             console.log("data",dataId);  
// //             resolve("success");  
// //         },2000);
// //     })
// // }
// // console.log("getting data 1");

// // getData(1)
// // .then((res) => {
// //     console.log("getting data 2");
// //     return getData(2);
// // })
// // .then((res) =>{
// //     console.log("getting data 3");
// //     return getData(3);
// // })
// // .then((res) =>{
// //     console.log(res);
// // });

// function api(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("Weather Data");
//             resolve(200);
//         },2000);
//     });
// }

// async function getWeatherData() {
//     await api(); //1st
//     await api();//2nd
// }

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//         },2000);
//     })
// }

// //----------Async Await---------//
// async function getAllData() {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
// }

// //-----------IIFE------------//

// (async function () {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
// })();

//----------Fetching API-----------//

// const url ='https://cat-fact.herokuapp.com/facts';
// let btn = document.getElementById("btn");
// let factsPara = document.getElementById("facts");


// const getFacts = async ()=> {
//     console.log("getting data...");
//     let response = await fetch(url);
//     console.log(response);//json format
//     let data = await response.json();
//     //console.log(data[0].text);
//     factsPara.innerText = data[0].text;
// };

// function getFacts(){  promise chain
//     fetch(url)
//     .then((response) =>{
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factsPara.innerText = data[0].text;
//     });
// }

// btn.addEventListener("click", getFacts);

// function square{()=> {
//     let n = prompt("Enter a no.");
//     console.log(n*n);
// }
// }


// =============Promise=============

// const promise1 = new Promise((resolve, reject) => {
//     resolve('Success!');
//   });
//   promise1.then((value) => {
//     console.log(value);
//     // expected output: "Success!"
//   }, (error) => {
//     console.log( error);
//   });