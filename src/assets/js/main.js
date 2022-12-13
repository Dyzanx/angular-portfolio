'use sctrict'

window.addEventListener("load", () => {
    var headerButton = document.getElementById("header-responsive-icon");
    var headerLinks = document.getElementById("header-links");

    var headerLink1 = document.getElementById("header-link1");
    var headerLink2 = document.getElementById("header-link2");
    var headerLink3 = document.getElementById("header-link3");
    var headerLink4 = document.getElementById("header-link4");
    var headerLink5 = document.getElementById("header-link5");

    if(window.innerWidth <= 527){
        headerLinks.style.display = "none";
    }else{
        headerLinks.style.display = "block";
    }

    headerLink1.addEventListener('click', () => {
        if(window.innerWidth <= 527){
            headerLinks.style.display = "none";
        }
    });
    headerLink2.addEventListener('click', () => {
        if(window.innerWidth <= 527){
            headerLinks.style.display = "none";
        }
    });
    headerLink3.addEventListener('click', () => {
        if(window.innerWidth <= 527){
            headerLinks.style.display = "none";
        }
    });
    headerLink4.addEventListener('click', () => {
        if(window.innerWidth <= 527){
            headerLinks.style.display = "none";
        }
    });
    headerLink5.addEventListener('click', () => {
        if(window.innerWidth <= 527){
            headerLinks.style.display = "none";
        }
    });

    headerButton.addEventListener("click", () => {
        if(headerLinks.style.display == "none"){
            headerLinks.style.display = "block";
        }else{
            headerLinks.style.display = "none";
        }
    });
});