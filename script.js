// declaring the variables needed 
var timerEl = document.getElementById('countdown');
var getStarted = document.querySelector(".getStarted")
var timerOn = document.getElementById("timerOn").hidden = true; // Setting initial visibility values for the quiz blocks
var timerOff = document.getElementById("timerOff").hidden = true;

function startQuiz() {
  document.getElementById("IDgetstarted").hidden = true; // hides the button section 
  document.getElementById("timerOn").hidden = false; // shows the quiz section
}

function endQuiz(){
  document.getElementById("timerOff").hidden = false; // shows the Out of Time message
  document.getElementById("timerOn").hidden = true; // hides the quiz
}

function countdown() {
  var timeLeft = 2;

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





