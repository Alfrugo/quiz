// declaring the variables needed 
var timerEl = document.getElementById('countdown');
var getStarted = document.querySelector(".getStarted");
var timerOn = document.getElementById("timerOn");
var timerOff = document.getElementById("timerOff");

var questionOne = document.getElementById("question1");
var questionTwo = document.getElementById("question2");
var questionThree = document.getElementById("question3");
var questionFour = document.getElementById("question4");
var questionFive = document.getElementById("question5");

var quizQuestion = document.querySelector(".question1");
var quizQuestion = document.querySelector(".question2");
var quizQuestion = document.querySelector(".question3");
var quizQuestion = document.querySelector(".question4");
var quizQuestion = document.querySelector(".question5");

// intial visibility setup
timerOn.hidden = true;
timerOff.hidden = true;
getStarted.hidden = false;

function startQuiz() {
  getStarted.hidden = true;
  timerOn.hidden = false;
  timerOff.hidden = true;

  questionOne.hidden = false;
  questionTwo.hidden = true;
  questionThree.hidden = true;
  questionFour.hidden = true;
  questionFive.hidden = true;

  question1.addEventListener("click", function(event) {
    var element = event.target;
    
    if (element.matches(".quizQuestion")) { 
      var answer = element.getAttribute("data-answer");
      if (answer == "correct"){
        console.log("correct");
        var resultQuestion = document.querySelector("#result");
        resultQuestion.textContent = "Correct!"
      }
      else {
        console.log("incorrect")
      }
      questionOne.hidden = true;
      questionTwo.hidden = false;
    }
  });
  question2.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".quizQuestion")) { //checks if we are clicking on the start button
      // console.log("hello")
      questionTwo.hidden = true;
      questionThree.hidden = false;
    }
  });
  question3.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".quizQuestion")) { //checks if we are clicking on the start button
      // console.log("hello")
      questionThree.hidden = true;
      questionFour.hidden = false;
    }
  });
  question4.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches(".quizQuestion")) { //checks if we are clicking on the start button
      // console.log("hello")
      questionFour.hidden = true;
      questionFive.hidden = false;
    }
  });
}

function endQuiz(){
  getStarted.hidden = true;
  timerOn.hidden = true;
  timerOff.hidden = false;
}

function countdown() {
  var timeLeft = 10;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft >= 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = 'ZERO';
      // Use `clearInterval()` to stop the timer 

      // Important  this is where the time out messag for the quiz !!
      clearInterval(timeInterval);
      endQuiz();
      
    }
  }, 1000);
}

// This is the button section that gets the quiz started 
getStarted.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches(".startBtn")) { //checks if we are clicking on the start button
    // console.log("hello")
    startQuiz();
    countdown(); // starts the counter
  }
});





