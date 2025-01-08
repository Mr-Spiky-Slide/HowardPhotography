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


});