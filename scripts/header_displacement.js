

// -------- -------------------------------------------- -------- // 

/* BACKGROUND APPEARANCE WHEN THE SCROLLBAR IS NOT PLACED ON TOP */

// -------- -------------------------------------------- -------- // 





// -------- ------------------- -------- // 
// -------- HEADER DISPLACEMENT -------- //
// -------- ------------------- -------- // 

var mq = window.matchMedia("(min-width: 740px)");
var invertedmq = window.matchMedia("(max-width: 740px)");


if (mq.matches) {
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $("header").css("background-size", "100% 100%");
            $("header").css("height", "5rem");
        } 
        else{
            $("header").css("background-size", "100% 0%");
            $("header").css("height", "7rem");
        }
    })
}





if (invertedmq.matches) {    
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $("header").css("background-size", "100% 100%");
            $("header").css("height", "5rem");
            $(".header_logo").css("top", "2px");
        } 
        else{
            $("header").css("background-size", "100% 0%");
            $("header").css("height", "5.5rem");
            $(".header_logo").css("top", "5px");
        }
    })
}
