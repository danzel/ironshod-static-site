var SLIDESHOW = new Array();
var current_ss = 0;
		
$(function() {
	//script to fade between images
	$('div.iphone_btn a').click(function() {
		var fade_div = $('div.fade > div');
		//check if already fading -> return so we don't skip to fast thru the images
		if(fade_div.is(':animated'))
			return;
		
		//get the new current ss to show
		current_ss = (this.hash == '#next' ? current_ss + 1 : current_ss - 1);
		if(current_ss < 0) current_ss = SLIDESHOW.length - 1;
		else if(current_ss >= SLIDESHOW.length) current_ss = 0;
		
		//set the new image to be the bottom img
		$('div.fade > img').attr('src', SLIDESHOW[current_ss]);
		//fade the top img out
		fade_div.fadeOut('slow', function() {
			$('> img', this).attr('src', SLIDESHOW[current_ss]);
			$(this).show();
		});
		
		//update the ss indicator images
		$('div#ss_indicator > img').each(function() { $(this).attr('src', bullet_src); }).get(current_ss).src = bullet_src_selected;
	});
});

jQuery.fn.extend({
	scrollTo : function(speed, easing) {
		return this.each(function() {
			var targetOffset = $(this).offset().top;
			$('html,body').animate({scrollTop: targetOffset}, speed, easing);
		});
	}
});
