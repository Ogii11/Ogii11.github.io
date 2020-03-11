var portfolioPhoto1 = "./res/images/portfolio-1.png",
    portfolioPhoto2 = "./res/images/portfolio-2.png",
    portfolioPhoto3 = "./res/images/portfolio-3.png",
    portfolioPhoto4 = "./res/images/portfolio-4.png",
    portfolioPhoto5 = "./res/images/portfolio-5.png",
    portfolioPhoto6 = "./res/images/portfolio-6.png";

var menu = document.getElementsByClassName("nav-background")[0];

function classRemover() {
    var listOfButtons = document.getElementsByClassName("portfolio-menu-btn","selected-portfolio-btn");
    for (var i = 0;i<5;i++) {
        if (listOfButtons[i].classList.contains("selected-portfolio-btn")) {
            listOfButtons[i].classList.remove("selected-portfolio-btn");
            break;
        }
    }
}

function portfolioPhotos(y){
    var x = y.textContent;
    if (x == "All Works") {
        classRemover();
        y.classList.add("selected-portfolio-btn");
        document.getElementById("portfolio-galery").innerHTML = '<img src='+portfolioPhoto1+' alt="photo1" id="photo1"><img src='+portfolioPhoto2+' alt="photo2" id="photo2"><img src='+portfolioPhoto3+' alt="photo3" id="photo3"><img src='+portfolioPhoto4+' alt="phoyo4" id="photo4"><img src='+portfolioPhoto5+' alt="photo5" id="photo5"><img src='+portfolioPhoto6+' alt="photo6" id="photo6">';
        for (let i = 1; i <= 6; i++){
            var idName = "photo" + i;
            var gridName = "img" + i;
            document.getElementById(idName).style.gridArea = gridName; 
        }
        document.getElementById("portfolio-galery").style.gridTemplateColumns = "1fr 1fr";
        document.getElementById("portfolio-galery").style.gridTemplateAreas = '"img1 img2 ""img3 img4 ""img5 img6 "';
    }
    else if(x == "Minimal Design"){
        classRemover();
        y.classList.add("selected-portfolio-btn");
        document.getElementById("portfolio-galery").innerHTML = '<img src='+portfolioPhoto1+' alt="photo1" id="photo1"><img src='+portfolioPhoto4+' alt="photo4" id="photo2">';
        for (let i = 1; i <= 2; i++){
            var idName = "photo" + i;
            var gridName = "img" + i;
            document.getElementById(idName).style.gridArea = gridName; 
        }
        document.getElementById("portfolio-galery").style.gridTemplateColumns = "1fr";
        document.getElementById("portfolio-galery").style.gridTemplateAreas = '"img1 ""img2"';
    }
    else if(x == "Colorful Design"){
        classRemover();
        y.classList.add("selected-portfolio-btn");
        document.getElementById("portfolio-galery").innerHTML = '<img src='+portfolioPhoto3+' alt="photo3" id="photo1"><img src='+portfolioPhoto5+' alt="photo5" id="photo2">';
        for (let i = 1; i <= 2; i++){
            var idName = "photo" + i;
            var gridName = "img" + i;
            document.getElementById(idName).style.gridArea = gridName; 
        }
        document.getElementById("portfolio-galery").style.gridTemplateColumns = "1fr";
        document.getElementById("portfolio-galery").style.gridTemplateAreas = '"img1 ""img2"';
    }
    else if(x == "Landing Page Design"){
        classRemover();
        y.classList.add("selected-portfolio-btn");
        document.getElementById("portfolio-galery").innerHTML = '<img src='+portfolioPhoto2+' alt="photo2" id="photo1"><img src='+portfolioPhoto6+' alt="photo6" id="photo2">';
        for (let i = 1; i <= 2; i++){
            var idName = "photo" + i;
            var gridName = "img" + i;
            document.getElementById(idName).style.gridArea = gridName; 
        }
        document.getElementById("portfolio-galery").style.gridTemplateColumns = "1fr";
        document.getElementById("portfolio-galery").style.gridTemplateAreas = '"img1 ""img2"';
    }
    else if(x == "Mobile Apps Design"){
        classRemover();
        y.classList.add("selected-portfolio-btn");
        document.getElementById("portfolio-galery").innerHTML = '<img src='+portfolioPhoto3+' alt="photo3" id="photo1">';
        document.getElementById("photo1").style.gridArea = "img1"; 
        document.getElementById("portfolio-galery").style.gridTemplateColumns = "1fr";
        document.getElementById("portfolio-galery").style.gridTemplateAreas = '"img1 "';
    }
}

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

let header = document.getElementsByTagName("header")[0];
let navMenu = header.lastElementChild;

window.addEventListener('scroll',headerColor);
function headerColor(){
    if (window.innerWidth > 720) {
        if(window.scrollY > 300){
            for (let i = 0; i < 5; i++) {
                navMenu.firstElementChild.firstElementChild.children[i].firstElementChild.classList.add("scrolled-text");
            }
            header.classList.add("scrolled");
            navMenu.classList.remove("nav-background");
            navMenu.classList.add("nav-background-scrolled");
    
        } else {
            for (let i = 0; i < 5; i++) {
                navMenu.firstElementChild.firstElementChild.children[i].firstElementChild.classList.remove("scrolled-text");
            }
            header.classList.remove("scrolled");
            navMenu.classList.add("nav-background");
            navMenu.classList.remove("nav-background-scrolled");
    
        }
    }
}
portfolioPhotos(document.getElementsByClassName("selected-portfolio-btn")[0]);
headerColor();
function btnRotateF(e){
    if(e.style.transform == "rotate(90deg)"){
        e.classList.add("btn-rotate-2");
        setTimeout(function(){
            e.style.transform = "rotate(180deg)";
            e.classList.remove("btn-rotate-2");
        },1000);
    } else if(e.style.transform == "rotate(180deg)"){
        e.classList.add("btn-rotate-3");
        setTimeout(function(){
            e.style.transform = "rotate(270deg)";
            e.classList.remove("btn-rotate-3");
        },1000);
    } else if(e.style.transform == "rotate(270deg)"){
        e.classList.add("btn-rotate-4");
        setTimeout(function(){
            e.style.transform = "rotate(0deg)";
            e.classList.remove("btn-rotate-4");
        },1000);
    } else {
        e.classList.add("btn-rotate");
        setTimeout(function(){
            e.style.transform = "rotate(90deg)";
            e.classList.remove("btn-rotate");
        },1000);
    }
}