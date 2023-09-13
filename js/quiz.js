import Settings from "./settings.js";
import Final from "./final.js"
import Question from "./question.js"
class Quiz {
    constructor(quizElement, amount, questions) {
        this.quizElement = quizElement;
        this.numberOfQuestionElement = document.querySelector(".numberOfQuestion")
        this.final = document.querySelector(".final")
        this.nextBtn = document.querySelector(".nextBtn")
        this.backBtn = document.querySelector(".backBtn")
        // this.trueAnswers = 0
        this.answeredAmount = 1


        this.questions = this.setQuestion(questions)
        this.totalAmount = amount;
        this.questions[this.answeredAmount].choicesElement.innerHTML = ""
        this.renderQuestion()
        // console.log("amount",amount);
        console.log(this.questions);
        this.nextBtn.addEventListener('click', this.nextQuestion)


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
        console.log('answerd Amount', this.answeredAmount)
        this.questions[this.answeredAmount-1].render()
        this.numberOfQuestionElement.innerHTML = `${this.answeredAmount} of ${this.totalAmount}`
    }
    // if not arow function then you must add nextQuestion.bind(this) to denoted for quiz
    nextQuestion = () => {
        if (this.answeredAmount < this.totalAmount) {
            this.questions[this.answeredAmount].answer()
            this.questions[this.answeredAmount].choicesElement.innerHTML = ""
            this.answeredAmount++
            this.renderQuestion()
            // this.countCorrectAnswer()
            console.log("answeredAmount", this.answeredAmount);
            console.log("totalAmount", this.totalAmount);
        } else {
            // this.endQuiz()
            // countCorrectAnswer()
            console.log("quiz end");

        }
        // const checkElement = this.questions[this.answeredAmount].answer()
    }
    endQuiz() {

    }
    countCorrectAnswer() {
        const trueAnswers = 0
        if (this.questions[this.answeredAmount].isCorrect == "true")
            trueAnswers++
            console.log()

    }
}
export default Quiz;