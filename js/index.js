import { Quiz } from "./quiz.js";
import { Question } from "./question.js";
const categoryMenu = document.getElementById("categoryMenu")
const difficultyOptions = document.getElementById("difficultyOptions")
const questionsNumber = document.getElementById("questionsNumber")
const startQuizBtn = document.getElementById("startQuiz");
const quizOptionsForm = document.getElementById("quizOptions")
export let allQuestions;
export let quiz
startQuizBtn.addEventListener("click", async function(){
 quiz = new Quiz(categoryMenu.value ,difficultyOptions.value , questionsNumber.value );
 allQuestions =  await quiz.getQuizQuestion()
 quizOptionsForm.classList.replace("d-flex","d-none");
 let questions = new Question(0)
 questions.display()
})