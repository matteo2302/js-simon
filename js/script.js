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
countDown.innerText = 5;
count = setInterval(function () {
  if (countDown.innerText === "0") {
    number.classList.add("d-none");
    clearInterval(count);
  } else {
    countDown.innerText = countDown.innerText - 1;
    console.log(countDown);
  }
}, 1000);
