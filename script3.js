function correctCounter(correct) {
	var totalQuestions = data.length;
	$('#scores').text('Your current score is: ' + correct + ' out of ' + totalQuestions + '.');
};

var source = $('#ultimateWin').html();
var template = Handlebars.compile(source);

$(document).ready(function() {
	var correct = 0;
	var counter = 0;
	var solutions = [];
	var answers = [];
	correctCounter(correct);
	for (var i = 0; i < data.length; i++) {
		$('#' + i).hide();
		solutions.push(data[i].solution);
		}
	$('#' + counter).show();
	console.log(answers);

	$('.next').on('click', function(e) {
		e.preventDefault();
		console.log($('input:checked').val());
		if (answers == []) {
			answers.push($('input:checked').val());
		}
		else {
			answers.push($('input:checked').val());
		}
		console.log(counter);
		console.log(answers);
		if (solutions[counter] == answers[counter]) {
			correct += 1;
			console.log("correct added");
		}
		correctCounter(correct);
		if (correct == data.length && counter == data.length){
			$('#container').append(template());
		}
		console.log("It worked!");
		counter++;
		$('#' + counter).show().siblings('form').hide();
	})

	
})