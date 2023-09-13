import Settings from "./settings.js";
class Questions {
    constructor(questions) {
        this.questionElement = document.querySelector(".question")
        this.choicesElement = document.querySelector(".answers")
        this.numberOfQuestionElement = document.querySelector(".numberOfQuestion")
        this.quizElement = document.querySelector(".quiz")
        this.question = questions;
        this.amount = questions.length;
        this.correctAnswer = questions.correct_answer
        this.incorrectAnswers = questions.incorrect_answers
        this.answers = [this.correctAnswer, ...this.incorrectAnswers]
        this.isCorrect = "false"
        this.trueAnswers = 0
    }
    /**
     * The function answer() checks if the selected answer is correct and increments the
     * trueAnswers` count if it is.
     */
    answer() {
        var indexOfAnswer = this.choicesElement.selectedIndex;
        this.isCorrect = this.choicesElement.options[indexOfAnswer].text == this.correctAnswer ? "true" : "false"
        if(this.isCorrect == "true"){
            this.trueAnswers++
        }
        // console.log(this.trueAnswers);
        
    }
    render() {
        this.questionElement.innerHTML = this.question.question        
        this.answers.forEach((answer, index) => {
            this.choicesElement.innerHTML += `<option value="${answer}">${answer}</option>`
        }
        
        )
        
        // this.choicesElement.innerHTML =
        // `<select name="answers" class="answers">
        //     <option value="0" hidden> choose answers</option>
        // ${this.answers.forEach(
        //     (answer,index) => {
        //         `<option value="${answer}">${answer}</option>`
        //     }
        // )}
        //     </select>`
    }
}
export default Questions