$(function(){
    //This makes the testamonials slideshow
    function Divs() {
        var divs= $('#parent div'),
            now = divs.filter(':visible'),
            next = now.next().length ? now.next() : divs.first(),
            speed = 1000;
    
        now.fadeOut(speed);
        next.fadeIn(speed);
    }
    
    $(function () {
        setInterval(Divs, 14000);
    });


    //Better kind words sideshow
    let currentSlide = 0; 
        const slides = document.querySelectorAll('.kind-words-slide');

        function moveSlide(direction) {
            slides[currentSlide].style.transform = `translateX(${100 * currentSlide}%)`;
            currentSlide = (currentSlide + direction + slides.length) % slides.length;
            slides[currentSlide].style.transform = `translateX(0)`;
        }

        setInterval(() => moveSlide(1), 5000); // Auto-slide every 5 seconds


});