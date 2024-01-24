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

    // Tambahkan class "loading" ke body
    body.addClass('loading');

    setTimeout(function () {
        // Hapus class "loading" dari body setelah 2 detik
        body.removeClass('loading');
        if (lightModeButton.getAttribute('data-value') === 'light') {
            styleSheetLink.href = 'assets/css/light.css';
            light.removeClass('d-none');
            night.addClass('d-none');
            lightModeButton.setAttribute('data-value', 'dark');
        } else {
            styleSheetLink.href = 'assets/css/main.css';
            night.removeClass('d-none');
            light.addClass('d-none');
            lightModeButton.setAttribute('data-value', 'light');
        }
    }, 2000);
}
