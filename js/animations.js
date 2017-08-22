//leading scrollreveal script
window.sr = ScrollReveal();

//using selectors to point a different elements in the html and adding animations
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal ('.stage_image_left', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal ('.showcase_text', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

sr.reveal ('.stage-btn', {
    duration: 2000,
    origin: 'bottom',
    delay: 2000
});

sr.reveal ('#testimonios div', {
    duration: 2000,
    origin: 'bottom'
});

sr.reveal ('.info-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});

sr.reveal ('.info-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});

$(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});