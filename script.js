$(document).ready(function() {
	var totalQuestions = $('.question').size();
	var currentQuestion = 0;
	$question = $('.question');
	$('.question').hide();
	$($question.get(currentQuestion)).fadeIn();
	$('.next').click(function(){
		event.preventDefault();
		$($question.get(currentQuestion)).fadeOut(function(){
			currentQuestion = currentQuestion + 1;
			$($question.get(currentQuestion)).fadeIn();
			
		});
		});
	$('.restart').click(function(){  //Allows user to restart quiz by clicking Restart button
		event.preventDefault();
		if(currentQuestion != 0) {   //Prevents script from firing when user is on question 0
			$($question.get(currentQuestion)).fadeOut(function(){
			currentQuestion = 0;
			$('input').attr('checked',false);
			$($question.get(currentQuestion)).fadeIn();
		})};
	
})});