
// mobile media query : w = 900px  
var mq = window.matchMedia("(min-width: 900px)");
var distanceScrolled = $(this).scrollTop();

var page = $(document); 



if (mq.matches) {
    $(window).scroll(function(e) {
        var distanceScrolled = $(this).scrollTop();
        $('.homepage_content-container').css('transform', 'translateY('+ -distanceScrolled/20 +'rem)');
        $('#parallax_bottom1').css('transform', 'translateY(' + -distanceScrolled/2 + 'px)');
        setTimeout(() => { 
            $('#parallax_bottom2').css('transform', 'translateY(' + -distanceScrolled/2 + 'px)'); 
        }, 150);

        $('#parallax_top1').css('transform', 'translateY(' + -distanceScrolled/3.2 + 'px)');
        setTimeout(() => { 
            $('#parallax_top2').css('transform', 'translateY(' + -distanceScrolled/3.2 + 'px)'); 
        }, 150);

    });
}
