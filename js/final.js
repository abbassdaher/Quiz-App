class Final{
    constructor(correctAnswers,totalAmount){
this.scoreElement = document.querySelector(".score")
this.againBtnElement = document.querySelector(".tryAgainBtn")

this.render(correctAnswers,totalAmount);
this.againBtnElement.addEventListener('click',this.startAgain)
    }
startAgain = ()=>{
    location.reload();
}

    render(correctAnswers,totalAmount){
        this.scoreElement.innerHTML =`you Answerd ${correctAnswers} of ${totalAmount}` 

    }
}
export default Final;