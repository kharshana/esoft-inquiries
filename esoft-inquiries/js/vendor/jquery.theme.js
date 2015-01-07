$(document).ready(function () {

	// Customizations

	var bg_color = $('.customizer .background-color li').css('background-color');
	$('.customizer .background-color li').on('click',function(){
		var bg_color = $(this).css('background-color');
		$('body').css({
			"background-color": bg_color
		});
	});

	var header_color = $('.customizer .header-color li').css('background-color');
	$('.customizer .header-color li').on('click',function(){
		var header_color = $(this).css('background-color');
		$('header').css({"background-color": header_color});
		$('header h1,header h1 .main,.notifications li i').css({"color": "#fff"});
	});

	// Resets

	$('.customizer .header-color li._0').on('click',function(){
		event.preventDefault();
		$('header').css({"background-color": "#fff"});
		$('header h1').css({"color": "#727c7f"});
		$('header h1 .main').css({"color": "#2b303b"});
		$('.notifications li i').css({"color": "#6A7A90"});
	});

	$('.customizer .background-color li._0').on('click',function(){
		event.preventDefault();
		$('body').css({"background-color": "#f4f5f5"});
	});

});