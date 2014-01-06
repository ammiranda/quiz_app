function correctCounter(correct) {
	var totalQuestions = data.length;
	$('#scores').text('Your current score is: ' + correct + ' out of ' + totalQuestions + '.');
};

var source = $('#ultimateWin').html();
var template = Handlebars.compile(source);

$(document).ready(function() {
	var correct = 0;
	var answers = [];
	correctCounter(correct);
	for (var i = 1; i < data.length; i++) {
		$('#' + i).hide();
		answers.push(data[i - 1].solution);
		}
	console.log(answers);

	$('.next').on('click', function(e) {
		var checkedAnswer = $('input:checked').val();
		e.preventDefault();
		if (answers.indexOf(checkedAnswer) > -1) {
			correct += 1;
			console.log("correct added");
		}
		correctCounter(correct);
		$('#container').append($('#ultimateWin'));
		console.log("It worked!");
	})

	
})