function correctCounter(correct) {
	$('#scores').text('Your current score is: ' + correct + ' out of ' + data.length + '.'); // Appends score report to DOM
};

function quizInitialization() {
	correct = 0;  // Initializes the correct responses counter
	counter = 0;  // Initializes the current question counter
	solutions = [];
	answers = [];

	correctCounter(correct); // Invokes the correct counter function with the current number of correct responses passed in

	for (var i = 0; i < data.length; i++) {  // Iteration that loads all solutions into the solutions array
		$('#' + i).hide();
		solutions.push(data[i].solution);
		}

	$('#' + counter).show();  // Reveals the question with id that matches the current value of the counter variable
};

var ult_source = $('#ultimateWin').html();
var ult_template = Handlebars.compile(ult_source);

$(document).ready(function() {

	dataOutput();

	quizInitialization();

	$('.restart').on('click', function(e) {  // Restarts the quiz on the click of the restart button
		e.preventDefault();

		$('input').prop('checked', false);

		quizInitialization();

	});
	

	$('.next').on('click', function(e) { // Function that fires on click of the submit button

		e.preventDefault();

		var questionNumber = $(this).closest('form').attr('id');
		var userAnswer = $('input[name=' + questionNumber + ']:radio:checked').val();

		if (!userAnswer) { // Prevents user progress if question is unanswered
			alert("Pick an answer!");
		} 
		else {

			if (userAnswer == solutions[counter]) { // Checks if the selected answer matches the solution at the matching index
				correct += 1;
			}

			correctCounter(correct);
			if (counter == data.length - 1) { // Checks if all questions have been answered
				var percentCorrect = Math.ceil( (correct / (counter + 1)) * 100); // Calculates percent correct of questions answered
				$('#container').empty();
				if (percentCorrect >= 100){
					$('#container').append(ult_template());
				}
				else if (percentCorrect < 100 && percentCorrect >= 80) {
					alert("not bad");
				}
				else if (percentCorrect < 80 && percentCorrect >= 60) {
					alert("meh");
				}
				else {
					alert("study more!");
				}
			}
			counter++;
			$('#' + counter).show().siblings('form').hide();  // Shows the current selected question while hiding the others
		}	
	})

	
})