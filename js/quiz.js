import Settings from "./settings.js";
import Final from "./final.js"
import Question from "./question.js"
class Quiz {
    constructor(quizElement, amount, questions) {
        this.quizElement = quizElement;
        this.numberOfQuestionElement = document.querySelector(".numberOfQuestion")
        this.finalElement = document.querySelector(".final")
        this.nextBtn = document.querySelector(".nextBtn")
        this.backBtn = document.querySelector(".backBtn")
        this.score = document.querySelector(".score")
        this.tryAgainBTN = document.querySelector(".tryAgainBtn")
        this.answeredAmount = 0
        this.trueAnswers = 0

        this.questions = this.setQuestion(questions)
        this.totalAmount = amount;
        this.questions[this.answeredAmount].choicesElement.innerHTML = ""
        if (this.answeredAmount < this.totalAmount) {
            this.renderQuestion()
        }
        console.log(this.questions);
        this.nextBtn.addEventListener('click', this.nextQuestion)
        this.tryAgainBTN.addEventListener('click', this.tryAgain)



    }

    /* The `setQuestion(questions)` function takes an array of question objects as input and returns a
    new array of Question objects. Each question object in the input array is converted into a
    Question object using the `Question` class constructor. This allows for easier manipulation and
    rendering of the questions in the Quiz class. */

    setQuestion(questions) {
        // let question = questions.map(question => new Question(question))
        // console.log(question);
        return questions.map(question => new Question(question))
    }

    /* The renderQuestion() method is responsible for rendering the current question in the quiz. It
    updates the HTML element with the question text and options, and also updates the number of the
    current question being displayed. */
    renderQuestion() {
        console.log("questions", this.questions[this.answeredAmount])
        this.questions[this.answeredAmount].render()
        this.numberOfQuestionElement.innerHTML = `${this.answeredAmount + 1} of ${this.totalAmount}`
        // this.answeredAmount++
    }
    // if not arow function then you must add nextQuestion.bind(this) to denoted for quiz
    /* The nextQuestion function is a method of the Quiz class. It is responsible for handling the
    logic when the user clicks the Next button to move to the next question in the quiz. */
    nextQuestion = () => {
        if (this.answeredAmount <= this.totalAmount) {
            this.questions[this.answeredAmount].answer()
            this.trueAnswers = this.countCorrectAnswer(this.questions[this.answeredAmount])
            this.questions[this.answeredAmount].choicesElement.innerHTML = ""
            if (this.answeredAmount < this.totalAmount - 1) {
                this.answeredAmount++
                this.renderQuestion()
            } else {
                this.endQuiz()
                console.log("quiz end");
            }
        }
    }
    endQuiz() {
        this.quizElement.style.display = "none"
        this.finalElement.style.display = "block"
        // console.log('answerd Amount', this.answeredAmount)
        // console.log('trueAnswers', this.trueAnswers)
        this.score.innerHTML = `true questions is ${this.trueAnswers} of ${this.totalAmount}`
    }
    tryAgain() {
        window.location.reload()
    }
    countCorrectAnswer(checkElement) {
        if (checkElement.isCorrect == "true") this.trueAnswers++
        return this.trueAnswers
    }
}
export default Quiz;