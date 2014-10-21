$(document).ready(function() 
{
  $('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
  })
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
  })
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate({'left': '300px'},
		500, function()
			{
			$(this).hide();
			$(this).css('left', '-212px');
			}
		);
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
  
	$(document).keydown(function(e) {
		if (e.keyCode == 88) 
		{
			playGroove();
			$('.ryu-jquery').hide();
			$('.ryu-cool').show();
		}   
	}).keyup(function(e) {
		if (e.keyCode == 88) 
		{
			$('#groove-sound')[0].pause();
			$('#groove-sound')[0].load();
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});
})

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playGroove(){
	$('#groove-sound')[0].volume = 0.5;
	$('#groove-sound')[0].load();
	$('#groove-sound')[0].play();
}
