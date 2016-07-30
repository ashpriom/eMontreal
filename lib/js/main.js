// BOX SLIDER FUNCTIONS
$(document).ready(function(){
      $('.bxslider').bxSlider({
        captions: true,
        minSlides: 2,
        maxSlides: 7,
        moveSlides: 1,
        slideWidth: 300,
        slideMargin: 10,
        pager: false,
        adaptiveHeight: 300,
        hideControlOnEnd: false,
        touchEnabled: true,
        responsive: true,
      });
      $('.bxslider-sliding-text').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true,
        touchEnabled: true,
        controls: false,
      });
      $('.bxslider-camera').bxSlider({
        captions: true,
        infiniteLoop: true,
        hideControlOnEnd: true,
        touchEnabled: true,
        controls: true,
        pager: false,
        speed: 350,
        auto: true,
        responsive: true,
      });
      $('.bxslider-camera2').bxSlider({
        captions: true,
        infiniteLoop: true,
        hideControlOnEnd: true,
        touchEnabled: true,
        controls: false,
        pager: false,
        speed: 350,
        auto: true,
        responsive: true,
      });
      $('.bxslider-testimonials').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true,
        touchEnabled: true,
        controls: false,
        adaptiveHeight: true,
        //pager: false,
      });
});

$(document).ready(function(){
    jQuery(".tile1").append("<p class='hovertext1'>Our instructor Remko Troost designed Conor, the main character</p>");
        jQuery(".tile1 .hovertext1").hide();
            jQuery(".tile1").mouseover(function(){
                jQuery(".tile1 .hovertext1").show();
            }).mouseout(function(){
        jQuery(".tile1 .hovertext1").hide();
    });
});

$(document).ready(function(){
    jQuery(".tile2").append("<p class='hovertext2'>Several Syn Studio Instructors designed props and environments for the X-Men movies</p>");
        jQuery(".tile2 .hovertext2").hide();
            jQuery(".tile2").mouseover(function(){
                jQuery(".tile2 .hovertext2").show();
            }).mouseout(function(){
        jQuery(".tile2 .hovertext2").hide();
    });
});  

$(document).ready(function(){
    jQuery(".tile3").append("<p class='hovertext3'>Our instructor Donglu Yu created underwater mood paintings that inspired many of the game's underwater scenes</p>");
        jQuery(".tile3 .hovertext3").hide();
            jQuery(".tile3").mouseover(function(){
                jQuery(".tile3 .hovertext3").show();
            }).mouseout(function(){
        jQuery(".tile3 .hovertext3").hide();
    });
});  

$(document).ready(function(){
    jQuery(".tile4").append("<p class='hovertext4'>Our instructor Bruno Gauthier Leblanc designed Vaas from Far Cry 3, considered one of the top video game villains of all times.</p>")
        jQuery(".tile4 .hovertext4").hide();
            jQuery(".tile4").mouseover(function(){
                jQuery(".tile4 .hovertext4").show();
            }).mouseout(function(){
        jQuery(".tile4 .hovertext4").hide();
    });
});  

$(document).ready(function(){
    jQuery(".tile5").append("<p class='hovertext5'>Several Syn Studio Instructors designed props and environments for the Batman games</p>");
        jQuery(".tile5 .hovertext5").hide();
            jQuery(".tile5").mouseover(function(){
                jQuery(".tile5 .hovertext5").show();
            }).mouseout(function(){
        jQuery(".tile5 .hovertext5").hide();
    });
});  

$(document).ready(function(){
    jQuery(".tile6").append("<p class='hovertext6'>Our instructor Meinert Hansen created 65 key frame illustrations for the film 300</p>");
        jQuery(".tile6 .hovertext6").hide();
            jQuery(".tile6").mouseover(function(){
                jQuery(".tile6 .hovertext6").show();
            }).mouseout(function(){
        jQuery(".tile6 .hovertext6").hide();
    });
});  

/**
 * Off-canvas menu toggle
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.main-content-container' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();