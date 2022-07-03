function onload() {
    placeholder_var = 0;
    console.log("set all variables.")
}
$(window).scroll(function () {
    if ($(window).scrollTop() >= 10) {
        $('.navbar-desktop').css('background','black');
        $('.navbar-desktop').css('opacity','80%');
    } else {
        $('.navbar-desktop').css('background','transparent');
    }
});