

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




