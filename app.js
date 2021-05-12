
const home = document.getElementById("home");
const homeArea = document.getElementById("home-area");

const about = document.getElementById("about");
const aboutArea = document.getElementById("about-area");

const services = document.getElementById("service");
const serviceArea = document.getElementById("service-area");

const contact = document.getElementById("contact")
const contactArea = document.getElementById("contact-area")

about.addEventListener("click", function(){
    aboutArea.style="display:block;"
    homeArea.style="display:none;"
    serviceArea.style="display:none;"
    contactArea.style="display:none;"
    
});

home.addEventListener("click", function(){
    aboutArea.style="display:none;"
    serviceArea.style="display:none;"
    contactArea.style="display:none"
    homeArea.style="display:block;"
});

services.addEventListener("click", function(){
    aboutArea.style="display:none;"
    homeArea.style="display:none;"
    contactArea.style="display:none"
    serviceArea.style="display:block;"
});

contact.addEventListener("click", function(){
    contactArea.style="display:block"
    aboutArea.style="display:none;"
    serviceArea.style="display:none;"
    homeArea.style="display:none;"
});

// sticky header control 
window.onscroll = function(){
    scrollFunction()
};
function scrollFunction(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>50){
     
        document.querySelector('header').style="background-color:white;transition:1s ease;border-bottom:1px solid black";
        document.querySelector('.menu>a').style="color:black;border-top:1px solid black";
        document.querySelector('#about').style="color:black;border-top:1px solid black";
        document.querySelector('#service').style="color:black;border-top:1px solid black";
        document.querySelector('#contact').style="color:black;border-top:1px solid black";
    }
    else{
        document.querySelector('header').style="background-color:transparent;transition:1s ease;border-bottom:2px solid darkgreen";
        
    }
};


// _______________________________¿

// toggler¿

document.querySelector(".trigger").addEventListener("click",function(){
    const toggler = document.querySelector(".menu");
toggler.classList.toggle("myStyle");
});