
/**
 *  Javascript file for my portfolio website.
 */

var quotes = [ "\"quote1\"", "\"quote2\"", "\"quote3\"" ];
var whatIdo = [ "beat the drums", "play the guitar", "write programs","hit tennis balls", "make neat stuff", "design websites" ];
var quotesCounter = 0;
var wid = 0;

// Keeps track of where the intro should be in relation to the top of the window.
var introTop = 0;

// Caching window
$window = $(window);

$(document).ready(function() {
	
	//FadeIn quotes
	window.setInterval('fadeInQuotes()', 8000);
	
	// Animate social network links
	slideInPage("#intro");

	// Change "who I am"/"what I do" on mouseenter
	$(".what_I_do").mouseenter(function() {
		toggleWhat();
	});
	
	// makes sketch fixed div the window size
	$(".fixed-header").height($window.height());
	
	// Sets the correct opacity
	slowScrollElements();
	
	// Smooth scrolling for left panel links
	$(".content-links a").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
	
	$(".year").hover(function(e){
		$(e.target).next().children().animate({width:"12px",height:"12px",left:"-56px"});
	},
	function(e){
		$(e.target).next().children().animate({width:"8px",height:"8px",left:"-54px"});
	});
	
});

$window.resize(function() {
		
	// change opacity in the case of window resize
	slowScrollElements();
});

$window.scroll(function(e) {
	slowScrollElements();
});

// Slides in the first section contains the intro text, and fades in
// content-links
function slideInPage(elem) {
	var $elem = $(elem);
	var $social_links = $(".content-links");

	if($elem[0].style.width!="100%" && !$elem.is(":animated")) // JQuery .width() does not give you width in percentages
		{
				$.when($elem.animate({width : "100%"}, "slow")).done(
					function(){
						$elem.css("white-space", "inherit").css("overflow", "inherit");
						$social_links.fadeIn("slow");
					});
		}
}

function randomColor($element) {
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);

	$element.css('color', 'rgb(' + r + ',' + g + ',' + b + ')');
}

function toggleWhat() {
	
	$elem = $(".what_I_do");
	if ($elem.is(":animated") == false) 
	{ // Keeps animation from replaying on multiple mouseenters
		$elem.css({left:"inherit"});
		$.when($elem.animate({right : "100%"}, "slow"))
			.done(function() {
				$elem.css({right:"0%"}).css({left:"100%"});
				$elem.text(whatIdo[wid]);
				$elem.animate({left : "0%"}, "slow"); 
				if(wid == 5)				
					wid=0;
				else
					wid++;

			randomColor($elem);
		});
	}
}

function isScrolledIntoView(elem) {
	
	var docViewTop = $window.scrollTop();
	var elemTop = $(elem).offset().top;
	var height = elem.height();
	return (elemTop+ height >= docViewTop);
}


function slowScrollElements()
{
	var top = $window.scrollTop();
	$fixedLinks = $(".content-links");
	var headerY = -top/10;
	
	// Change y positions
	$fixedLinks.css({ top: headerY });
}


function fadeInQuotes()
{
	$quotes = $("#quotes");
	
	$.when($quotes.fadeOut("slow")).done(function(){
		if(quotes.length-1 == quotesCounter)
			quotesCounter = 0;
		else
			quotesCounter++;
		
		$quotes.html(quotes[quotesCounter]);
		$quotes.fadeIn("slow");
	});
}


