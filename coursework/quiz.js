var score = 0;
var submitted = false;

function checkAnswer(element) {
    if (!submitted) {
        var answerContainer = element.parentNode;
        var answers = answerContainer.querySelectorAll('.oval-button');

        // Reset background color of all answer boxes to white
        answers.forEach(function(answer) {
            answer.classList.remove('selected');
            answer.style.backgroundColor = 'white';
        });

        // Set background color of the selected answer to grey
        element.classList.add('selected');
        element.style.backgroundColor = '#ccc';
    }
}

function submitQuiz() {
    if (!submitted) {
        submitted = true;
        var answerContainers = document.querySelectorAll('.answers-container');

        answerContainers.forEach(function(answerContainer) {
            var selectedAnswer = answerContainer.querySelector('.selected');
            if (selectedAnswer) {
                var selectedAnswerText = selectedAnswer.textContent;
                var questionNumber = answerContainer.parentNode.querySelector('h2').getAttribute('data-question-number');
                console.log("Question Number:", questionNumber);
                var correctAnswer = getCorrectAnswer(questionNumber);
                console.log("Correct Answer:", correctAnswer);
                if (selectedAnswerText === correctAnswer) {
                    score++;
                }
            }
        });
        
        alert("Your score: " + score + "/5");
    }
}

function getCorrectAnswer(questionNumber) {
    var correctAnswer;

    if (questionNumber === '1') {
        correctAnswer = "36"; // Correct answer for Question 1
    } else if (questionNumber === '2') {
        correctAnswer = "Welterweight"; // Correct answer for Question 2
    }
	  else if (questionNumber === '3') {
        correctAnswer = "1993"; // Correct answer for Question 3
    }
	else if (questionNumber === '4') {
        correctAnswer = "Pride"; // Correct answer for Question 4
    }
	else if (questionNumber === '5') {
        correctAnswer = "155lbs"; // Correct answer for Question 5
    }

    return correctAnswer;
}




