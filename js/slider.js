$(document).ready(function() {
	slideshow(3000);
    function slide(prev) {
        var slides = $('#slideshow li');
        var currElement = slides.filter('.current');
        var lastElement = slides.filter(':last');
        var firstElement = slides.filter(':first');
        var nextElement = (prev) ? currElement.prev() : currElement.next();

        if (prev) {
            if (firstElement.attr('class') == 'current')
                nextElement = lastElement;
        } else if (lastElement.attr('class') == 'current') {
            nextElement = firstElement;
        }

        fade(currElement, nextElement);
    }

    function fade(current, next) {
        if (true) {
            current.removeClass('current').find('img').css({
                'z-index': '5'
            });
            next.addClass('current').find('img').css({
                'opacity': '0',
                'z-index': '10'
            }).animate({
                opacity: 1
            }, 800, function() {
                current.find('img').css({
                    'z-index': '0'
                });
            });
        } else {
            current.removeClass('current').find('img').css({
                'z-index': '5'
            });
            next.addClass('current').find('img').css({
                'opacity': '0',
                'z-index': '10'
            }).animate({
                opacity: 1
            }, 800, function() {
                current.find('img').css({
                    'z-index': '0'
                });
            });
        }
    }

    function slideshow(time) {
        var idset = setInterval('slide()', time);
        $('#next').click(function() {
            slide();
            clearInterval(idset);
            idset = setInterval('slide()', time);
        });
        $('#prev').click(function() {
            slide(true);
            clearInterval(idset);
            idset = setInterval('slide()', time);
        });
    }
})
