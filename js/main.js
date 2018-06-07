/* SLICK SLIDER */
$(document).ready(function(){
    $('.team__carousel').slick({
        arrows: false,
        dots: true,
    });
});

$(document).ready(function(){
    $('.comments').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
    });
});
/* END SLICK SLIDER */


/* SMOOTH SCROLL */
$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1200);
        e.preventDefault();
    });
    return false;
});
/* SMOOTH SCROLL END*/