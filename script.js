const navSlide = ()  => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.naviagtion');
    const navLinks = document.querySelectorAll('.naviagtion li');
    const html = document.querySelector("html");

    burger.addEventListener('click' , () =>{
        // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";

            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });
        // Animate bar
        if(nav.style.transform == "translateX(0%)"){
            nav.style.transform = "translateX(100%)";
            html.style.overflowY = "visible";
        }
        else{
            nav.style.transform = "translateX(0%)";
            html.style.overflowY = "hidden";
        }
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
}
navSlide();