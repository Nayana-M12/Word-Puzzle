let boxes = document.querySelectorAll(".box");
let quest = document.getElementById("quest-container")
let msgContainer = document.querySelector(".msg-container");
let answers = document.querySelector("#answer");
let clearBtn = document.querySelector("#clear-btn");
let submitBtn = document.querySelector("#sub-btn");


const ans = ['JAW','EYES','IRON','ATOM','MARS'];
const questions = [[" The strongest human muscle located at"],
                   ["The only body part that is fully grown from birth"],
                   ["Chemical element with the symbol Fe"],
                   ["The smallest unit of matter is"],
                   ["The red planet is called as"]];
const nextButton = document.getElementById("next-btn");
let idx = 0;
let i = 0;
const options = [['A','J','S','W'],
                 ['S','Y','E','E'],
                 ['N','O','I','R'],
                 ['T','M','O','A'],       
                 ['R','A','M','S']];
const displayQuestion = () => {
    quest.textContent = questions[idx];
}
const displayAnswers =()=>{ boxes.forEach((box,i)=>{
    box.textContent = options[idx][i]; 
 })
 }
boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
             let span = document.createElement("span");
             span.textContent=box.textContent;
             answers.appendChild(span);
        })
});
const checkAns = ()=>{
    let userAns = answers.textContent;
     if(userAns === ans[idx]){
        alert("Correct Answer👋🏻👋🏻");
     }else{
        alert("Wrong Answer😞😟!!Try Again");
     }
}
displayQuestion(idx);
displayAnswers(idx);
nextButton.addEventListener("click",()=>{
    idx++;
    if(idx < questions.length){
        displayQuestion(idx);
        displayAnswers(idx);
        answers.textContent="";
    }else{
        msgContainer.classList.remove("hide");    
        nextButton.disabled = true; 
    }
});
clearBtn.addEventListener("click",()=>{
     answers.textContent="";
})        
submitBtn.addEventListener("click",()=>{
    checkAns();
})

