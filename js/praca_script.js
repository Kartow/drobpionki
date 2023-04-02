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
})