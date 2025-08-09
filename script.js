const questions = [
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        answer: "O(log n)"
    },
    {
        question: "Which data structure uses First In First Out (FIFO)?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue"
    },
    {
        question: "Which sorting algorithm is the fastest in average case?",
        options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"],
        answer: "Quick Sort"
    },
    {
        question: "Which data structure uses Last In First Out (LIFO)?",
        options: ["Queue", "Heap", "Stack", "Tree"],
        answer: "Stack"
    },
    {
        question: "Which algorithm is used to find the shortest path in a graph?",
        options: ["Kruskal’s", "Prim’s", "Dijkstra’s", "DFS"],
        answer: "Dijkstra’s"
    }
];

let currentQuestion=0;
let score=0;

const questionText=document.getElementById("question");
const optionBtns=document.querySelectorAll(".option-btn");
const nextBtn=document.getElementById("next-btn");
const resultBox=document.getElementById("result-box");
const quizBox=document.getElementById("quiz-box");
const scoreText=document.getElementById("score");


function loadQuestion(){
    let q=questions[currentQuestion];
    questionText.innerHTML=q.question;

    optionBtns.forEach((btn,index)=>{
        btn.innerHTML=q.options[index];
        btn.disabled=false;
        btn.style.backgroundColor="#e0e0e0"
    });
}
function checkAnswer(btn){
    let selected=btn.innerHTML;
    let originalans=questions[currentQuestion].answer;

    if(selected === originalans){
        btn.style.backgroundColor="rgba(20, 228, 37, 0.767)";
        score++;
    }
    else{
        btn.style.backgroundColor="rgba(255, 8, 8, 0.747)";
    }
    optionBtns.forEach(button=>button.disabled=true);
}
// move to next question
function nextQuestion(){
    currentQuestion++;
    if(currentQuestion<questions.length){
        loadQuestion();
    }
    else{
        quizBox.style.display="none";
        resultBox.style.display="block";
        scoreText.innerHTML=score;
    }
}

//restart
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultBox.style.display = "none";
  quizBox.style.display = "block";
  loadQuestion();
}

//Start the quiz
loadQuestion();