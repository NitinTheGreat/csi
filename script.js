var currentQuestion = 1;
var questions = document.querySelectorAll('.question');
var submitBtn = document.getElementById('submit-btn');
var questionNumbers = document.querySelectorAll('.question-numbers li');

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
            
            alert("Correct answer!");
        } else {
            
            alert("Incorrect answer!");
        }
        // Change color of question number to green
        questionNumbers[questionNumber - 1].style.color = 'green';
        // Move to the next question if it exists
        showNextQuestion();
    } else {
        alert("Please select an option.");
    }
}


function submitTest() {
    
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

function selectOption(questionId, optionValue) {
    document.querySelector('input[name="question' + questionId + 'Option"][value="' + optionValue + '"]').checked = true;
}
