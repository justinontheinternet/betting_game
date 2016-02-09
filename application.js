$(document).ready(function(){

  var bank = 100;
  var bet = 0;
  var guess = 0;
  var number = 0;

  $('#set-values').on('click', function(){
    getBet();
    getGuess();
    setNumber();
    evaluateGuess();
    if (bank <= 0){
      youLose();
    } else if (bank >= 150){
      youWin();
    }
  });

  $('#reset').on('click', function(){
    resetBank();
  });

  function resetBank() {
    bank = 100;
    $('span').text(bank);
  }

  function getBet() {
    bet = Number($('#wager').val());
  }

  function getGuess() {
    guess = Number($('#guess').val());
  }

  function setNumber() {
    number = Math.floor((Math.random() * 10) + 1);
  }

  function updateBank() {
    $('span').text(bank);
  }

  function evaluateGuess() {
    if (guess === number){
      bank += bet;
      updateBank();
    } else if (guess > number + 1 || guess < number - 1){
      bank -= bet;
      updateBank();
    }
  }
  
  function youLose(){
    $('#lose').show();
  }

  function youWin(){
    $('#win').show();
  }
  
});