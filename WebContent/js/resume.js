var whoIam = ["not Drew","not Andy","not Ryan", "sometimes Shrew", "Andrew"];
var whatIdo = ["hit the drums","play guitar","write programs","play tennis","make neat stuff", "design websites"];
var wia = 0;
var wid = 0;

$(document).ready(function(){
	
	// Animate social network links
	slideInPage();
	
	// Change "who I am"/"what I do" on click
	$(".who_I_am").click(function(){ toggleText(this,whoIam,wia); });
	$(".what_I_do").click(function(){ toggleText(this,whatIdo,wid); });
});

$(window).resize(function(){
	affixLinks();
});

$(window).scroll(function(){
	affixLinks();
});

// Slides in the first section contains the intro text, and fades in content-links
function slideInPage()
{
	var $intro = $("#intro");
	var $social_links = $(".content-links");
	
	$intro.css("white-space","nowrap").css("overflow","hidden");
	$.when(	$intro.animate({width: "100%"},"slow"))
	.done(function(){
		$intro.css("white-space","inherit").css("overflow","inherit");
		$social_links.animate({opacity:1}, "slow");
	});
}

function changeColor(elem)
{
	$(elem).each(function(){
		randomColor($(this));
	});
}

function randomColor(element) {
	var r = Math.floor((Math.random()*255)+1);
	var g = Math.floor((Math.random()*255)+1);
	var b = Math.floor((Math.random()*255)+1);
	
	$(element).css('color','rgb('+r+','+g+','+b+')');
}

// Cycles through both arrarys of text
function toggleText(elem,array,counter)
{
	$(elem).hide();
	$(elem).text(array[counter]);
	$(elem).fadeIn("slow");
	var length = array.length;
	
	if(length != 5)
	{
		wid = (wid >= length-1) ? 0: wid + 1;
	}
	else
	{
		wia = (wia >= length-1) ? 0: wia + 1;
	}
	
	changeColor(elem);
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function affixLinks()
{
	$links = $(".content-links");
	$intro = $("#intro");
	
	if(!isScrolledIntoView($links))
	{
		$links.addClass("affixedLinks shadow");
		$intro.css("margin-top","350px")
	}
	else if (isScrolledIntoView($intro)) {
		$links.removeClass("affixedLinks shadow");
		$intro.css("margig-top","0px");
	}
}
