import { allQuestions } from "./index.js";
import { quiz } from "./index.js";
const questionsContainer = document.getElementById("questions-container")
export class Question{
    constructor(index){
        this.index=index
        this.category=allQuestions[this.index].category
        this.question = allQuestions[this.index].question
        this.questionsLength = allQuestions.length
        this.correctAnswer= allQuestions[this.index].correct_answer
        this.incorrectAnswers= allQuestions[this.index].incorrect_answers
        this.allChoices=[this.correctAnswer , ...this.incorrectAnswers].sort()
        this.answred=false
        
    }
    display(){
        let cartoona=`
        <div
          class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn"
        >
          <div class="w-100 d-flex justify-content-between">
            <span class="btn btn-category">${this.category}</span>
            <span class="fs-6 btn btn-questions">${this.index +1} of ${this.questionsLength} Questions</span>
          </div>
          <h2 class="text-capitalize h4 text-center">${this.question}</h2>  
          <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
          ${this.allChoices.map((choice)=> `<li>${choice}</li>`).join("")}
          </ul>
               
        </div>
     
        `
        questionsContainer.innerHTML=cartoona
        let allAnsswers = Array.from(document.querySelectorAll(".choices li"))
        allAnsswers.forEach((answer)=>{
            answer.addEventListener("click",(e)=>{
                this.checkAnswer(e.target)
            })
        })
  
    }
    checkAnswer(userAnswer){
      if(this.answred){
        return
      }
        if(userAnswer.innerHTML ==  this.correctAnswer){
            console.log("correct");
            userAnswer.classList.add("correct")
            quiz.score++
            console.log(quiz.score);
          }else{
            console.log("incorrect");
            userAnswer.classList.add("wrong")
        }
        this.index++
        this.answred=true
        this.animatQuestion(userAnswer)
        setTimeout(()=>{

          this.nextQuestion()
        },1000)
    }   
    animatQuestion(element){
      element.closest(".question").classList.remove("animate__bounceIn")
      element.closest(".question").classList.add("animate__backOutLeft")
    }
    nextQuestion(){

      if(this.index < allQuestions.length){
        let newQuestion = new Question(this.index)
        newQuestion.display()
      }else{
        console.log("finish");
        questionsContainer.innerHTML=`<div id="tryAgainContainer" class="text-center text-white animate__animated animate__bounceIn">
        <h1>Your Score is <span>${quiz.score}</span></h1>
        <button class="btn btn-danger" id="tryAgainBtn">Try Again</button>
    </div>`
        let tryAgainBtn = document.getElementById("tryAgainBtn")
        tryAgainBtn.addEventListener("click",function(){
            window.location.reload()
        })
      }
      

    }
}