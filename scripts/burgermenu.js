

// -------- --------------------------- ------- // 

/* BURGERMENU + BUTTON TO GO ON TOP OF THE PAGE */

// -------- -------------------------- -------- // 



// -------- -------------- -------- // 
// -------- BURGER BUTTON -------- //
// -------- -------------- -------- // 

function burgermenu() {

    /* ---- MAIN FUNCTIONS ----  */
    $("body").toggleClass("overflow_hidder");
    $(".mb_menu").toggleClass("mb_menu-opened");

    $(".burgermenu").toggleClass("burgermenu_hover");
    $(".burgermenu_container").toggleClass("burgermenu_container-anim");
    $(".burgermenu_container").toggleClass("burgermenu_container-notOpened");  
}







// -------- ------------------------------------------------ -------- // 
// -------- AUTO-REMOVING MOBILE MENU WHEN WIDTH GET LARGER  -------- //
// -------- ------------------------------------------------ -------- /

window.onresize = function() {

    var mq = window.matchMedia("(min-width: 740px)");

    if (mq.matches) {
        if ($('.mb_menu').hasClass('mb_menu-opened')) {
            $('.mb_menu').removeClass('mb_menu-opened');
            $(".burgermenu_container").removeClass("burgermenu_container-anim");

            console.log('removed');
        }
    }

}






// -------- ------------ -------- // 
// -------- GOTO TOP BTN -------- //
// -------- ------------ -------- // 

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('.go-up').addClass('go-up_show');
    } 
    else{
        $('.go-up').removeClass('go-up_show');
    }
})