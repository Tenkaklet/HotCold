
var randomNumber = newRandomNumber();



$(document).ready(function() {
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    // Create Random Number
    
    console.log("randomNumber: " + randomNumber);
	 
    // User Input

    var userInput = undefined;

    $('form').on('submit', function(e) {
      e.preventDefault();
      var userInput = $('#userGuess').val();

      console.log("userInput: " + userInput);
    
    // Append User Input
    $('#guessList').append('<li>' + userInput + '</li>');


    // Check Difference
    var difference = Math.abs(userInput - randomNumber);

    console.log("difference: " + difference);

    if( difference >= 50) {
      $('#feedback').text('Freezing...');
    } else if (difference >= 10) {
      $('#feedback').text('Getting Warm...');
    } else if (difference >= 5) {
      $('#feedback').text('Ouch Burning!');
    } else if (difference === 0) {
      $('#feedback').text('You got it!');
    }


});

    // Count Array (increments # of guesses)

    var countArray = [1];

    $('#guessButton').click(function(event) {
      $('#count').text(countArray++);
    });
    


    // New Game Button fire
    $('.new').click(function() {
      newGame();

      $('#count').text(countArray[0]);



    });


 });


 // New Game Function
    function newGame() {
      randomNumber = newRandomNumber();
      $('#guessList').empty();
      $('input[type=text]').each(function() {
        $(this).val('');

       
      
      });
      console.log("New Game");
      console.log("New random number: " + randomNumber);
    }

    function newRandomNumber() {
      return Math.floor(Math.random() * 100 + 1);
    }

