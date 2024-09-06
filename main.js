let count = 30;

let countdown = setInterval(function() {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown);  // Stops the countdown when it reaches 0
    console.log("Countdown finished!");
  }
}, 1000);  // 1000 milliseconds = 1 second
