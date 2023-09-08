import Settings from "./settings.js";
import Final from "./final.js"
import Question from "./question.js"
class Quiz{
    constructor(quizElement, amount, questions){
        this.quizElement = quizElement;
        this.numberOfQuestionElement = document.querySelector(".numberOfQuestion")
        this.final = document.querySelector(".final")
        this.nextBtn = document.querySelector(".nextBtn")
        this.backBtn = document.querySelector(".backBtn")

        this.answeredAmount = 0

        
        this.questions = this.setQuestion(questions)
        this.totalAmount = amount;
        this.renderQuestion()
        // console.log("amount",amount);
        // console.log(this.questions);
        this.nextBtn.addEventListener('click',this.nextQuestion)
        
    }

    /**
     * The function takes an array of questions and returns a new array of Question objects.
     * @param questions - An array of question objects. Each question object should have the following
     * properties:
     * @returns An array of Question objects.
     */
    setQuestion(questions){
        // let question = questions.map(question => new Question(question))
        // console.log(question);
        return questions.map(question => new Question(question))
    }

    renderQuestion(){
        this.questions[this.answeredAmount].render()
        this.numberOfQuestionElement.innerHTML = `${this.answeredAmount + 1} of ${this.totalAmount}`

    }
    // if not arow function then you must add nextQuestion.bind(this) to denoted for quiz
    nextQuestion = ()=>{
        // const checkElement = this.questions[this.answeredAmount].answer()
    }
    endQuiz(){}
    countCorrectAnswer(){
        this.questions.answer()
    }
}
export default Quiz;