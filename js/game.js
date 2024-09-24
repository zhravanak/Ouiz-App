import formatDta from "./helper.js";
const level=localStorage.getItem('level') || "medium"
const loader = document.getElementById("loader");
const container = document.getElementById("container");
const questionText = document.getElementById("ques_text");
const answerList = document.querySelectorAll(".answer-text");
const scoreText = document.getElementById("score");
const nextButton = document.getElementById("next-button");
const questionnumber = document.getElementById("questionnumber");
const finish_button=document.getElementById("finish-button")

const CORRECT_BONUS = 10;

const BASE_URL =
  `https://opentdb.com/api.php?amount=10&difficulty=${level}&type=multiple`;

let formatteddata = null;
let questionIndex = 0;
let correctAnswer = null;
let score = 0;
let isAccepted = true;

///////////////////////////////

const fetchHandler = async () => {
  const res = await fetch(BASE_URL);
  const json = await res.json();
  formatteddata = formatDta(json.results);
  console.log(formatteddata);
  start();
};
const start = () => {
  showQustion();
  loader.style.display = "none";
  container.style.display = "block";
};
const showQustion = () => {
  questionnumber.innerText = questionIndex + 1;
  const { question, answers, correctAnswerIndex } =
    formatteddata[questionIndex];
  correctAnswer = correctAnswerIndex;
  console.log(correctAnswer);
  questionText.innerText = question;
  answerList.forEach((button, index) => {
    button.innerText = answers[index];
  });
};

const checkAnswer = (event, index) => {
  if (!isAccepted) return;
  isAccepted = false;
  const isCorrect = index === correctAnswer ? true : false;
  if (isCorrect) {
    event.target.classList.add("correct");
    score += CORRECT_BONUS;
    scoreText.innerText = score;
  } else {
    event.target.classList.add("inCorrect");
    answerList[correctAnswer].classList.add("correct");
  }
};
const nextHandler = () => {
  removeClasses();
  questionIndex++;
  if (questionIndex < formatteddata.length) {
    isAccepted = true;
    showQustion();
  } else {
 finishHandler()
  }
};
const removeClasses = () => {
  answerList.forEach((button) => (button.classList = "answer-text"));
};
window.addEventListener("load", fetchHandler);
answerList.forEach((button, index) => {
  const handler = (event) => checkAnswer(event, index);
  button.addEventListener("click", handler);
});

const finishHandler=()=>{
  localStorage.setItem("score",JSON.stringify(score))
  window.location.assign("/End.html");
}
nextButton.addEventListener("click", nextHandler);
finish_button.addEventListener("click", finishHandler);
///////////////////////////////////////////
