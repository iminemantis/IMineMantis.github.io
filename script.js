//cookies

function set(Cname, Cvalue, Cdays) {
    const d = new Date();
    d.setTime(d.getTime() + (Cdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = Cname + "=" + Cvalue + ";" + expires + ";path=/"
}

function get(Cname) {
    let name = Cname + "=";
    let decoded = decodeURIComponent(document.cookie);
    let ca = decoded.split(";");
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return "";
}

function checkStyle() {
    let num = get("style");
    switch(num) {
        case "1":
            break;
        case "2":
            document.getElementById("style").setAttribute("href","/css/light.css");

            document.getElementById("b01").checked = false;
            break;
        default:
            set("style",1, Infinity)
            document.getElementById("style").setAttribute("href","/css/dark.css");
            break
    }
}

function toggleTheme() {
    let num = get("style");
    switch(num) {
        case "1":
            set("style",2, Infinity);
            document.getElementById("style").setAttribute("href","/css/light.css");
            break;
        case "2":
            set("style",1, Infinity);
            document.getElementById("style").setAttribute("href","/css/dark.css");
            break;
    }
}

window.addEventListener("load",checkStyle)




//part importer

var headerHTML = "";

fetch("/parts/parts.html").then(
    async function(response) {
        headerHTML = await response.text();
        addHeader();
    }
)

function addHeader() {
    var headers = document.getElementsByClassName("header");
    for (let i=0;i<headers.length;i++) {

        var headstart = false;
        var word="";
        var output="";

        for (let j=0; j<headerHTML.length;j++) {

            
            if (headerHTML[j].match(/\s/) ) {
                if (word == "headend") {
                    headers[i].innerHTML = output;
                    headstart = false;
                    j = Infinity;
                }

                if (headstart == true) {
                    output += word;
                    output += headerHTML[j];
                }

                if (word == "headstart") {
                    headstart = true;
                }


                word = "";

            } else{
                word += headerHTML[j]
            }
            
        }

    }
}