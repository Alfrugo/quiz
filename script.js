var timerEl = document.getElementById('countdown');
var getStarted = document.querySelector(".getStarted")

var timerOn = document.getElementById("timerOn").hidden = false; // Setting initial visibility values for the quiz blocks
var timerOff = document.getElementById("timerOff").hidden = true;

console.log("hello")

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
      timerOff = false;  //THIS TURNS OFF THE WHOLE QUIZ 
      timerOn = true;   

      document.getElementById("timerOff").hidden = false;
      document.getElementById("timerOn").hidden = true;
    }


  }, 1000);

}



getStarted.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".startBtn")) {
    console.log("hello")
    document.getElementById("IDgetstarted").hidden = true;
    countdown();

  }
  
});





