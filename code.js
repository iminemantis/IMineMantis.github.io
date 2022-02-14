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

// comparison slider js

function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }
    function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        var t = (window.innerWidth / 100) * 5;
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + t + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchend", slideFinish);
        function slideReady(e) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*the slider is now clicked and ready to move:*/
            clicked = 1;
            /*execute a function when the slider is moved:*/
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
        }
        function slideMove(e) {
            var pos;
            /*if the slider is no longer clicked, exit this function:*/
            if (clicked == 0) return false;
            /*get the cursor's x position:*/
            pos = getCursorPos(e)
            /*prevent the slider from being positioned outside the image:*/
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /*execute a function that will resize the overlay image according to the cursor:*/
            slide(pos);
        }
        function getCursorPos(e) {
            var a, x = 0;
            e = (e.changedTouches) ? e.changedTouches[0] : e;
            /*get the x positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x coordinate, relative to the image:*/
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
        }
        function slide(x) {
            /*resize the image:*/
            img.style.width = x + "px";
            /*position the slider:*/
            var t = (window.innerWidth / 100) * 5;
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + t + "px";
        }
    }
}