// const employee = {
//     fund:5000000,
//     calcTax(){
//         console.log("10% Tax");
//     }
// };

// const emp1={
//     salary:1000,
// }

// emp1.__proto__= employee;

// Classes

// class Parent{
//     hello(){
//         console.log("Hello from Parent");
//     }
// }

// class Child extends Parent{
// }

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log(this.name+" "+this.email);
//     }
// }

// class Admin extends User{
//     editData(){

//     }
// }
//-------------------------------------------------

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("success");
//         },2000);
//     });
// }

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }

//----------------------------------------------------
//Promises

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Data1");
//             resolve("success");
//         },4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Data2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("Fetching Data1....");
// let p1 =asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// });

// console.log("Fetching Data2....");
// let p2 =asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });

//Promise Chaining
// console.log("Fetching Data1....");
// let p1 =asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching Data2....");
//     let p2 =asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// });

//-------------------------------------------------

//Callback Hell

// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Data"+dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }

// getData(1,()=>{
//     console.log("Getting data1");
//     getData(2,()=>{
//         console.log("Getting data2");
//         getData(3,()=>{
//             console.log("Getting data3");
//             getData(4);
//         });
//     })
// })

//----------------------------------------------------
//Promise
//1
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Data"+dataId);
//             resolve("success");
//         },2000);
//     });
// }

//2

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })

//Better Approcah -Actual Promise Chain
//3

// getData(1)
//     .then((res)=>{
//         return getData(2);
//     })
//     .then((res)=>{
//         return getData(3);
//     })
//     .then((res)=>{
//         console.log(res);
//     });

//Async And Await
// Async function automatically returns a promise

// async function hello(){
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather Data");
//             resolve("success");
//         },2000);
//     })
// }

// async function getWheatherData(){
//     await api();
//     await api();  
// }

//Implementing Async Await to GetData

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data", dataId);
            resolve("success");
        },2000);
    });
}

async function getAllData(){
    console.log("Getting Data 1 .... ");
    await getData(1);
    console.log("Getting Data 2 .... ");
    await getData(2);
    console.log("Getting Data 3 .... ");
    await getData(3);
}

//IIFE -Immediately Invoked Function Expression
(async function (){
    console.log("Getting Data 1 .... ");
    await getData(1);
    console.log("Getting Data 2 .... ");
    await getData(2);
    console.log("Getting Data 3 .... ");
    await getData(3);
})();


// (async ()=>{
//     console.log("Getting Data 1 .... ");
//     await getData(1);
//     console.log("Getting Data 2 .... ");
//     await getData(2);
//     console.log("Getting Data 3 .... ");
//     await getData(3);
// })();

