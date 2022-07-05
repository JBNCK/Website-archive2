function onload() {
    placeholder_var = 0;
    menu_var = 0;
    console.log("set all variables.")
}
$(window).scroll(function () {
    if ($(window).scrollTop() >= 8) {
        $('.navbar-desktop').css('background','black');
        $('.navbar-desktop').css('opacity','90%');
        $('.navbar-mobile').css('background','black');
        $('.navbar-mobile').css('opacity','90%');
    } else {
        $('.navbar-desktop').css('background','transparent');
        $('.navbar-mobile').css('background','transparent');
    }
});
function menu() {
    if (placeholder_var == 0) {
        var element = document.getElementById("mobile-menu-id");
        element.setAttribute("style", "padding: 10px;");
        element.setAttribute("style", "padding-top: 240px;");
        var element = document.getElementById("menu-content-id");
        element.setAttribute("style", "top: -200px;")
        setTimeout( () =>{
            element.setAttribute("style", "visibility: visible;")
        }, 250);
        placeholder_var = 1;
    }
    else {
        var element = document.getElementById("mobile-menu-id");
        element.setAttribute("style", "padding: 0;");
        element.setAttribute("style", "padding-top: 0;");
        var element = document.getElementById("menu-content-id");
        element.setAttribute("style", "top: -200px;")
        setTimeout( () =>{
            element.setAttribute("style", "display: none;")
        }, 100);
        placeholder_var = 0;
    }
}
function close_bottom_banner() {
    var element = document.getElementById("bottom-banner-id");
    element.setAttribute("style", "display: none;");
}