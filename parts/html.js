class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        
        <div id="header">
            <div id="main">
                <button class="openbtn" onclick="openNav()">&#9776</button>
            </div>
            <div class="text">
                <a href="#">link1</a>
                <a href="#">link2</a>
                <a href="#">link3</a>
            </div>
        </div>

        `
    }
}
customElements.define("my-header", Header);


class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        
        <div id="footer">
            <p>test</p>
        </div>

        `
    }
}
customElements.define("my-footer", Footer);


class Sidebar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        
        <div id="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <div class="text">
                <a href="#">link1</a>
                <a href="#">link2</a>
                <a href="#">link3</a>
                <a href="#">link4</a>
                <a href="#">link5</a>
            </div>
        </div>

        `
    }
}
customElements.define("my-sidebar", Sidebar);