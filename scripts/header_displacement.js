

// -------- -------------------------------------------- -------- // 

/* BACKGROUND APPEARANCE WHEN THE SCROLLBAR IS NOT PLACED ON TOP */

// -------- -------------------------------------------- -------- // 





// -------- ------------------- -------- // 
// -------- HEADER DISPLACEMENT -------- //
// -------- ------------------- -------- // 

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $("header").css("background-size", "100% 100%");
    } 
    else{
        $("header").css("background-size", "100% 0%");
    }
})
