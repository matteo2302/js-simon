console.log("jsok");
//fase 0
let countDown = document.querySelector("h2");
let number = document.querySelector("p");
let numbers = [];
while (numbers.length < 5) {
  const randoNumber = Math.floor(Math.random() * 100) + 1;
  numbers.push(randoNumber);
}
console.table(numbers);
