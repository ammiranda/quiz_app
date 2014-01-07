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
	console.log($('input:visible').closest('form'));
	for (var i = 0; i < data.length; i++) {
		$('#' + i).hide();
		solutions.push(data[i].solution);
		if ($('input').closest('form') == data[i].answers) {
			$('input').attr('id', i);
			}
		}
	$('#' + counter).show();
	console.log(answers);

	$('.next').on('click', function(e) {
		e.preventDefault();
		console.log(this);
		var questionNumber = $(this).closest('form').attr('id');
		var userAnswer = $('input[name=' + questionNumber + ']:radio:checked').val();
		console.log(questionNumber);
		console.log(userAnswer);
		console.log($('input:checked').closest('form').attr('id'));
		console.log(counter);
		console.log(answers);
		if (userAnswer == solutions[counter]) {
			correct += 1;
			console.log("correct added");
		}
		correctCounter(correct);
		if (counter == data.length - 1) {
			var percentCorrect = Math.ceil( (correct / counter) * 100);
			if (percentCorrect >= 100){
				$('#container').append(template());
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
		console.log("It worked!");
		counter++;
		$('#' + counter).show().siblings('form').hide();
	})

	
})