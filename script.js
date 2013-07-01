$(document).ready(function() {
	$('input').attr('checked',false);
	var totalQuestions = $('.question').size();
	var totalQuestionsc = $('.question').size() - 1;
	var currentQuestion = 0;
	var correct = 0;
	function correctCounter(correct) {
		$('#scores').text('Your current score is: ' + correct + ' out of '+totalQuestionsc+'.');
		};
	$question = $('.question');
	$pick_answer = $('.pick_answer');
	$('.question').hide();
	$('.pick_answer').hide();
	$('#huang_di').hide();
	$($question.get(currentQuestion)).fadeIn();
	$('.next').click(function(event){
		if (($('input:checked').length > currentQuestion) || (currentQuestion == 6)) {
		event.preventDefault();
		correctCounter(correct);
		$($question.get(currentQuestion)).fadeOut(function(){
			currentQuestion = currentQuestion + 1;
			$('.pick_answer').hide();
		if (currentQuestion == 5) {
		if (correct == 5) {
		$('#questions').append('<p class="victory">Gong xi Gong xi (恭喜恭喜)!<br>You are the Huang Di（黄帝)!</p><p class="buttons"><button class="replay">Restart</button></p>');
		$('#china_map').fadeOut();
		$('#quiz_descr').fadeOut();
		$('#scores').fadeOut();
		$('#huang_di').fadeIn();
		
		$('.replay').click(function(event){
		event.preventDefault();
		$('.victory').remove();
		currentQuestion = 0;
		$('#huang_di').fadeOut();
		$('.replay').fadeOut();
		$('#china_map').fadeIn();
		$('#quiz_descr').fadeIn();
		$('#1').fadeIn();
		$($question.get(currentQuestion)).fadeIn();
		$('input').attr('checked',false);
		correct = 0;
		$('#scores').fadeIn();
		});
		}
		else if (correct == 3 || correct == 4) {
		$('#quiz_descr').fadeOut();
		$('#scores').fadeOut();
		$('#questions').append('<p class="not_bad">Not Bad (不错)!<br>Please try again!</p><p class="buttons"><button class="replay">Restart</button></p>');
		$('.replay').click(function(){
		event.preventDefault();
		$('.victory').remove();
		currentQuestion = 0;
		$('#huang_di').fadeOut();
		$('.replay').fadeOut();
		$('#china_map').fadeIn();
		$('#quiz_descr').fadeIn();
		$('#1').fadeIn();
		$($question.get(currentQuestion)).fadeIn();
		$('input').attr('checked',false);
		correct = 0;
		$('#scores').fadeIn();
		});
			$($question.get(currentQuestion)).fadeIn();
			}
		else {
		$('#quiz_descr').fadeOut();
		$('#scores').fadeOut();
		$('#questions').append('<p class="bad">Study harder!<br>Then try again!</p><p class="buttons"><button class="replay">Restart</button></p>');
		$('.replay').click(function(){
		event.preventDefault();
		$('.bad').remove();
		currentQuestion = 0;
		$('#huang_di').fadeOut();
		$('.replay').fadeOut();
		$('#china_map').fadeIn();
		$('#quiz_descr').fadeIn();
		$('#1').fadeIn();
		$($question.get(currentQuestion)).fadeIn();
		$('input').attr('checked',false);
		correct = 0;
		$('#scores').fadeIn();
			})};
		
		}}}
	$('.restart').click(function(){  //Allows user to restart quiz by clicking Restart button
		event.preventDefault();
		correct = 0;
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