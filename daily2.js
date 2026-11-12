
// function debounce(callback, delay) {
//     let timer;

//     return function() {
//         clearTimeout(timer);

//         timer = setTimeout(function() {
//             callback();
//         }, delay);
//     };
// }

// function sayHello() {
//     console.log("Hello!");
// }

// let result = debounce(sayHello, 500);

// // Call the function
// result();
// result();
// result();

// async function fetchWithRetry(url, attempts) {

//     for (let i = 1; i <= attempts; i++) {

//         try {
//             let response = await fetch(url);

//             if (!response.ok) {
//                 throw new Error("Request failed");
//             }

//             let data = await response.json();

//             return data;

//         } catch (error) {

//             console.log("Attempt failed:", i);

//             if (i === attempts) {
//                 throw error;
//             }
//         }
//     }
// }

// fetchWithRetry("https://jsonplaceholder.typicode.com/users", 3)
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message));


// function myMap(
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         result.push(callback(array[i]));
//     }

//     return result;
// }

// let numbers = [1, 2, 3,4,5,6];

// let answer = myMap(numbers, function(x) {
//     return x * 2;
// });

// console.log(answer)array, callback) {;

function myPromiseAll(promises) {

    return  new Promise((resolve, reject) => {

        let results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve(results);
            return;
        }

        for (let i = 0; i < promises.length; i++) {

            Promise.resolve(promises[i])
                .then(value => {

                    results[i] = value;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }

                })
                .catch(error => {
                    reject(error);
                });
        }

    });
}


// Testing our function

let p1 = Promise.resolve("Ali");
let p2 = Promise.resolve("Sara");
let p3 = Promise.resolve("Ahmed");

myPromiseAll([p1, p2, p3])
    .then(result => console.log(result))
    .catch(error => console.log(error));

