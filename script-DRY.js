// declaring the variables needed 
var timerEl = document.getElementById('countdown');
var getStarted = document.querySelector(".getStarted");
var timerOn = document.getElementById("timerOn");
var timerOff = document.getElementById("timerOff");
var endResult = document.getElementById("endResult");
var finalScore = document.getElementById("finalScore");
var saveScore = document.querySelector("#saveScore");


var questionOne = document.getElementById("question1");
var questionTwo = document.getElementById("question2");
var questionThree = document.getElementById("question3");
var questionFour = document.getElementById("question4");
var questionFive = document.getElementById("question5");

var initialsInput = document.querySelector("#initials");

var goBack = document.getElementById("goBack");
var clearScore = document.getElementById("clearScore")

var quizCompleted = false;

var score = 0;
let timeInterval;

var answer;
var element;

var hasEventListeners = false;

// intial visibility setup
timerOn.hidden = true;
timerOff.hidden = true;
getStarted.hidden = false;
result.hidden = true;
endResult.hidden = true;
highScores.hidden=true;
console.log ("Initial visibility setup score = " + score);

function startingPoint(){
timerOn.hidden = true;
timerOff.hidden = true;
getStarted.hidden = false;
result.hidden = true;
endResult.hidden = true;
highScores.hidden=true;
quizCompleted = false;
timerEl.textContent = 'ZERO'
finalScore = 0;
score = 0;
console.log("Here's the score at the startingPoint " + score);
console.log ("answer: " + answer);
answer = " " // trying to find why it runs the the if twice ...
console.log ("answer reset: " + answer);


// I literally copy pasted your callback function up here and assigned it to a variable

let questionHandler = function (event) {
    element = event.target;
  
    if (element.matches(".quizQuestion")) {
      answer = element.getAttribute("data-answer");
      // this if runs twice after first start again button, three times after the second start quiz again, and so on. Can't figure it out. 
      if (answer == "correct") {
        console.log("correct");
        resultQuestion = document.querySelector("#result");
        resultQuestion.textContent = "Correct!"
        console.log(`changing score from ${score} to`)
        score = score + 1;
        console.log(score);
      }
      else {
        console.log("incorrect")
        resultQuestion = document.querySelector("#result");
        resultQuestion.textContent = "Incorrect!"
      }
      questionOne.hidden = true;
      questionTwo.hidden = false;
    }
  }
  
  function startQuiz() {
    getStarted.hidden = true;
    timerOn.hidden = false;
    timerOff.hidden = true;
    result.hidden = false;
  
    questionOne.hidden = false;
    questionTwo.hidden = true;
    questionThree.hidden = true;
    questionFour.hidden = true;
    questionFive.hidden = true;
    answer = "";
  
    // Which means that down here I can just pass the same function
    question1.addEventListener("click", questionHandler);
  
    question2.addEventListener("click", questionHandler);
  
    question3.addEventListener("click", questionHandler);
  
    question4.addEventListener("click", questionHandler);
  
    question5.addEventListener("click", questionHandler);
    hasEventListeners = true;
  }


function endQuiz(){
  getStarted.hidden = true;
  timerOn.hidden = true;
  result.hidden = true;
  endResult.hidden = false;
  finalScore.textContent = score;
  console.log("At endQuiz " + score)
    }

function countdown() {
  var timeLeft = 10;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    
    if (quizCompleted == true) {
      timerOn.hidden = false;
      timerEl.hidden = false;
      timerEl.textContent = 'ZERO';  
      endResult.hidden = false;
      finalScore.textContent = score;
      clearInterval(timeInterval);  // we stop the timer if we finish the quiz before time is up
      return; // exit the function countdown
     
    }
    else if (timeLeft >= 1 && quizCompleted == false){
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } 
    else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = 'ZERO';
      timerOff.hidden = false;
      // Use `clearInterval()` to stop the timer 

      // Important  this is where the time out message for the quiz !!
      clearInterval(timeInterval);
      endQuiz();     
    }
  }, 1000);
}

// This is the button section that gets the quiz started 
getStarted.addEventListener("click", function(event) {
  element = event.target;
  if (element.matches(".startBtn")) { //checks if we are clicking on the start button
    // console.log("hello")
    
    startQuiz();
    countdown(); // starts the counter
  }
});

// the local thing needs to be in a function. 
saveScore.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
    user = {
    userInitials: initialsInput.value.trim(),
    quizScore: score
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));
  highScores.hidden=false;
  savedData.textContent = "Initials: "+user.userInitials+" - Score: "+user.quizScore;
});

goBack.addEventListener("click", function(event){
    startingPoint();
    

  })
  










