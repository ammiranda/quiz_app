function correctCounter(correct, totalQuestionsc) {
		var totalQuestionsc = $('.question').size() - 1;
		$('#scores').text('Your current score is: ' + correct + ' out of ' + totalQuestionsc + '.');
		};
	
	function Restart() { //Resets quiz to questions 1, called by clicking restart button and on page load
	event.preventDefault();
	$('.question').hide();
	$('.pick_answer').hide();
	$('#huang_di').hide();
	$('.replay').fadeOut();
	$('#china_map').fadeIn();
	$('#quiz_descr').fadeIn();
	$('#1').fadeIn();
	$('input').attr('checked', false);
	currentQuestion = 0;
	correct = 0;
	$($question.get(currentQuestion)).fadeIn();
	correctCounter(correct);
	$('#scores').fadeIn();
	};
	
	function Replaybutton() {
		$('.replay').click(function() {
			$('.victory').fadeOut();
			$('#scores').empty();
			Restart();
			})};
			
	function finalScore(correct) {
		$('#scores').text('Your final score is: ' + correct + ' out of ' + totalQuestionsc + '.');
		};
		
	function ultimateWin(correct) { //Runs when user gets all 5 questions correct
		$('#questions').append('<p class="victory">Gong xi Gong xi (恭喜恭喜)!<br>You are the Huang Di（黄帝)!</p><p class="buttons"><button class="replay">Restart</button></p>');
		$('#quiz_descr').fadeOut();
		$('#china_map').fadeOut();
		$('#huang_di').show().fadeIn();
		$('#scores').empty();
		finalScore(correct);
		Replaybutton();
		};
			
	function midWin (correct) { //Runs when user gets 3 or 4 questions correct
		$('#questions').append('<p class="victory">Not Bad (不错)!<br>Please try again!</p><p class="buttons"><button class="replay">Restart</button></p>');
		$('#quiz_descr').fadeOut();
		$('#scores').empty();
		finalScore(correct);
		Replaybutton();
		};
	
	function loseWin (correct) { //Runs when user gets fewer than 3 correct
		$('#questions').append('<p class="victory">Study harder!<br>Then try again!</p><p class="buttons"><button class="replay">Restart</button></p>');
		$('#quiz_descr').fadeOut();
		$('#scores').empty();
		finalScore(correct);
		Replaybutton();
		};


$(document).ready(function() {
	$('input').attr('checked',false);  //Removes cached answers from previous page load
	var totalQuestions = $('.question').size();
	var totalQuestionsc = $('.question').size() - 1;
	var currentQuestion = 0;
	var correct = 0;
	$question = $('.question');
	$pick_answer = $('.pick_answer');
		
	Restart();
	
	$('.restart').click(function(currentQuestion) {
		if (currentQuestion != 0) { //Prevents script from firing when user is on first question
			Restart();
			}});
			
	$('.next').click(function() {
		if ($('input:checked').length > currentQuestion) { //Prevents question progression without user selecting a response
			event.preventDefault();
			correctCounter(correct);
			console.log(currentQuestion);
			$('.pick_answer').hide();
			if ($('.correct_a:checked').length > correct) {
				correct += 1;
				correctCounter(correct);
				console.log(correct);
				}
			$($question.get(currentQuestion)).fadeOut(function() {
				currentQuestion += 1;
				$('.pick_answer').hide();
				$($question.get(currentQuestion)).fadeIn();
				if (currentQuestion == 5) {
					if (correct == 5) {
						ultimateWin(correct);
						}
					else if (correct == 3 || correct == 4) {
						midWin(correct);
						}
					else {
						loseWin(correct);
						}
						}})
					
			}
		  else {
		  	 event.preventDefault();
		  	 $('.pick_answer').show(); //Prompts user to select an answer before progressing
		  	 }
			})});