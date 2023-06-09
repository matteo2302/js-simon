console.log("jsok");
//fase 0
let countDown = document.querySelector("h1");
let listNumber = document.querySelector("ul");
let answers = [];
let numbers = [];

while (numbers.length < 5) {
  const randoNumber = Math.floor(Math.random() * 100) + 1;
  listNumber.innerHTML += `<li> ${randoNumber} </li>`;
  numbers.push(randoNumber);
}
console.table(numbers);
let number = document.querySelector("li");
countDown.innerText = 2;
count = setInterval(function () {
  if (countDown.innerText === "0") {
    listNumber.classList.add("d-none");
    setTimeout(function () {
      let rightAnswer = [];
      while (answers.length < 5) {
        answer = prompt("scegli un numero da 1 a 99", "");
        answers.push(answer);
        if (numbers.includes(parseInt(answer))) {
          rightAnswer.push(answer);
        }
      }
      alert(`il numero di risposte giuste è ${rightAnswer.length}`);
    }, 200);

    clearInterval(count);
  } else {
    countDown.innerText = countDown.innerText - 1;
    console.log(countDown);
  }
}, 1000);
