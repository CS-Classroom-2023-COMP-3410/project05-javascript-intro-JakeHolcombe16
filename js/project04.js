const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let correctAnswers = Array(questions.length).fill(false);
const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    quizContainer.innerHTML = `<p>${questionData.question}</p>` + 
        questionData.options.map((option, index) => 
            `<label><input type="radio" name="option" value="${index}" ${userAnswers[currentQuestionIndex] === index ? "checked" : ""}> ${option}</label><br>`
        ).join("");
}

function showResult() {
    let resultHTML = `<h3>Quiz Summary</h3>`;
    questions.forEach((q, i) => {
        resultHTML += `<p><strong>${q.question}</strong><br>
        Your Answer: ${q.options[userAnswers[i]] || "Not Answered"}<br>
        Correct Answer: ${q.options[q.answer]}<br>
        <button onclick="reviewQuestion(${i})">Review</button></p>`;
    });
    resultHTML += `<p class="result">Your Score: ${score} / ${questions.length}</p>`;
    quizContainer.innerHTML = resultHTML;
    submitButton.classList.add("hidden");
}

function reviewQuestion(index) {
    currentQuestionIndex = index;
    loadQuestion();
    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (!selectedOption) return alert("Please select an answer.");
    
    const selectedValue = parseInt(selectedOption.value);
    if (correctAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex] !== questions[currentQuestionIndex].answer) {
        score--;
    }
    userAnswers[currentQuestionIndex] = selectedValue;
    correctAnswers[currentQuestionIndex] = selectedValue === questions[currentQuestionIndex].answer;
    if (correctAnswers[currentQuestionIndex]) {
        score++;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

submitButton.addEventListener("click", () => {
    submitButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
    loadQuestion();
});