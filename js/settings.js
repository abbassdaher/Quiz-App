//  https://opentdb.com/api.php?amount=10&category=9&difficulty=easy 

// category:
//     18:computer
//     9:general knowledge
//     27:animals
//     21:sports


class Settings {
    constructor(){
        this.settingsDom = document.querySelector(".settings")
        this.quizDom = document.querySelector(".quiz")
        this.amountElement =  document.querySelector(".amountElement")
        this.categoryElement = document.querySelector(".categoryElement")
        this.difficulty = [
            document.querySelector(".easy"),
            document.querySelector(".medium"),
            document.querySelector(".hard")
        ]
        this.startBTN = document.querySelector(".startBTN")
        this.startBTN.addEventListener('click',this.startQuiz)
        this.quizDom.style.display = "none"
    }
    
    startQuiz = ()=>{
        this.settingsDom.style.display = "none"
        this.quizDom.style.display = "block"

        const amount = this.getAmount();
        const category = 18;
        const difficulty = "easy";
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}` ;
        fetch(url)
        /* `.then((response)=> response.json())` 
        that is used to handle
        the response from a fetch request. 
        and transform the response to json*/
        .then((response)=> response.json())
        /* `.then((data)=> console.log(data.results))` 
        is a callback function that is executed after
        the response from the fetch request is successfully transformed into JSON format. It logs
        the `results` property of the `data` object to the console. */
        .then((data)=> console.log(data.results))



    }
    fetchData = (url)=>{
        
    }
    
    /* The `getAmount` function is retrieving the value entered in the `amountElement` input field. It
    then checks if the value is greater than 0 and less than 20. If it meets this condition, it
    returns the value. Otherwise, it displays an alert message asking the user to enter a number
    between 1 and 20. */
    getAmount = ()=>{
        const amount=(this.amountElement).value
        if(amount > 0 && amount < 20){
            return amount  
        }else{
            alert('please enter the number of questions between 1 and 20')
        }
        
    }
}
export default Settings