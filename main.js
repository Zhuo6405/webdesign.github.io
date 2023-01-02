$("#gotop").click(function(){
    jQuery("html,body").animate({
        scrollTop:0
    },100);
});
$(window).scroll(function() {
    if ( $(this).scrollTop() > 300){
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});