$(document).ready(function() {
	var totalQuestions = $('.question').size();
	var currentQuestion = 0;
	$question = $('.question');
	$pick_answer = $('.pick_answer');
	$('.question').hide();
	$('.pick_answer').hide();
	$($question.get(currentQuestion)).fadeIn();
	$('.next').click(function(){
		if ($('input:checked').length > currentQuestion) {
		event.preventDefault();
		$($question.get(currentQuestion)).fadeOut(function(){
			currentQuestion = currentQuestion + 1;
			$('.pick_answer').hide();
			$($question.get(currentQuestion)).fadeIn();
			})}
		else {
			event.preventDefault();
			$('.pick_answer').show();
			};
			
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