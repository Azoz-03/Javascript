function log(text) {
  document.getElementById('output').textContent += text + "\n";
}

document.getElementById('output').textContent = "";

let numbers = [10, 20, 30, 40, 50];
let sliced = numbers.slice(1, 4);
let spliced = numbers.splice(2, 2);

log("Original array: " + numbers);
log("Sliced (1,4): " + sliced);
log("Spliced (from index 2): " + spliced);
log("");

let fruits = ["apple", "banana", "cherry", "orange"];
log("Index of 'banana': " + fruits.indexOf("banana"));
log("Includes 'cherry'? " + fruits.includes("cherry"));
log("");

let scores = [88, 33, 100, 50, 75];
scores.sort((a, b) => a - b);
log("Sorted: " + scores);
scores.reverse();
log("Reversed: " + scores);
log("");

let boys = ["Ali", "Omar"];
let girls = ["Sara", "Aisha"];
let all = boys.concat(girls);
log("All: " + all);
log("Joined with &: " + all.join(" & "));
log("");

let x = 10;
let y = "10";
log("x == y: " + (x == y));
log("x === y: " + (x === y));
log("x > 5: " + (x > 5));
log("y <= 10: " + (y <= 10));
