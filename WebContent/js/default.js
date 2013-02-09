// View
function showCategory(category,event)
{
	if(!event){ event = window.event;}
	
	$("#experience").hide();
	$("#projects").hide();
	$("#education").hide();
	$("#courses").hide();
	$("#"+category).fadeIn('fast');
	$("#contentRow").children().css("background-color","#fff");
	$(event.target).css("background-color", "#E6E6E6");
}

function showDescription(event)
{
	if(!event){ event = window.event;}
	
	$(".classDescription").remove();
	$(event.target).before('<div class="classDescription shadow">' + event.target.getAttribute('data') + "</div>");
}

// Control

function checkForOverlap()
{
		   var wrapper = document.getElementById('wrapper');
		   var sidebar = document.getElementById('sideBar');
		   
		   if ((wrapper.offsetLeft) <= (sidebar.offsetLeft + 50) && window.innerWidth <= 1250) {
		      sidebar.style.height = "100%";
		      sidebar.style.left = "0px";
		      sidebar.style.top = "30px";
		      wrapper.style.marginLeft = "50px";
		      wrapper.style.marginRight = "0px";
		      wrapper.style.width = "90%";
		      wrapper.style.maxWidth = "1100px";
		   }
		   else{
			  sidebar.style.left = "25px";
		      sidebar.style.top = "237px";
			  sidebar.style.height = "";
		      wrapper.style.maxWidth = "1000px";
		      wrapper.style.margin = "0px auto";
		   }
}

window.onresize = checkForOverlap;
window.onload = checkForOverlap;
