$(function(){

	var mobileWidth = 768;
    var wjsCarousel = $(".wjs-carousel");
    var item = $(".item",wjsCarousel);
    var imgs = $("img",wjsCarousel);

    $(window).resize(function(){
    	var screenWidth = $(window).width();
    	var isMobile = screenWidth<mobileWidth; 
    	if(isMobile){
    		imgs.each(function(index,el){
    			var _el = $(el);
    			var src = _el.data("msrc");
    			_el.attr("src",src);
    		})

    		imgs.css({
    			"position":"static",
    			"margin-left":"0px",
    			"width":"100%",
    			"height":"auto"
    		});
    		item.css("height","auto");
    	}else{
    		imgs.each(function(index,el){
    			var _el = $(el);
    			var src = _el.data("psrc");
    			_el.attr("src",src);
    		})
    		imgs.css({
    			"position":"absolute",
    			"margin-left":"-1000px",
    			"width":"auto",
    			"height":410
    		});
    		item.css("height",410);
    	}

    }).trigger("resize");


var scrollwrap = $("#scrollwrap");
var lis = $("li",scrollwrap);
var sum = 0;

lis.each(function(index,el){
   var _el = $(el);
   sum += _el.width();
})
scrollwrap.width(sum);

})

