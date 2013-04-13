FixedHeaderNav = Backbone.View.extend({
    
	el: 'ul',
	className: "nav inline fixed-top-nav container-fluid hidden-phone",
	
		initialize: function(){
            this.render();
        },
        render: function() {
        	$(this.el).append("<ul> <li>hello world</li> </ul>");
        	$(".container:first").append(this.el);
          }
    });

    
ListItemView = Backbone.View.extend({
	el: 'li',
	className: 'item',
	name:'',
	initialize: function(name){
		this.name = name;
	},
	events: {
		"click a[class=name]": "scrollToAnchor"
	},
	render: function(){},
	scrollToAnchor:function(id) {
    	var topOffset = 145;
    	var aTag = $("a[name='" + id + "']");
    	$('html,body').animate({
    		scrollTop : aTag.offset().top - topOffset
    	}, 'slow');
    	
    }
});