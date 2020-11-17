const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {  
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }else{
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s`;  
            } 
        });
        burger.classList.toggle('toggle');
    }); 
} 
 
navSlide();

function smoothScroll(target,duration){
    var target = document.querySelector(target); 
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    
    
    function animation(currentTime){
       if (startTime === null) startTime = currentTime;
       var timeElapsed = currentTime - startTime;
       var run = ease(timeElapsed, startPosition,distance,duration); 
       window.scrollTo(0,run);
       if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };
    requestAnimationFrame(animation);  
}


    var homeSmoothButton = document.querySelector('.home');
    var aboutSmoothButton = document.querySelector('.about');
    var contactSmoothButton = document.querySelector('.contact');
   

    homeSmoothButton.addEventListener('click', function() {  
        smoothScroll('.header-container',1000); 
    });

    aboutSmoothButton.addEventListener('click', function() {  
        smoothScroll('.about-page',1000); 

    });
    contactSmoothButton.addEventListener('click', function() { 
        smoothScroll('.contact-page',1000); 
    });



 