// let circle = document.getElementById("circle");
// document.getElementById('message').textContent= "this is pure DOM manipulation"

// circle.addEventListener("click", getRandomColor)

// //generate random color
// function getRandomColor() {
//     let letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     console.log(color)
//     circle.style.backgroundColor = color;
// }

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let combinedArray = [...array1, ...array2];

console.log(combinedArray);