
// function debounce(callback, delay) {
//     let timer;

//     return function() {
//         clearTimeout(timer);

        
//         timer = setTimeout(function() {
//             callback();
//         }, delay);
//     };
// }

// function search() {
//     console.log("Searching...");
// }


// let betterSearch = debounce(search, 300);

// // Call the function
// betterSearch();

// let data = [
//     {
//         category: "Fruits",
//         items: ["Apple", "Mango"]
//     },
//     {
//         category: "Vegetables",
//         items: ["Potato", "Tomato"]
//     }
// ];

// let result = [];

// data.forEach(function(group) {

//     group.items.forEach(function(item) {

//         result.push({
//             item: item,
//             category: group.category
//         });

//     });

// });

// console.log(result);
let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)