import settings from "./settings.js";
class Questions {
    constructor(questions) {
        this.questionElement = document.querySelector(".question")
        this.choicesElement = document.querySelector(".choices")
        this.numberOfQuestionElement = document.querySelector(".numberOfQuestion")
        this.quizElement = document.querySelector(".quiz")
        this.question = questions;
        this.amount = questions.length;
        this.correctAnswer = questions.correct_answer
        this.incorrectAnswers = questions.incorrect_answers
        this.answers = [correctAnswer, ...incorrectAnswers]
        this.isCorrect = "false"
    }
    answer(checkElement) {
        this.isCorrect = checkElement == this.correctAnswer ? "true" : "false"
    }
    render() {
        this.questionElement.innerHTML = this.question.question
        this.choicesElement.innerHTML =
            `<select name="answers" class="answers">
                <option value="0" hidden> choose answers</option>
            ${this.answers.forEach(
                (answer,index) => {
                    `<option value="${answer}" hidden>answer</option>`
                }
            )}
                </select>`
    }
}
export default Questions