
// -------- ------------------ -------- // 
// -------- TEXT FOR EACH CARD -------- //
// -------- ------------------ -------- // 






function card1() {
    // clear the tags 
    tag.innerHTML = "";


    // create 1st tag
    var tag1 = document.createElement("span");
    tag1.innerText = "2020";
    tag1.classList.add("project__tag-content");
    tag1.classList.add("tag__grey");
    tag.append(tag1);
    
    // create 2nd tag
    var tag2 = document.createElement("span");
    tag2.innerText = "Photoshop";
    tag2.classList.add("project__tag-content");
    tag2.classList.add("tag__blue");
    tag.append(tag2);
    


    // add text
    title.innerText = "Le logotype du site";
    para.innerText = "Afin d'ajouter ";  

    prev1.src = "";
    prev2.src = "";
    prev3.src = "";
    prev4.src = "";
    mimage.src = prev1.src;

    works_disp();
}











function card2() {
    // clear the tags 
    tag.innerHTML = "";

    // create 1st tag
    var tag1 = document.createElement("span");
    tag1.innerText = "Affinity Designer";
    tag1.classList.add("project__tag-content");
    tag1.classList.add("tag__yellow");
    tag.append(tag1);

    // add text
    title.innerText = "Supa saucisse !!";
    para.innerText = "Puceau moi, sérieusement, on me l'avait pas sortie celle là depuis longtemps Demande à mes potes si j'suis puceau, tu vas voir les réponses qu'tu vas te prendre";  

    prev1.src = "https://i.ytimg.com/vi/wR6VjJSsUtQ/maxresdefault.jpg";
    prev2.src = "https://images.unsplash.com/photo-1617719787803-f2f6e0bd454e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80";
    prev3.src = "https://images.unsplash.com/photo-1617716460711-12b2178c7722?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
    prev4.src = "https://images.unsplash.com/photo-1617729551122-a265586926c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=681&q=80";

    mimage.src = prev1.src;


    works_disp();
}
