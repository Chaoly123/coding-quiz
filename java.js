var highscores = [];

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var testBtn = document.querySelector("#btn")

var viewScores = document.getElementById("View-scores");

var beginHere = document.getElementById("begin-here");
var questionStart = document.getElementById("questionstart");
var question = document.getElementById("question");
var answer = document.getElementById("answer");

var enterName = document.getElementById("enter-name");
var display = document.getElementById("display");
var initial = document.getElementById("initial");
var initialSubmit = document.getElementById("initial-submit");

var highscore = document.getElementById("highscore");
var highscoreBox = document.getElementById("highscore-box");
var back = document.getElementById("back");
var clear = document.getElementById("clear");

var pageArray = [beginHere, questionStart, question, initial, highscore];

var timer, timerCount, isWin;


var questionContent = {
  question1 = {
    question: "What does NOT belong in HTML coding?",
    correct: "function",
    answerArray: ["body", "header", "div", "fuction"]
  },
  question2 = {
    question: "What does NOT belong in CSS coding?",
    correct: "div",
    answerArray: ["body", "header", "div", "fuction"]
  },
  question3 = {
    question: "What does NOT belong in java coding?",
    correct: "header",
    answerArray: ["body", "header", "div", "fuction"]
  },
  question4 = {
    question: " What does belong in HTML coding?",
    correct: "div",
    answerArray: ["body", "header", "div", "fuction"]
  },
  question5 = {
    question: " What does belong in CSS coding?",
    correct: "background",
    answerArray: ["body", "background", "div", "fuction"]
  },
  question6 = {
    question: "What does belong in java coding?",
    correct: "var",
    answerArray: ["body", "header", "div", "fuction"]
  },
}



function onclick() {
  isWin = false;
  timerCount = 60;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  // renderBlanks()
  startTimer()
}

function decreaseTime() {
  timerCount -= 3
}

function setStateWin() {
  isWin = true;
}

function startTimer() {
  // Sets timer
  // var test = setInterval(function() {
  //   console.log("information")
  // }, 1000);

  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      // if (isWin && timerCount > 0) {
      //   // Clears interval and stops timer
      //   winGame();
      // }
    }

    if (timerCount <= 0 || isWin) {
      clearInterval(timer);
      console.log("game ended")
    }
  }, 1000)
}
var q1, q2, q3, q4, q5, q6;
// var arr = [null, q1, q2, q3, q4, q5, q6]
var arrBtn = document.querySelectorAll(".saveBtn")
arrBtn.forEach(el => {
  el.addEventListener("click", saveInput)
})

function saveInput(e) {
  e.preventDefault()
  var context = document.querySelectorAll('input[name="choice' + this.value + '"]');
  var selectedVal;
  for (var element of context) {
    // console.log(element)
    if (element.checked) {
      selectedVal = element.value;
      break
    }
  }
  if (this.value == 1) {
    q1 = selectedVal
  } else if (this.value == 2) {
    q2 = selectedVal
  } else if (this.value == 3) {
    q3 = selectedVal
  } else if (this.value == 4) {
    q4 = selectedVal
  } else if (this.value == 5) {
    q5 = selectedVal
  } else if (this.value == 6) {
    q6 = selectedVal
  }
}


function check() {
  console.log(q1, q2, q3, q4, q5, q6)
  var c = 0;
  // var q1 = document.quiz.question1.value;
  // var q2 = document.quiz.question2.value;
  // var q3 = document.quiz.question3.value;
  // var q4 = document.quiz.question4.value;
  // var q5 = document.quiz.question5.value;
  // var q6 = document.quiz.question6.value;
  if (q1 == "function") { c++ }
  if (q2 == "div") { c++ }
  if (q3 == "header") { c++ }
  if (q4 == "div") { c++ }
  if (q5 == "background") { c++ }
  if (q6 == "var") { c++ }

  if (c == 6) {
    setStateWin()
  } else {
    decreaseTime()
  }
  // document.write(ok);
}

startButton.addEventListener("click", onclick)
testBtn.addEventListener("click", decreaseTime)