function correctCounter(correct) {
	var totalQuestions = data.length;
	$('#scores').text('Your current score is: ' + correct + ' out of ' + totalQuestions + '.');
};

var source = $('#ultimateWin').html();
var template = Handlebars.compile(source);

$(document).ready(function() {
	correctCounter();
	$('#ultimateWin').hide();
	for (var i = 1; i < data.length; i++) {
		$('#' + i).hide();
		console.log("does this fire?");
		}

	$('.next').on('click', function() {
		$('#questions-template').hide();
		$('#ultimateWin').show();
		console.log("It worked!");
	})

	
})