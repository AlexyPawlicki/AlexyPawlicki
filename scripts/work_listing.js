




$("#card_1").on( "click", work_display);

$("#card_1").css( "background-image", "url(https://images.unsplash.com/photo-1619460636045-ed08799e25f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80)");
$("#card_2").css( "background-image", "url(https://images.unsplash.com/photo-1619525673983-38b379202881?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)");
$("#card_3").css( "background-image", "url(https://images.unsplash.com/photo-1619439443549-3b38b4611adc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80)");
$("#card_4").css( "background-image", "url(https://images.unsplash.com/photo-1619314428206-e475f6648ccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1396&q=80)");
$("#card_5").css( "background-image", "url(https://images.unsplash.com/photo-1619495447576-a3a86bb4cf0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)");
$("#card_6").css( "background-image", "url(https://images.unsplash.com/photo-1619508422331-606e38f1f902?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)");





// Main function 
function work_display() {
    display_project();

    setTimeout(function(){ scroll_to_display(); } , 800);
    $(".collapse").addClass("collapse_shaking");

}


function work_collapse() {
    $(".collapse").removeClass("collapse_shaking");
    $(".collapse").addClass("close_btn-active");
    $(".project_box").toggleClass("box_active");

    setTimeout(function(){ $(".collapse").removeClass("close_btn-active"); } , 1800);
}






function display_project() {
    $(".project_box").addClass("box_active");
}

function scroll_to_display() {
    $('.project_box').animatescroll({scrollSpeed:500,easing:'easeInOutSine',padding:60}); 
}

















// // clear the tags
// function clear_tags() {
//     $("#tag").innerHTML = "";
// }

// // first image is preview one
// function change_image(arg) {
//     var exchange =  arg.src;
//     mimage.src = exchange;
// }



