


// -------- ------------ -------- // 
// -------- IMAGE SYSTEM -------- //
// -------- ------------ -------- // 


// Change main image to preview one
function changeImage(arg) {
    var exchange =  arg.src;
    mimage.src = exchange;
}











// -------- --------------------- -------- // 
// -------- CLOSE AND OPEN SYSTEM -------- //
// -------- --------------------- -------- // 


function collapseProject() {
    document.getElementById("project__displayer").style.height = "0rem";
  
    $('#project__disp').animatescroll({scrollSpeed:1200,easing:'easeInOutSine'}); 
    // return to top of the project grid
  
    sleep(8000);
    // to be sure the div is hidden
    document.getElementById("project__displayer").style.display = "none";
  
}





// INIT THE DISPLAY OF A PROJECT ( display the div + scroll to it ) 
function works_disp() {
    scrolltodisp();
    displayProject();
}

// Scroll function
function scrolltodisp() {
    $('#project__disp').animatescroll({scrollSpeed:500,easing:'easeInOutSine'}); 
    
}








function displayProject(){
    if (window.matchMedia("(min-width: 1000px)").matches) {
        document.getElementById("project__displayer").style.height = "57rem";

    } else {
        document.getElementById("project__displayer").style.height = "56rem";

    } 
}


