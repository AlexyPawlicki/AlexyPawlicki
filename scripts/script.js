

/* ------ AUTO UPDATE DATE ------ */
var todaydate = new Date();
var annee = todaydate.getFullYear();
document.getElementById("date").innerHTML = annee;






// -------- ------------------------------------- -------- // 
// -------- COPY CONTENT FROM AN ID TO CLIPBOARD  -------- //
// -------- ------------------------------------- -------- // 

function copy_to_clipboard(){
    var copied = document.createRange();

    copied.selectNode(document.getElementById("mail_address"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(copied);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("🤖 -CLICK!-\n (l'adresse a bien été copiée dans le presse-papier)"); 
}     
