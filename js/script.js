let x = 2;
let y = 1;

function galeriaCall() {
    document.getElementById("chicken1").style.opacity = "1";
    document.getElementById("chicken2").style.opacity = "0";
    document.getElementById("chicken3").style.opacity = "0";
    setTimeout(opacityClear, 4000);
    setInterval(galeria, 4000);
    // setInterval(navChange, 1);
}

function galeria() {
    document.getElementById("chicken" + x).className = "big-photo";
    document.getElementById("chicken" + y).className = "big-photo";
    if(x === 1){
        y = 3;
    } else {
        y = x - 1
    }
    document.getElementById("chicken" + x).style.opacity = "1";
    document.getElementById("chicken" + y).style.opacity = "0";
    document.getElementById("chicken" + x).classList.add("fade-in");
    document.getElementById("chicken" + y).classList.add("fade-out");
    if(x < 3){
        x++;
    } else {
        x = 1;
    }
}

let g;

window.addEventListener('scroll', () => {

    const navy = document.getElementsByClassName("nav-item");
    g = scrollY;
    if(g < 120 && document.getElementById("nav-logo").className === "fade-in-fast"){
        document.getElementById("nav-logo").style.opacity = "0";
        document.getElementById("nav-logo").className = "fade-out-fast";
        console.log("bbbbbbbbb");
    }
    if(g > 120 && document.getElementById("nav-logo").className === "fade-out-fast"){
        document.getElementById("nav-logo").style.opacity = "1";
        document.getElementById("nav-logo").style.display = "block";
        document.getElementById("nav-logo").className = "fade-in-fast";
        console.log("aaaaaaaa");
    }
    if(g < 650){
        for(let i = 0; i < navy.length; i++) {
            navy[i].className = "nav-item";
        }
        navy[0].classList.add("a-chosen");
    }
    if(g > 650 && g < 1350){
        for(let i = 0; i < navy.length; i++) {
            navy[i].className = "nav-item";
        }
        navy[1].classList.add("a-chosen");
    }
    if(g > 1350 && g < 1900){
        for(let i = 0; i < navy.length; i++) {
            navy[i].className = "nav-item";
        }
        navy[2].classList.add("a-chosen");
    }
    if(g > 1900 && g < 3860){
        for(let i = 0; i < navy.length; i++) {
            navy[i].className = "nav-item";
        }
        navy[4].classList.add("a-chosen");
    }
    if(g > 3860){
        for(let i = 0; i < navy.length; i++) {
            navy[i].className = "nav-item";
        }
        navy[5].classList.add("a-chosen");
    }
})

function opacityClear() {
    document.getElementById("chicken1").style.opacity = "0";
}
window.onload = galeriaCall();
