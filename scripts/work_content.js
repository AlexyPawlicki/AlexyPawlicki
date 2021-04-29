



$("#card_1").on( "click", card1);
$("#card_2").on( "click", card2);
$("#card_3").on( "click", card3);
$("#card_4").on( "click", card4);
$("#card_5").on( "click", card5);
$("#card_6").on( "click", card6);




// ---------------------------------------------- //
// ---------------------------------------------- //
// ---------------------------------------------- //

function card1() {
    clear_tags();

    // texts
    create_tags("Photoshop");
    create_tags("Affinity Designer");
    title_modifier("Mon logotype");
    paragraph_modifier(`
    Je l'ai créé pour ajouter de ma personnalité à mes signatures de mail et à mon site.
    Par ailleurs, cela a pour but de souligner une certaine rigueur ainsi qu'une part de professionnalisme. 
    <br><br> 
    Ce logo représente mes initiales (AP) suivis d'un point pour rappeler la notion de rigueur.
    `);

    // images
    var bg = $("#card_1-img").css("background-image");
    bg = /^url\((['"]?)(.*)\1\)$/.exec(bg);
    bg = bg ? bg[2] : "";
    
    $("#pre_1").click(function(){
        img_switch(1, bg.toString());
    });
    $("#pre_2").click(function(){
        img_switch(2, "./assets/work_assets/project/1/2.svg");
    });
    $("#pre_3").click(function(){
        img_switch(3, "./assets/work_assets/project/1/3.svg");
    });
    $("#pre_4").click(function(){
        img_switch(4, "./assets/work_assets/project/1/4.png");
    });
    

    $("#pre_1").click();
    work_display();
}





// ---------------------------------------------- //
// ---------------------------------------------- //
// ---------------------------------------------- //

function card2() {
    clear_tags();

    // texts
    create_tags("Software");
    create_tags("Software");
    title_modifier("Titre du projet 2");
    paragraph_modifier('Description du projet');

    // images
    var bg = $("#card_2-img").css("background-image");
    bg = /^url\((['"]?)(.*)\1\)$/.exec(bg);
    bg = bg ? bg[2] : "";
    
    $("#pre_1").click(function(){
        img_switch(1, bg.toString());
    });
    $("#pre_2").click(function(){
        img_switch(2, "https://images.unsplash.com/photo-1619616710561-1d0ab63f2272?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
    });
    $("#pre_3").click(function(){
        img_switch(3, "https://images.unsplash.com/photo-1610593469791-209a5ab288bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80");
    });
    $("#pre_4").click(function(){
        img_switch(4, "./assets/work_assets/project/1/2.svg");
    });
    

    $("#pre_1").click();
    work_display();
}






// ---------------------------------------------- //
// ---------------------------------------------- //
// ---------------------------------------------- //

function card3() {
    clear_tags();

    // texts
    create_tags("Software");
    create_tags("Software");
    title_modifier("Titre du projet 3");
    paragraph_modifier('Description du projet');

    // images
    var bg = $("#card_3-img").css("background-image");
    bg = /^url\((['"]?)(.*)\1\)$/.exec(bg);
    bg = bg ? bg[2] : "";
    
    $("#pre_1").click(function(){
        img_switch(1, bg.toString());
    });
    $("#pre_2").click(function(){
        img_switch(2, "https://images.unsplash.com/photo-1619616710561-1d0ab63f2272?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
    });
    $("#pre_3").click(function(){
        img_switch(3, "https://images.unsplash.com/photo-1610593469791-209a5ab288bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80");
    });
    $("#pre_4").click(function(){
        img_switch(4, "./assets/work_assets/project/1/2.svg");
    });
    

    $("#pre_1").click();
    work_display();
}






// ---------------------------------------------- //
// ---------------------------------------------- //
// ---------------------------------------------- //

function card4() {
    clear_tags();

    // texts
    create_tags("Software");
    create_tags("Software");
    title_modifier("Titre du projet 4");
    paragraph_modifier('Description du projet');

    // images
    var bg = $("#card_4-img").css("background-image");
    bg = /^url\((['"]?)(.*)\1\)$/.exec(bg);
    bg = bg ? bg[2] : "";
    
    $("#pre_1").click(function(){
        img_switch(1, bg.toString());
    });
    $("#pre_2").click(function(){
        img_switch(2, "https://images.unsplash.com/photo-1619616710561-1d0ab63f2272?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
    });
    $("#pre_3").click(function(){
        img_switch(3, "https://images.unsplash.com/photo-1610593469791-209a5ab288bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80");
    });
    $("#pre_4").click(function(){
        img_switch(4, "./assets/work_assets/project/1/2.svg");
    });
    

    $("#pre_1").click();
    work_display();
}






// ---------------------------------------------- //
// ---------------------------------------------- //
// ---------------------------------------------- //

function card5() {
    clear_tags();

    // texts
    create_tags("Software");
    create_tags("Software");
    title_modifier("Titre du projet 5");
    paragraph_modifier('Description du projet');

    // images
    var bg = $("#card_5-img").css("background-image");
    bg = /^url\((['"]?)(.*)\1\)$/.exec(bg);
    bg = bg ? bg[2] : "";
    
    $("#pre_1").click(function(){
        img_switch(1, bg.toString());
    });
    $("#pre_2").click(function(){
        img_switch(2, "https://images.unsplash.com/photo-1619616710561-1d0ab63f2272?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
    });
    $("#pre_3").click(function(){
        img_switch(3, "https://images.unsplash.com/photo-1610593469791-209a5ab288bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80");
    });
    $("#pre_4").click(function(){
        img_switch(4, "./assets/work_assets/project/1/2.svg");
    });
    

    $("#pre_1").click();
    work_display();
}






// ---------------------------------------------- //
// ---------------------------------------------- //
// ---------------------------------------------- //

function card6() {
    clear_tags();

    // texts
    create_tags("Software");
    create_tags("Software");
    title_modifier("Titre du projet 6");
    paragraph_modifier('Description du projet');

    // images
    var bg = $("#card_6-img").css("background-image");
    bg = /^url\((['"]?)(.*)\1\)$/.exec(bg);
    bg = bg ? bg[2] : "";
    
    $("#pre_1").click(function(){
        img_switch(1, bg.toString());
    });
    $("#pre_2").click(function(){
        img_switch(2, "https://images.unsplash.com/photo-1619616710561-1d0ab63f2272?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
    });
    $("#pre_3").click(function(){
        img_switch(3, "https://images.unsplash.com/photo-1610593469791-209a5ab288bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80");
    });
    $("#pre_4").click(function(){
        img_switch(4, "./assets/work_assets/project/1/2.svg");
    });
    

    $("#pre_1").click();
    work_display();
}


