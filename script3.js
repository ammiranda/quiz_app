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
		answers.push($('input:checked').val());
		console.log(counter);
		console.log(answers);
		if (solutions[counter] == answers[counter]) {
			correct += 1;
			console.log("correct added");
		}
		correctCounter(correct);
		if (counter == data.length) {
			var percentCorrect = Math.ceil( (correct / counter) * 100);
			if (percentCorrect >= 100){
				$('#container').append(template());
			}
			else if (percentCorrect < 100 && percentCorrect >= 80) {
				alert("not bad");
			}
			else if (percentCorrect < 80 && percentCorrect >= 40) {
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