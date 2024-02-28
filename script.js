var currentQuestion = 1;
var questions = document.querySelectorAll('.question');
var submitBtn = document.getElementById('submit-btn');

// Show question 1 when the page loads
window.onload = function() {
    showQuestion(1);
};

function showQuestion(questionNumber) {
    questions.forEach(function(question) {
        question.style.display = 'none';
    });
    document.getElementById('question' + questionNumber).style.display = 'block';
    currentQuestion = questionNumber;
    // Show submit button if it's the last question
    if (currentQuestion === questions.length) {
        submitBtn.style.display = 'block';
    } else {
        submitBtn.style.display = 'none';
    }
}

function submitAnswer(questionNumber) {
    var selectedOption = document.querySelector('input[name="question' + questionNumber + 'Option"]:checked');
    if (selectedOption) {
        var selectedValue = selectedOption.value;
        var correctAnswer = document.getElementById('question' + questionNumber + 'CorrectAnswer').value;
        if (selectedValue === correctAnswer) {
            // Correct answer logic, you can update the score here
            // For demonstration, let's just alert
            alert("Correct answer!");
        } else {
            // Incorrect answer logic
            alert("Incorrect answer!");
        }
        // Move to the next question
        showQuestion(questionNumber + 1);
    } else {
        alert("Please select an option.");
    }
}

function submitTest() {
    // Here you can implement logic to calculate the final score out of 10
    // For demonstration purpose, let's just show an alert with the final score out of 10
    alert("Test submitted! Your score out of 10 will be calculated here.");
}

function showNextQuestion() {
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion + 1);
    }
}

function showPreviousQuestion() {
    if (currentQuestion > 1) {
        showQuestion(currentQuestion - 1);
    }
}
