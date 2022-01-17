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