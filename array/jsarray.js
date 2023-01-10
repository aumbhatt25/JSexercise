//Array, if-else, switch, for, arrow fn, while

const cars = ["Saab", "Volvo", "BMW"];

document.getElementById("array").innerHTML = cars;
// document.getElementById("array1").innerHTML = cars.toString();

// cars.splice(1, 1, "Ford", "Mahindra");
// document.getElementById("array1").innerHTML = cars;

const numbers1 = [45, 4, 9, 19, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }

const over18 = numbers1.filter(myFunction);

// function myFunction(value) {
//   return value > 18;
// }
// document.getElementById("array1").innerHTML = over18.sort();

let sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
document.getElementById("array1").innerHTML = sum;

// const f = numbers1.entries();

// for (let x of f) {
//   document.getElementById("array1").innerHTML += x;
// }

// document.getElementById("bool").innerHTML = Boolean(10 > 9);
// document.getElementById("bool").innerHTML = 10 > 9;

const age = 19;
if (age > 18) {
    ageGroup = "adult";
} else {
    ageGroup = "not adult";
}
// document.getElementById("bool").innerHTML = ageGroup;

// for(let i=0;i<numbers1.length;i++)
// {
//     document.getElementById("bool").innerHTML = numbers1;
// }

// for(let i of numbers1)
// {
//     document.getElementById("bool").innerHTML = numbers1;
// }

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
//   document.getElementById("bool").innerHTML = "Today is " + day;

let myFunction1 = (a, b) => a * b;
document.getElementById("bool").innerHTML = myFunction1(4, 5);