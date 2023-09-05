//  https://opentdb.com/api.php?amount=10&category=9&difficulty=easy 

// category:
//     18:computer
//     9:general knowledge
//     27:animals
//     21:sports
import Questions from "./question.js";
import Quiz from "./quiz.js";

class Settings {
    constructor(){
        this.settingsDom = document.querySelector(".settings")
        this.quizDom = document.querySelector(".quiz")
        this.amountElement =  document.querySelector(".amountElement")
        this.categoryElement = document.querySelector(".categoryElement")
        this.difficulty = [
            document.querySelector("#easy"),
            document.querySelector("#medium"),
            document.querySelector("#hard")
        ]
        this.startBTN = document.querySelector(".startBTN")
        this.startBTN.addEventListener('click',this.startQuiz)
        this.quizDom.style.display = "block"
        this.quiz = []
    }
    
    startQuiz = async()=>{
        this.settingsDom.style.display = "none"
        this.quizDom.style.display = "block"

        const amount = this.getAmount();
        const category = this.categoryElement.value;
        const difficulty = this.getDifficulty();
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}` ;
        let results = await this.fetchData(url)

        this.quiz = new Quiz(this.quizDom, this.amount, results);
        
        console.log(results.results)

        // fetch(url)
        // /* `.then((response)=> response.json())` 
        // that is used to handle
        // the response from a fetch request. 
        // and transform the response to json*/
        // .then((response)=> response.json())
        // /* `.then((data)=> console.log(data.results))` 
        // is a callback function that is executed after
        // the response from the fetch request is successfully transformed into JSON format. It logs
        // the `results` property of the `data` object to the console. */
        // .then((data)=> {
        //     let results=data.results
    }
   /* The fetchData function is an asynchronous function that takes a URL as a parameter. It uses the
   fetch function to make a GET request to the specified URL. */
    fetchData = async (url)=>{
        const response = await fetch(url)
        const result = await response.json()
            return result
    }
    
    /* The getAmount function is retrieving the value entered in the `amountElement` input field. It
    then checks if the value is greater than 0 and less than 20. If it meets this condition, it
    returns the value. Otherwise, it displays an alert message asking the user to enter a number
    between 1 and 20. */
    getAmount = ()=>{
        const amount=(this.amountElement).value
        if(amount > 0 && amount < 20){
            return amount  
        }else{
            alert('please enter the number of questions between 1 and 20')
            location.reload()
        }
        
    }

    /* The getDifficulty function is retrieving the selected difficulty level from the radio buttons.
    It uses the filter method to filter out the checked radio button from the `this.difficulty`
    array. If there is only one checked radio button, it returns the id of that button. Otherwise,
    it displays an alert message asking the user to choose a difficulty level and reloads the page. */
    getDifficulty = ()=>{
        const difficulty = this.difficulty.filter((elemet) => elemet.checked )
        if(difficulty.length == 1){
            return difficulty[0].id
        }else{
            alert("please choose the difficulty level of quiz")
            location.reload()
        }
        
    }

}
export default Settings