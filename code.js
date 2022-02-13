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

//change image when hovering over it
function changeImg1(num) {
    switch(num) {
        case 1:
            document.getElementById("one1").classList.remove("hidden")
            document.getElementById("two1").classList.add("hidden")
            document.getElementById("three1").classList.add("hidden")
            document.getElementById("four1").classList.add("hidden")
            break;
        case 2:
            document.getElementById("one1").classList.add("hidden")
            document.getElementById("two1").classList.remove("hidden")
            document.getElementById("three1").classList.add("hidden")
            document.getElementById("four1").classList.add("hidden")
            break;
        case 3:
            document.getElementById("one1").classList.add("hidden")
            document.getElementById("two1").classList.add("hidden")
            document.getElementById("three1").classList.remove("hidden")
            document.getElementById("four1").classList.add("hidden")
            break;
        case 4:
            document.getElementById("one1").classList.add("hidden")
            document.getElementById("two1").classList.add("hidden")
            document.getElementById("three1").classList.add("hidden")
            document.getElementById("four1").classList.remove("hidden")
            break
            
    }

}

function changeImg2(num) {
    switch(num) {
        case 1:
            document.getElementById("one2").classList.remove("hidden")
            document.getElementById("two2").classList.add("hidden")
            document.getElementById("three2").classList.add("hidden")
            document.getElementById("four2").classList.add("hidden")
            break;
        case 2:
            document.getElementById("one2").classList.add("hidden")
            document.getElementById("two2").classList.remove("hidden")
            document.getElementById("three2").classList.add("hidden")
            document.getElementById("four2").classList.add("hidden")
            break;
        case 3:
            document.getElementById("one2").classList.add("hidden")
            document.getElementById("two2").classList.add("hidden")
            document.getElementById("three2").classList.remove("hidden")
            document.getElementById("four2").classList.add("hidden")
            break;
        case 4:
            document.getElementById("one2").classList.add("hidden")
            document.getElementById("two2").classList.add("hidden")
            document.getElementById("three2").classList.add("hidden")
            document.getElementById("four2").classList.remove("hidden")
            break
            
    }

}