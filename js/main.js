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

//even better kind words slideshow
        let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

});