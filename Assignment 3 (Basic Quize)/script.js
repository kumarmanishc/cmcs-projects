function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const correctAnswer = "paris"; // The correct answer

        if (userAnswer === correctAnswer) {
            displayFeedback("Correct!");
        } else {
            displayFeedback("Wrong. The correct answer is Paris.");
        }
    } else {
        displayFeedback("Please select an answer.");
    }
}

function displayFeedback(message) {
    const feedbackElement = document.getElementById("feedback");
    feedbackElement.textContent = message;
}
