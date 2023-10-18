
function checkAnswer() {
    var selectedAnswer = document.querySelector('input[name="q1"]:checked');
    var feedback = document.getElementById('feedback');
  
    if (!selectedAnswer) {
      feedback.innerHTML = 'Please select an answer.';
    } else {
      if (selectedAnswer.value ===  'Hayper Text Markup Languauge') {
        feedback.innerHTML = 'Correct!';
      } else {
        feedback.innerHTML = 'Wrong. The correct answer is Hayper Text Markup Languauge.';
      }
    }
  }
  