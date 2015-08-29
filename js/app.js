
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    // Create Random Number
    var randomNumber = Math.floor(Math.random() * 100);

    console.log("randomNumber: " + randomNumber);
	 
    // User Input

    // userInput = undefined;

    $('form').on('submit', function(e) {
      e.preventDefault();
      userInput = $('#userGuess').val();

      console.log("userInput: " + userInput);
    });

    var difference = Math.abs(userInput - randomNumber);

    console.log("difference: " + difference);

});

  // Append User Input

  $('ul').append('<li>' + userInput + '</li>');


// New Game Function
function newGame() {
  // document.getElementById('guessList').reset();
  console.log("New Game");
}

$('.new').click(function() {
    // newGame();
    console.log("Hello");
});
