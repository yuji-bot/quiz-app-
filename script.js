const questions = [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Dog", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false }
      ]
    },
    {
      question: "Who invented the light bulb?",
      answers: [
        { text: "Nikola Tesla", correct: false },
        { text: "Thomas Edison", correct: true },
        { text: "Albert Einstein", correct: false },
        { text: "Isaac Newton", correct: false }
      ]
    },
    {
      question: "Which is the fastest land animal?",
      answers: [
        { text: "Lion", correct: false },
        { text: "Horse", correct: false },
        { text: "Cheetah", correct: true },
        { text: "Tiger", correct: false }
      ]
    },
    {
      question: "What is the capital of India?",
      answers: [
        { text: "Mumbai", correct: false },
        { text: "Delhi", correct: true },
        { text: "Pune", correct: false },
        { text: "Chennai", correct: false }
      ]
    }
  ];

  
const dques=document.getElementById("quistion");
const abtns=document.getElementById("anw");
const next=document.getElementById("next");

let currentindex=0;
let score=0;



function startquiz(){
    resetState();
    current=0;
    score=0;
    next.innerHTML="Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let current=questions[currentindex];
    let questionNo=currentindex + 1;
    dques.innerHTML=questionNo+"."+current.question;

    current.answers.forEach(answers=>{
        const button=document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        abtns.appendChild(button);
        if(answers.correct){
          button.dataset.correct=answers.correct;
        }
        button.addEventListener("click",(e)=>{
          const sel=e.target;
          const iscorr=sel.dataset.correct==="true";
          if(iscorr){
            sel.classList.add("correct");
            score++;
          }else{
            sel.classList.add("incorrect");
          }

          Array.from(abtns.children).forEach(button=>{
            if(button.dataset.correct==="true"){
              button.classList.add("correct");
            }
            button.disabled=true;
          });
          next.style.display="block";
        })
    })
}

const resetState=()=>{
  next.style.display="none";
  while(abtns.firstChild){
    abtns.removeChild(abtns.firstChild);
  }

}
next.addEventListener("click",()=>{
  if(currentindex < questions.length){
    currentindex++;
    if (currentindex < questions.length){
      showQuestions();
    }else{
      resetState();
      dques.innerHTML=`your is ${score} out of ${questions.length}!!`;
      next.innerHTML="play again";
      next.style.display="block";
    }
  }else{
    startquiz();
  }
})
startquiz();