var $ = jQuery.noConflict();

/*=====================================
    *********** Proloader script ***********
    ======================================*/

jQuery(window).load(function() {
 // executes when complete page is fully loaded, including all frames, objects and images
    $("div#preloader").fadeOut('slow',function(){$(this).remove();});
});


$(document).ready(function(){
    
    /*=============================
    ***** Smooth scroll *****
    ==============================*/
    $('.navbar-nav a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - $('.navbar').height()
            }, 600);
            return false;
          }
        }
    });
    
    
    // Mailchimp Ajax Form
    $("#bildo_mc_form").formchimp();

    
    /*=============================
    ***** scroll to top *****
    ==============================*/
    $(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#scscrollto-top').fadeIn();
		} else {
			$('#scscrollto-top').fadeOut();
		}
	});
    //Click event to scroll to top
	$('#scscrollto-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    
    //initial WOW JS
    //new WOW().init();
    wow = new WOW(
      {
        //animateClass: 'animated',
        offset: 100
      }
    );
    wow.init();
    
    
});