






// Main function 
function work_display() {

    display_project();

    setTimeout(function(){ scroll_to_display(); } , 800);
    $(".collapse").addClass("collapse_shaking");
    $(".display_container-txt").addClass("display_container-txt-active");

}


function work_collapse() {
    $(".collapse").removeClass("collapse_shaking");
    $(".collapse").addClass("close_btn-active");
    $(".project_box").toggleClass("box_active");
    $(".display_container-txt").toggleClass("display_container-txt-active");

    setTimeout(function(){ $(".collapse").removeClass("close_btn-active"); } , 1800);
}






function display_project() {
    $(".project_box").addClass("box_active");
}

function scroll_to_display() {
    $('.project_box').animatescroll({scrollSpeed:500,easing:'easeInOutSine',padding:60}); 
}

















// clear the tags
function clear_tags() {
    $("#project_link").css("display", "none");
    $("#tags").empty();
}

// create a new tag 
function create_tags(x) {
    var obj_tag = document.createElement("li");
    obj_tag.innerText = x.toString();
    obj_tag.classList.add("tag");
    $("#tags").append(obj_tag);
}

// paragraph replacemement 
function title_modifier(x) {
    $("#project_title").text(x.toString());
}

// link replacement 
function func_project_link(link, title) {
    $("#project_link").css("display", "flex");
    $("#project_link").attr("href", link.toString());
    $("#project_link").attr("title", title.toString());
}

// paragraph replacemement 
function paragraph_modifier(x) {
    $("#project_paragraph").html(x.toString());
}

// main function to select image 
function img_switch(number, arg) {
    $(".preview_btn").removeClass("selected");
    $("#pre_"+number).addClass("selected");
    change_image(arg.toString());
}

// change image
function change_image(arg) {
    $("#preview").attr("src", arg.toString());
}




$('#preview').on('click', function () {
    window.open($(this)[0].src, '_blank')
});