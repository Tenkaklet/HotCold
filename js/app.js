
var randomNumber = newRandomNumber();

var countArray = newArray();


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

      if ( isNaN(userInput)) {
        $('#feedback').text('Please input a number');
      }
      if (userInput >= 1 && userInput <= 100) {
        console.log("between 1 - 100");
      } else {
        $('#feedback').text('Please input a number between 1 & 100');
        console.log("number");
      }

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




    });

   

 });


 // New Game Function
    function newGame() {
      randomNumber = newRandomNumber();
      countArray = newArray();
      $('#guessList').empty();
      $('input[type=text]').each(function() {
        $(this).val('');
      $('#feedback').text('Make your Guess!');
        

       
      
      });
      console.log("New Game");
      console.log("New random number: " + randomNumber);
      
    }

    function newRandomNumber() {
      return Math.floor(Math.random() * 100 + 1);
    }

     function newArray() {
      $('#count').text(0);
      countArray = [];
      console.log("new Array");
      console.log(countArray.length);
      

    }
