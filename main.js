function redirect_home() {
    window.location.href = "de/";
}

function onload() {
    console.log("setting variables")
    menu_expanded = 0;
    var element = document.getElementById("menu_content");
    element.style.opacity = "0";
}

$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $('.navbar').css('background','#191b24');
        $('.navbar_links_current').css('background-color','darkslateblue');
        $('.navbar_links_current').css('border','darkslateblue solid 10px');
        $('.navbar_links_current').css('color','white');
        $('.navbar').css('opacity','100%');
    } else {
        $('.navbar').css('background','transparent');
        $('.navbar_links_current').css('background-color','white');
        $('.navbar_links_current').css('border','white solid 10px');
        $('.navbar_links_current').css('color','black');
    }
});

function menu() {
    if (menu_expanded == 0) {
        var element = document.getElementById("menu")
        element.setAttribute("style", "height: 100vh;")
        var element = document.getElementById("menu_content")
        element.setAttribute("style", "height: 100vh;")
        element.setAttribute("style", "visibility: visible;")
        setTimeout( () =>{
            element.style.opacity = "1";
        }, 250);
        menu_expanded = 1;
    }
    else {
        var element = document.getElementById("menu_content")
        element.style.opacity = "0";
        element.setAttribute("style", "height: 0;")
        element.setAttribute("style", "visibility: hidden;")
        var element = document.getElementById("menu")
        setTimeout( () =>{
            element.setAttribute("style", "height: 0;")
        }, 250);
        menu_expanded = 0;
    }
}