function delay (URL) {
    setTimeout( function() { window.location = URL }, 300 );
}

function switchboardbutton() {
    document.getElementById("background").style.backgroundImage= "url('images/switchbutton/click.gif')"
    setTimeout( function() { document.getElementById("body").style.backgroundImage= "url('')" }, 900 );
    setTimeout( function() { window.location = "https://www.justgiving.com/page/jay0dyer-switchboard?utm_medium=FR&utm_source=CL"}, 900 );
}

class nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footerDiv">
            <div class="containerIntro">
                <h1>Hello,</h1>
                <h2> having trouble navigating my website?</h2>
            </div>

            <p> Explore the image by hovering your mouse over different elements to highlight them.
                Clicking any highlighted element will take you to a related page.
                For an overview, use the navigation tree below. </p>


                <ul><a href="index.html"> Homepage </a>
                <li><a href="art.html">  └ Art </a></li>
                <li><a href="aboutMe.html">  └ About me </a></li>
                  <li><a href="fundraising.html">  └ Charity </a></li>
                <li><a href="contact.html">  └ Contact </a>
                    <ul>
                    <li><a href="mailto:jay0dyer@gmail.com"> └ Mail to jay0dyer@gmail.com</a></li>
                        <li><a href="https://github.com/jay0dyer"> └ My github</a></li>
                        <li><a href="https://coff.ee/jay0dyer"> └ buy me a coffee</a></li>
                    </ul>
                </li>
            </ul>
            </div>
      </footer>
        `
    }
}

customElements.define("nav-footer", nav)