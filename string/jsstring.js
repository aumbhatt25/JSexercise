// var x = 2;
var x = 3;

{
let x = 2;
// let x = 3;
document.getElementById("string1").innerHTML = x;
}

// {
// let x = 2;
// var x = 3;
// }
// document.getElementById("string").innerHTML = x;
let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ","Hi","Hello",text2);
// document.getElementById("string").innerHTML = text3;
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
// document.getElementById("string").innerHTML = newText;

let str = "Hello World!";
// let part = str.substr(7, 3);
// let part = str.substring(3, 7);
let part = str.slice(-11, -2);
// document.getElementById("string").innerHTML = part;

let header = "Template Literals";
let tags = ["template literals", "javascript"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
html += `<li>${x}</li>`;
}
document.getElementById("string").innerHTML = html;