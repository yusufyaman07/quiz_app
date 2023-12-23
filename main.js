// CONTROLE
console.log(`Hi Js,I am Yusuf YAMAN`);
// QUİZ APP
const questions = [
  {
    question: "Which is the biggest club in Turkey?",
    answers: [
      { text: "Fenerbahçe", correct: false },
      { text: "Beşiktaş", correct: false },
      { text: "GALATASARAY", correct: true },
      { text: "Trabzonspor", correct: false },
    ],
  },
  {
    question: "Which is the best striker of Trendyol Super League?",
    answers: [
      { text: "Edin Dzeko", correct: false },
      { text: "Vincent Aboubakar", correct: false },
      { text: "Paul Onuachu", correct: false },
      { text: "Mauro Icardi", correct: true },
    ],
  },
  {
    question: "Which is the most successful Turkish club in Europe?",
    answers: [
      { text: "GALATASARAY", correct: true },
      { text: "Fenerbahçe", correct: false },
      { text: "Beşiktaş", correct: false },
      { text: "Trabzonspor", correct: false },
    ],
  },
  {
    question: "Which course provides the best software training?",
    answers: [
      { text: "Bilge Akademi", correct: false },
      { text: "BTK", correct: false },
      { text: "UDEMY", correct: false },
      { text: "UDEMİG", correct: true },
    ],
  },
  {
    question: "Which is the best software teacher?",
    answers: [
      { text: "Angela Yu", correct: false },
      { text: "Murat Yücedağ", correct: false },
      { text: "ÖMER FARUK ALİN", correct: false },
      { text: "MEHMET CAN SEYHAN", correct: true },
    ],
  },
  {
    question: "Who is the best full stack developer of the future?",
    answers: [
      { text: "no need for name 1", correct: false },
      { text: "YUSUF YAMAN", correct: true },
      { text: "no need for name 2", correct: false },
      { text: "no need for name 3", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      } else {
        button.classList.add("disabled");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again"
    nextButton.style.display ="block"
}
function  handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex <questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();
