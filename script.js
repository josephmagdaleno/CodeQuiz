var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var startBtn = document.getElementById('startButton');
var h3tag = document.getElementById('firstSentence');
var highButton = document.getElementById('highScoreButton');




function startQuiz(){
    clock = 60;
    startBtn.classList.add('hide')
    h3tag.classList.add('hide');
  currentQuestion = 0;
  quizContainer.classList.remove('hide');
  nextButton.classList.remove('hide');
  startButton.style.display='none';
  loadQuestion()
     
}

//timer that starts when the start button is pressed
function timer001(){
    clock = clock - 1;
    if (clock < 60){
        time001.innerHTML= clock;
    }
    if(clock < 1){
        window.clearInterval(update);
        nextButton.style.display= 'none';
        startButton.style.display = 'none';
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'You got ' + score + "/5 questions right.";
    }
    if(clock === 0)
    alert("Times is! up quiz over!");
}
update = setInterval("timer001()", 1000);

function repeat001(){
    location.reload();
}
//Function that loads the question
function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    op1.textContent = q.option1;
    op2.textContent = q.option2;
    op3.textContent = q.option3;
    op4.textContent = q.option4;
    
};
//function that loads the follow up questions
function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    //if the answer is right it will give you +1 to your overall score
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 1;
    }
    // if the answer is wrong it will take off 10 seconds from the timer
    if(questions[currentQuestion].answer != answer){
        clock = clock -10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    //when there is one question left the button for next turns into finish
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
        
    }
    if(currentQuestion == totQuestions){
        nextButton.style.display= 'none';
        startButton.style.display = 'none';
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'You got ' + score + "/5 questions right.";
        clock= clearTimeout();
        return;
    }
    loadQuestion(currentQuestion);

}

loadQuestion(currentQuestion);