/**
 * ViewManager manages all window resizing events and fluid layout processing
 */

// MODEL
var viewManager = {};
(function() {
	    $win = $(window);
	    	    
	    this.switchToSmallScreenView = function () {
	    	var windowSize = $win.width();
	    	$headerSmall = $(".header-small");
	    	$leftPane = $("#left-pane");
	    	$links = $(".content-links");

	    	if (windowSize < 800 || navigator.platform.indexOf("android")>=0)
	    		{
	    		// Hide fixed right pane
	    		$(".right-table-pane").hide();
	    		$("ul.fixed-top-nav").hide();

	    		// Remove margins from left pane
	    		$leftPane.removeClass('left-table-pane').addClass(
	    				'left-table-pane-small');
	    		$headerSmall.show().css('display', 'block');

	    		// Move links to the top
	    		$headerSmall.append($links);
	    		$links.css('text-align', 'left');

	    	} else {
	    		// Default desktop view (revert above changes)
	    		$headerSmall.hide();
	    		$leftPane.removeClass('left-table-pane-small').addClass(
	    				'left-table-pane');
	    		$(".right-table-pane").show();
	    		$("ul.fixed-top-nav").show();
	    		$(".fixed-header-div").append($links);
	    		$links.css('text-align', 'right');

	    	}
	    };
	    
	    this.scrollToAnchor = function(id) {
	    	var topOffset = 50;
	    	var aTag = $("a[name='" + id + "']");
	    	$('html,body').animate({
	    		scrollTop : aTag.offset().top - topOffset
	    	}, 'slow');
	    	
	    };
	    
	    this.fixHeaderToCenter = function() {
	    	$div = $('.fixed-header-div');
	    	var midDiv = $div.height()/2;
	    	var diff = getCenterOfWindow()-midDiv;
	    	if(diff > 125){
	    		$div.css('top', diff);
	    		}
	    }
	}).apply(viewManager);

// Controller
$(window).resize(function() {
	viewManager.switchToSmallScreenView();
	viewManager.fixHeaderToCenter();
});

$(window).scroll(function(){
});

$(document).ready(function() {
	// Incase window is tablet/phone size
	viewManager.switchToSmallScreenView();
	
	// Fix the right pane div to the middle of screen (y axis)
	viewManager.fixHeaderToCenter();

	// Replace email with
	$('a#email').click(function() {
		window.location.href = 'mailto:ryon5948@aol.com';
	});
	
	// Animate about me
	$p = $("p.about_me");
	$p.hover(function() {
        $(this).animate({color: "#888888"});
        // Generates random color
        $(".colorize").each(function(){
    		randomColor($(this));
    	});
	},
	function(){
		$("p.about_me,span.colorize").animate({color: "#000"});
	});
	
	// On click scroll feature
	$('.about,.experience,.education,.projects,.courses').click(
			function(){
				viewManager.scrollToAnchor($(this).attr('class'));
			}
	);
	
    $('.item').mouseover(function() {
        $(this).animate({
           textDecoration: "underline"
        }, 'fast');
    });
    
    $('.item').mouseout(function() {
        $(this).animate({
            textDecoration: "none"
        }, 'fast');
    });
	
});

function getCenterOfWindow() {
	return $(window).height()/2;
}

// View
function randomColor(element) {
	var r = Math.floor((Math.random()*255)+1);
	var g = Math.floor((Math.random()*255)+1);
	var b = Math.floor((Math.random()*255)+1);
	
	$(element).css('color','rgb('+r+','+g+','+b+')');
}