$(document).ready(function() {
	var totalQuestions = $('.question').size();
	var currentQuestion = 0;
	var correct = 0;
	$question = $('.question');
	$pick_answer = $('.pick_answer');
	$('.question').hide();
	$('.pick_answer').hide();
	$('#huang_di').hide();
	$($question.get(currentQuestion)).fadeIn();
	$('.next').click(function(){
		if ($('input:checked').length > currentQuestion) {
		event.preventDefault();
		if ($('.correct_a:checked').length > correct) {
		correct = correct + 1;
		$('#scores').text('Your current score is: ' + correct + ' out of '+totalQuestions+'.');
		}
		else {
		$('#scores').text('Your current score is: ' + correct + ' out of '+totalQuestions+'.');
		};
		$($question.get(currentQuestion)).fadeOut(function(){
			currentQuestion = currentQuestion + 1;
			$('.pick_answer').hide();
			$($question.get(currentQuestion)).fadeIn();
			})}
		else {
			event.preventDefault();
			$('.pick_answer').show();
			};
		if (correct == 5) {
		$('#questions').append('<p class="question_text">Gong xi Gong xi (恭喜恭喜)!<br>You are the Huang Di（黄帝)!</p><p class="buttons"><button class="replay">Restart</button></p>')
		$('#china_map').fadeOut();
		$('#quiz_descr').fadeOut();
		$('#scores').fadeOut();
		$('#huang_di').fadeIn();
		
		$('.replay').click(function(){
		event.preventDefault();
		$('.question_text').remove();
		currentQuestion = 0;
		$('#huang_di').fadeOut();
		$('.replay').fadeOut();
		$('#china_map').fadeIn();
		$('#quiz_descr').fadeIn();
		$($question.get(currentQuestion)).fadeIn();
		});
		};
		});
	$('.restart').click(function(){  //Allows user to restart quiz by clicking Restart button
		event.preventDefault();
		$('.pick_answer').fadeOut();
		if(currentQuestion != 0) {   //Prevents script from firing when user is on question 0
			$($question.get(currentQuestion)).fadeOut(function(){
			currentQuestion = 0;
			correct = 0;
			$('.pick_answer').hide();
			$('input').attr('checked',false);
			$($question.get(currentQuestion)).fadeIn();
		})};
	

})});