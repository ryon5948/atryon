
/**
 *  Javascript file for my portfolio website.
 */


var whoIam = [ "not Drew", "not Andy", "not Ryan", "Andrew" ];
var whatIdo = [ "beat the drums", "play the guitar", "write programs","hit tennis balls", "make neat stuff", "design websites" ];
var wia = 0;
var wid = 0;

// Keeps track of where the intro should be in relation to the top of the window.
var introTop = 0;

// Caching window
$window = $(window);

$(document).ready(function() {
	
	// Vertically centers intro text
	centerToWindow("#intro");
	
	// Animate social network links
	slideInPage("#intro");

	// Change "who I am"/"what I do" on mouseenter
	$(".who_I_am").mouseenter(function() {
		toggleText(this, whoIam, wia);
	});
	$(".what_I_do").mouseenter(function() {
		toggleText(this, whatIdo, wid);
	});
	
	// makes sketch fixed div the window size
	$(".fixed-header").height($window.height());
	
	// Sets the correct opacity
	slowScrollHeader();
	
});

$window.resize(function() {
	affixLinks();
	
	// makes sketch fixed div the window size
	$(".fixed-header").height($window.height());
	
	centerToWindow("#intro");
	
	// change opacity in the case of window resize
	slowScrollHeader();
});

$window.scroll(function(e) {
	affixLinks();
	slowScrollHeader();
});

function centerToWindow(elem)
{
	$elem = $(elem);
	introTop = $window.height()/2 - $elem.height()/2 - 100;
	$elem.css("margin-top", introTop);
}

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
					$social_links.animate({ opacity : 1 }, "slow");
						});
		}
}

function randomColor($element) {
	var r = Math.floor((Math.random() * 255) + 1);
	var g = Math.floor((Math.random() * 255) + 1);
	var b = Math.floor((Math.random() * 255) + 1);

	$element.css('color', 'rgb(' + r + ',' + g + ',' + b + ')');
}

// Cycles through both arrarys of text
function toggleText(elem, array, counter) {
	
	$elem = $(elem);
	var height = $elem.height();
	if ($elem.is(":animated") == false) { // Keeps animation from replaying on
											// multiple mouseenters
		$.when($elem.animate({height : "0px"}, "fast"))
			.done(function() {
				$elem.text(array[counter]);
				$(elem).animate({height : height}, "fast"); // Must use $() to make sure 
				var length = array.length;					// the newest version of the element
															// is retrieved
				if (length != 4) {
					wid = (wid >= length - 1) ? 0 : wid + 1;
				} else {
					wia = (wia >= length - 1) ? 0 : wia + 1;
				}

			randomColor($elem);
		});
	}
}

function isScrolledIntoView(elem) {
	
	var docViewTop = $window.scrollTop();
	var elemTop = $(elem).offset().top;
	return (elemTop >= docViewTop);
}

function affixLinks() {
	// Shows the links in a fixed menu up top
	$social = $("#social-links");
	$affix = $(".affixedLinks");
	var isInView = isScrolledIntoView($social);

	if (!isInView) {
		if ($affix.length == 0) {
			$("body").append($social.clone().children("ul").addClass("affixedLinks").css("margin-top", "0px"));
			$affix = $(".affixedLinks");
			$affix.css("left", $window.width() / 2 - $affix.width() / 2);
			$affix.fadeIn("slow");
		}
	} else {
		$affix.fadeOut();
		$affix.remove();
	}
	$affix.css("left", $window.width() / 2 - $affix.width() / 2);
}

function slowScrollHeader()
{
	var top = $window.scrollTop();
	$fixedHeader = $(".fixed-header");
	$intro = $("#intro");
	$introChildren = $intro.children();
	var introHeight = $intro.height();
	var section = $fixedHeader.next("section").offset().top;
	var fixedHeaderY = "-500px " + top/2 + "px";
	var introY = top/3 + introTop;
	var diff = introHeight + $intro.offset().top - section + 200;
	var opacity = 1 - diff/100;
	
	// Change y positions
	$intro.css({ marginTop: introY });
	$fixedHeader.css({backgroundPosition: fixedHeaderY });
		
	// Slowly changes the opacity of the header text
	if( diff >= 0 )
		{
			$introChildren.css("opacity", opacity);
		}
	else
		{
			$introChildren.css("opacity", 1);
		}
}
