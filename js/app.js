
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
    var randomNumber = Math.floor(Math.random() * 100 + 1);

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

    if( difference > 50) {
      console.log("more than 50");
    } else if (difference > 10) {
      console.log("more than 10");
    } else if (difference > 5) {
      console.log("more than 5");
    } else {
      console.log("Far away");
    }


});


    // New Game Function
    function newGame() {
      $('#guessList').empty();
      $('input[type=text]').each(function() {
        $(this).val('');

      });
      console.log("New Game");
    }
    // New Game Button fire
    $('.new').click(function() {
      newGame();

    });

 });
