$(document).ready(function () {

	// Google Material Design effect for buttons

	$('button, .mbutton').mawbutton({
        speed : 250,
        scale : 6,
        effect : "ripple",
        transitionEnd:function(){
            //console.log('end');
        }
    });

    // Top Navbar Dropdowns

    $('.notifications > li, .user-profile > li').on('click',function(){
    	event.stopPropagation();
	    $(this).addClass("active");
	    $(".notifications > li, .user-profile > li").not(this).find('.dropdownCont').fadeOut('fast');
	    $(this).find('.dropdownCont').fadeToggle('fast');
    });

	$("html").not(".notifications > li, .user-profile > li").on('click',function(){
		$('.dropdownCont').fadeOut('fast');
	});
    
    $('.dropdownCont').on('click',function(){
	    event.stopPropagation();
    });

    $('.dropdownCont a').on('click',function(){
	    event.stopPropagation();
    });

    // Search options dropdowns

    $('.search-addons li .ico').on('click',function(){
    	event.stopPropagation();
	    $(this).parent().addClass("active");
	    $(".search-addons li .ico").not(this).parent().find('.drop').fadeOut('fast');
	    $(this).parent().find('.drop').fadeToggle('fast');
    });

	/*$("html").not(".search-addons li .ico").on('click',function(){
		$('.drop').fadeOut('fast');
	});*/
    
    $('.drop,.datepicker,.datepicker table tr td').on('click',function(){
	    event.stopPropagation();
    });

    $(function () {
	  $('[data-toggle="tooltip"]').tooltip();
	});

    // Content Area Height & Width
    function contentHeight() {
    	var windowHeight = $(window).height();
    	var windowWidth = $(window).width();
	    var headerHeight = $('header').height();
	    var sidebarWidth = $('.sidebar').width();
	    var contentHeight = windowHeight - headerHeight + 'px';
	    var contentWidth = windowWidth - sidebarWidth + 'px';
	    $('.content').css({"height":contentHeight,"margin-top":headerHeight,"width":contentWidth});
    }
    
    contentHeight();

    $(window).resize(function(){
    	contentHeight();
    });

    // Date picker

    $('.input-daterange').datepicker({
        todayBtn: "linked"
    });
	
	// Sidebar navigation

	/*$('.sidebar .toggleButton').on('click',function(){
		if ($(".sidebar").hasClass('expanded')){
			$('.sidebar').removeClass('expanded');
			$('.sidebar').addClass('collapsed');
			$('.sidebar').animate({
				width:'65px'
			})

		} else if ($(".sidebar").hasClass('collapsed')){
		    $('.sidebar').removeClass('collapsed');
			$('.sidebar').addClass('expanded');
			$('.sidebar').animate({
				width:'195px'
			}) 
		}
	});

	$('.expanded .nav-menu > li').on('click',function(){
		$(".expanded .nav-menu > li > ul").css({"display":"none"});
		$(".expanded .nav-menu > li > a").removeClass('active');
		$(this).find('ul').show();
		$(this).find('a').addClass('active');
	});*/

	// Custom File input

	$('input[type=file]').customFile();

	// On focus search

	$('.search-box input[type="search"]').focus(function() {
	  $('.search-addons .drop').hide();
	});



});