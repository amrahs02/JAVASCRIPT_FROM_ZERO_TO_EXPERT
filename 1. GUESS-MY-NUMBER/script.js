// console.log(document.querySelector(".left").textContent);

//textContent gives the content between the tag ( here it is "Check")
// DOM ALLOWS JAVASCRIPT TO ACCESS HTML ELEMENTS,  STYLE AND MANIPULATE THEM
// dom is auto created by browser and stored like tree structures

// document is entry point of dom
// the first child element is html element others are child and siblings

// important;
// 1. DOM is not the part of Javascript
// 2. Also query Selectors are not a part of javascript
// these are all parts of webapi

// a function is also just a value that's why we can use function as argument

// we get value of input field by .value

// document.querySelector(".check").addEventListener("click", function () {
//   console.log(document.querySelector(".guess").value);
// });

// NOTE: we only define the function here and then pass it to event handler , we do not call it , but it is javascript engine that  call the function as soon as event happens

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // here we cannot use const because const is not immutable and we want immutable value here
let highscore = 0;

// plus 1 added to get 20, other wise it is   0 to 19(or 19.999999)
//Math is object and .random() is a method
// it gives a number betweeen 0 and 1
// we use trunc method to generate number without decimal

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Value";
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem"; //  this needs to be in string otherwise it won't work
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//generally we get user input as string , so we need to convert these into number that why we use Number

document.querySelector(".again").addEventListener("click", function () {
  score = 20; // here we  cannot use const because const is not immutable and we want immutable value here
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing..";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("body").style.width = "15rem";
});

//some bugs in again button
