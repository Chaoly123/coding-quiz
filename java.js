
var time;
var secoundLeft = 60;
var timerCount;

var questions = "";
var answer = "";
var highscore = 0;

let startButton = document.getElementById("start-code-btn");
let timeEl = document.querySelector(".time");
let questionEl = document.querySelector("question");
let answerEl = document.querySelector("correct-answers");
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
    answerArray: ["body", "header", "div", "fuction"]
  },
  question = {
    question: "What does NOT belong in CSS coding?",
    correct: "div",
    answerArray: ["body", "header", "div", "fuction"]
  },
  question = {
    question: "What does NOT belong in java coding?",
    correct: "header",
    answerArray: ["body", "header", "div", "fuction"]
  },
  question = {
    question: " What does belong in HTML coding?",
    correct: "div",
    answerArray: ["body", "header", "div", "fuction"]
  },
  question = {
    question: " What does belong in CSS coding?",
    correct: "background",
    answerArray: ["body", "background", "div", "fuction"]
  },
  question = {
    question: "What does belong in java coding?",
    correct: "var",
    answerArray: ["body", "header", "var", "fuction"]
  }

];

const totalPoints = 30;
const totalQuestionContent = 6;


function start() {
  time()
  getQuestion()
  correctAnswer()
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
  questionEl.append(question[questionIndex].question);
  question[questionIndex].options.forEach(function (singleanswer) {
    var rightButton = document.createElement("button");
    rightButton.id = "rightButton";
    rightButton.textContent = singleanswer;
    rightEl.appendchild(rightButton);
  });
}

function correctAnswer() {
  if (answerEl === question[questionIndex].correct) {
    textContent = "You are right"
    highscore++;
    questionIndex++;
  } else {
    time -= 3
  }
};

startButton.addEventListener("click", start)
