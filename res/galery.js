var menu = document.getElementsByClassName("nav-background")[0];
function menuChanger(x){
    if(x.checked){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
window.addEventListener('resize',menuBack)
function menuBack(){
    if(window.innerWidth > 720){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}