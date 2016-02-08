  var bank = 100;
  var bet = 0;
  var guess = 0;
  var number = 0;
  

  function declareBank() {
    alert("Your bank is at "+bank+".");
  }

  function getBet() {
    do {
      bet = Number(prompt("How much would you like to bet? (Between 5 and 10)", ""));
    } while (bet < 5 || bet > 10);
  }

  function getGuess() {
    do {
      guess = Number(prompt("Guess a number between 1 and 10.", ""));
    } while (guess < 1 || guess > 10);
  }

  function setNumber() {
    number = Math.floor((Math.random() * 10) + 1);
    alert("The computer chose "+number+"!");
  }

  function updateBank() {
    if (guess === number){
      bank += bet;
    } else if (guess > number + 1 || guess < number - 1){
      bank -= bet;
    }
  }
  
  function youLose(){
    alert("You lose.");
  }

  function youWin(){
    alert("You win!");
  }

  while (bank > 0){
    declareBank();
    getBet();
    getGuess();
    setNumber();
    updateBank();
  }
  if (bank <= 0){
    youLose();
  } else if (bank >= 150){
    youWin();
  }
  