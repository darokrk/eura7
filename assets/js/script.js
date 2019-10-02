$(document).ready(function () {
    $(".first-button").on("click", function () {
        $(".animated-icon1").toggleClass("open");
    });
    $(".second-button").on("click", function () {
        $(".animated-icon2").toggleClass("open");
    });
    $(".third-button").on("click", function () {
        $(".animated-icon3").toggleClass("open");
    });

    $(".navbar-toggler").click(function () {
        $('.language-nav').toggleClass("d-none");
    });
});
