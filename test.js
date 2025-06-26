let num = Number("123");
console.log("Converted to Number:", num);

let randomNum = Math.random();
let rounded = Math.round(3.6);
let maxVal = Math.max(10, 20, 30);
console.log("Random Number:", randomNum);
console.log("Rounded:", rounded);
console.log("Max Value:", maxVal);

function calculateZakat(amount) {
    const zakatRate = 0.025;
    if (amount >= 1000) {
        return amount * zakatRate;
    } else {
        return 0;
    }
}

let myMoney = 5000;
console.log("Zakat to pay:", calculateZakat(myMoney));

let numberValue = 456;
let str1 = numberValue.toString();
let str2 = String(numberValue);
console.log("Number as string:", str1, str2);

let greeting = "Hello, World!";
console.log("Length:", greeting.length);
console.log("Char at index 0:", greeting.charAt(0));

let text = "JavaScript Programming";
console.log("Slice (0,10):", text.slice(0, 10));
console.log("Substring (0,10):", text.substring(0, 10));
console.log("Substr (0,10):", text.substr(0, 10));

let sentence = "Learning JavaScript is fun!";
console.log("Index of 'JavaScript':", sentence.indexOf("JavaScript"));
console.log("Includes 'fun':", sentence.includes("fun"));

let fruits = ["apple", "banana", "cherry"];
console.log("First fruit:", fruits[0]);
console.log("All fruits:", fruits);

fruits.push("orange");
fruits.unshift("mango");
fruits.pop();
fruits.shift();

console.log("Updated fruits:", fruits);
