AOS.init();

$(document).ready(function () {
    var floatingButton = $('.btn-floating');

    $(window).scroll(function () {
        var homeSection = $('#home');

        if (homeSection.has(floatingButton).length > 0) {
            floatingButton.removeClass('d-none');
        } else {
            floatingButton.addClass('d-none');
        }
    });
});

function toggleStylesheet() {
    var styleSheetLink = document.getElementById('styleSheetLink');
    var light = $('.icon-light');
    var night = $('.icon-night');
    var lightModeButton = document.getElementById('lightModeButton');
    var body = $('body');

    body.addClass('loading');

    setTimeout(function () { 
        body.removeClass('loading');
        if (lightModeButton.getAttribute('data-value') === 'light') {
            styleSheetLink.href = 'assets/css/main.css';
            light.removeClass('d-none');
            night.addClass('d-none');
            lightModeButton.setAttribute('data-value', 'dark');
        } else {
            styleSheetLink.href = 'assets/css/dark.css';
            night.removeClass('d-none');
            light.addClass('d-none');
            lightModeButton.setAttribute('data-value', 'light');
        }
    }, 2000);
}

var swiper = new Swiper(".portfolioSwape", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".button_next",
        prevEl: ".button_prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});