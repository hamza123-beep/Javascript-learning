// let myNum = [1,2,3,4,5,6,7,8,9,10];
// let newNum = myNum.filter((num) => num>4);
// console.log(newNum);
// let myNumber = [1,2,3,4,5,6,7,8,9,10];
// let newNumber = myNumber
// .map((num) =>num * 2)
// .map((num) => num + 1)
// .filter((num) => num > 4);

// console.log(newNumber);
// function outer(){
//     let username = "Hazma";
//     function inner(){
//         console.log(username);
//     }
//     inner();
// }
// outer();
// const promiseone = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
    
//     },5000)
// })
// promiseone.then(function(){
//     console.log("Promise is consumed");
// })
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({ username: "Hazma", email: "hm@example.com" });
//         } else {
//             reject("Error: Something went wrong");
//         }
//     }, 1000);
// });

// async function consumepromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumepromiseFive();
// async function myFunction() {
//     return "Hello World";
// }

// myFunction().then(function(result) {
//     console.log(result);
// });
// function getData() {

//     return new Promise(function(resolve, reject) {

//         setTimeout(function() {
//             resolve("Data received successfully!");
//         }, 2000);

//     });

// }

// async function showData() {

//     console.log("Loading...");

//     let result = await getData();

//     console.log(result);

// }

// showData();
// let myPromise = new Promise(function(resolve, reject) {

//     console.log("Task completed!");

// });

// myPromise.then(function(result) {

//     console.log(result);

// });
// let myPromise = new Promise(function(resolve, reject) {

//     console.log("Something went wrong!");

// });

// myPromise.catch(function(error) {

//     console.log(error);

// // });
// let myPromise = new Promise(function(resolve, reject) {

//     let age = 20;

//     if (age >= 18) {
//         resolve("You are allowed!");
//     } else {
//         reject("You are not allowed!");
//     }

// });

// myPromise
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
// fetch("https://jsonplaceholder.typicode.com/posts/1")

// .then(function(response) {

//     if (response.status ===200) {
//         console.log("Request successful!");
//     }
//     else {
//         console.log("Something went wrong!");
//     }

// });
// fetch("https://jsonplaceholder.typicode.com/invalid")

// .then(function(response) {

//     if (!response.ok) {
//         throw new Error("Page not found!");
//     }

//     return response.json();

// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error.message);
// });
async function getData() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (response.status === 200) {

            let data = await response.json();

            console.log("Data received successfully!");
            console.log(data);

        }

        else if (response.status === 404) {

            console.log("Data not found!");

        }

        else {

            console.log("Something went wrong!");

        }

    }

    catch (error) {

        console.log("Network Error:", error.message);

    }

}

getData();