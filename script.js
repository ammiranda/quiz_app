function correctCounter(correct) {
	var totalQuestions = data.length;
	$('#scores').text('Your current score is: ' + correct + ' out of ' + totalQuestions + '.');
};

var ult_source = $('#ultimateWin').html();
var ult_template = Handlebars.compile(ult_source);

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
		}
	$('#' + counter).show();

	$('.next').on('click', function(e) {
		e.preventDefault();

		var questionNumber = $(this).closest('form').attr('id');
		var userAnswer = $('input[name=' + questionNumber + ']:radio:checked').val();

		if (userAnswer == solutions[counter]) {
			correct += 1;
		}

		correctCounter(correct);
		if (counter == data.length - 1) {
			var percentCorrect = Math.ceil( (correct / (counter + 1)) * 100);
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
		$('#' + counter).show().siblings('form').hide();
	})

	
})