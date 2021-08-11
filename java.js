
var time;
var secoundLeft = 60;
var timerCount;

var questions = "";
var answer = "";
var highscore = 0;

let startButton = document.getElementById("start-code-btn");
let timeEl = document.querySelector(".time");
let questionEl = document.querySelector("#question");
let answerEl = document.querySelector(".correct-answer");
let correctEl = "";
let currentQuestion = questions.length - 1;
let highscoreEl = document.querySelector("view-scores");

var allScore = [];
// var storeScores = json.parse(localStorage.getItem("userData"));
var questionIndex = 0;


var questionContent = [

  question = {
    question: "What does NOT belong in HTML coding?",
    correct: "function",
    answerArray: ["body", "header", "div", "function"]
  },
  question = {
    question: "What does NOT belong in CSS coding?",
    correct: "div",
    answerArray: ["body", "header", "div", "function"]
  },
  question = {
    question: "What does NOT belong in java coding?",
    correct: "header",
    answerArray: ["body", "header", "div", "function"]
  },
  question = {
    question: " What does belong in HTML coding?",
    correct: "div",
    answerArray: ["body", "header", "div", "function"]
  },
  question = {
    question: " What does belong in CSS coding?",
    correct: "background",
    answerArray: ["body", "background", "div", "function"]
  },
  question = {
    question: "What does belong in java coding?",
    correct: "var",
    answerArray: ["body", "header", "var", "function"]
  }

];

const totalPoints = 30;
const totalQuestionContent = 6;


function start() {
  time()
  getQuestion()
}

function time() {
  let timeInterval = setInterval(function () {
    if (secoundLeft === 0) {
      clearInterval(timeInterval);
      timeEl.textContent = "Out of Time!!!!"
    } else {
      secoundLeft--;
      timeEl.textContent = secoundLeft;
    }
  }, 1000);
}

function getQuestion() {
var index = 0;
questionEl.innerHTML = ""
answerEl.innerHTML = ""
  questionEl.append(questionContent[questionIndex].question);
  questionContent[questionIndex].answerArray.forEach(function (singleanswer) {
    var rightButton = document.createElement("button");
    rightButton.id = "rightButton" + [index];
    rightButton.textContent = singleanswer;
    answerEl.append(rightButton);
index++
  });
}

document.addEventListener("click", function(e){
if (e.srcElement.nodeName == 'BUTTON' && document.getElementById(e.srcElement.id).textContent !== 'Start'){ 
if(document.getElementById(e.srcElement.id).textContent === questionContent[questionIndex].correct){
console.log('CORRECT') 
textContent = "You are right"
highscore++;
questionIndex++;
getQuestion()
} else {
console.log('INCORRECT')
time -= 3
questionIndex++;
getQuestion()
}
}
});


startButton.addEventListener("click", start)