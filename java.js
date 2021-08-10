
var time;
var secoundLeft = 60;
var timerCount;

var question = "";
var answer = "";
var highscore = 0;

let startButton = document.getElementById("start-button");
let timeEl = document.querySelector(".time");
let questionEl = document.querySelector("question");
let answerEl = document.querySelector("correct-answers");
let correctEl = "";
let currentQuestion = question.length - 1;
let highscoreEl = document.querySelector("view-scores");

var allScore = [];
// var storeScores = json.parse(localStorage.getItem("userData"));
var question = 0;


var question = [

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
    answerArray: ["body", "header", "var", "fuction"]
  }

];

const totalPoints = 120;
const totalQuestion = 6;


function start() {
  time()
  getQuestion()
  question()
}

function time() {
  let timeInterval = setInterval(function() {
    if( secoundLeft === 0 ) {
      clearInterval(timeInterval);
      timeEl.textContent = "Out of Time!!!!"
    } else {
      secoundLeft--;
      timeEl.textContent = secoundLeft;
    }
  }, 1000);
}

function getQuestion () {
  questionEl.append(question[question].question);
  question[question].options.forEach(function (singleanswer) {
    var rightButton = document.createElement("button");
    rightButton.id = "rightButton";
    rightButton.textContent = singleanswer;
    rightEl.appendchild(rightButton);
  });
}

function question() {
  if( answerEl === question[question].correct) {
    textContent = "You are right"
    highscore++;
    question++;
  } else {
    time -= 3
  }
};

startButton.addEventListener("click", start)
