function upDate(previewPic){
    var myPrincipal = document.getElementById('primary');
    //alert(previewPic.getAttribute("src"));
    myPrincipal.style.backgroundImage="url(" + previewPic.getAttribute("src") + ")";
    myPrincipal.innerHTML=previewPic.alt;
    previewPic.style.opacity=1;
}
function unDo(previewPic){
    var myPrincipal = document.getElementById('primary');
    myPrincipal.style.backgroundImage="none";
    myPrincipal.innerHTML="Hover any image please";
    previewPic.style.opacity=.8 ;
}
function setTab(){
    var images=document.getElementsByTagName("img");
    for(i=0; i<images.length; i++){
        images[i].setAttribute("tabIndex", "0");
        images[i].style.opacity=.8;
    }
}