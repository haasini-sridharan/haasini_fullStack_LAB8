const quizData = [
    {
        question: "JavaScript supports",
        choices: ["Functions", "XHTML", "CSS", "HTML"],
        correct: "Functions"
    },
    {
        question: "Which language is used for styling web pages?",
        choices: ["HTML", "JQuery", "CSS", "XML"],
        correct: "CSS"
    },
    {
        question: "Which is not a JavaScript Framework?",
        choices: [ "Python Script", "JQuery", "Django", "NodeJS"],
        correct: "Django"
    },
    {
        question: "Which is used for Connect To Database?",
        choices: [ "PHP", "HTML", "JS", "All"],
        correct: "PHP"
    },
    {
        question: "JavaScript is a",
        choices: [ "Language", "Programming Language", "Development", "All"],
        correct: "Programming Language"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElements = [
    document.getElementById('choice0'),
    document.getElementById('choice1'),
    document.getElementById('choice2'),
    document.getElementById('choice3')
];
const buttons = [
    document.getElementById('btn0'),
    document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3')
];
const progressElement = document.getElementById('progress');


function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    for (let i = 0; i < choicesElements.length; i++) {
        choicesElements[i].textContent = currentQuestion.choices[i];
    }
    updateProgress();
}

function checkAnswer(selectedChoice) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (currentQuestion.choices[selectedChoice] === currentQuestion.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function updateProgress() {
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}

function showResults() {
    const percentage = (score / quizData.length) * 100;
    questionElement.textContent = `You scored ${score} out of ${quizData.length}. (${percentage.toFixed(2)}%)`;
    document.querySelector('.buttons').style.display = 'none';
    progressElement.style.display = 'none';
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        checkAnswer(index);
    });
});

loadQuestion();
