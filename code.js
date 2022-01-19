//header change size on scroll
window.onscroll = function() {headerSize()};

function headerSize() {
    var header = document.getElementById("header");
    if (window.pageYOffset > 0) {
        header.classList.add("smaller");

        var items = document.getElementsByClassName("links")
        for (var i = 0; i < items.length; i++) {
            items[i].classList.add("smaller");
        }

        document.getElementById("home-link").classList.add("smaller")
    } else {
        header.classList.remove("smaller")

        var items = document.getElementsByClassName("links")
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove("smaller");
        }

        document.getElementById("home-link").classList.remove("smaller")
    }
}


//change about text when hovering on icon
function changeText(num) {
    switch (num) {
        case 1:
            document.getElementById("blender").classList.remove("hidden")
            document.getElementById("about-me").classList.add("hidden")
            document.getElementById("natron").classList.add("hidden")
            break;
        case 2:
            document.getElementById("blender").classList.add("hidden")
            document.getElementById("about-me").classList.remove("hidden")
            document.getElementById("natron").classList.add("hidden")
            break;
        case 3:
            document.getElementById("blender").classList.add("hidden")
            document.getElementById("about-me").classList.add("hidden")
            document.getElementById("natron").classList.remove("hidden")
            break;
    }
}