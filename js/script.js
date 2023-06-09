console.log("jsok");
//fase 0
let countDown = document.querySelector("h1");
let number = document.querySelector("li");
let listNumber = document.querySelector("ul");
let answers = [];
let numbers = [];
while (numbers.length < 5) {
  const randoNumber = Math.floor(Math.random() * 100) + 1;
  listNumber.innerHTML += `<li> ${randoNumber} </li>`;
  numbers.push(randoNumber);
}
console.table(numbers);
countDown.innerText = 30;
setInterval(function () {
  countDown.innerText = countDown--;
  console.log(countDown);
}, 1000);
