import Settings from "./settings.js";
import Final from "./final.js"
import Question from "./question.js"
class Quiz{
    constructor(quizElement, amount, result){
        this.quizElement = quizElement;
        this.numberOfQuestionElement = document.querySelector(".numberOfQuestion")
        this.final = document.querySelector(".final")
        this.nextBtn = document.querySelector(".nextBtn")
        this.backBtn = document.querySelector(".backBtn")

        this.answeredAmount =0
        this.total = amount;

        this.questions = this.setQuestion(questions)
        
    }

    /**
     * The function takes an array of questions and returns a new array of Question objects.
     * @param questions - An array of question objects. Each question object should have the following
     * properties:
     * @returns An array of Question objects.
     */
    setQuestion(questions){
        return questions.map(question => new Question(question))
    }
    renderQuestion(){}
    nextQuestion(){}
    endQuiz(){}
    countCorrectAnswer(){}
}
export default Quiz;