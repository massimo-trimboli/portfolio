let footerCodeAcceuil = 
`
    <div class="liens">
                <h1>Mes lien(s):</h1>
                <nav>
                    <a href="https://www.linkedin.com/in/trimboli-massimo/"><img src="https://s2.svgbox.net/social.svg?ic=linkedin&color=fff" width="40" height="40" class="linkedin"></a>
                    <a href="https://massimo-trimboli.itch.io/"><img src="img/itch.svg" width="55" height="55"></a>
                    <a href="https://github.com/massimo-trimboli"><img src="https://s2.svgbox.net/social.svg?ic=github&color=fff" width="40" height="40" class="github"></a>
                    <a href="https://www.youtube.com/@m4c4_"><img src="https://s2.svgbox.net/social.svg?ic=youtube&color=fff" width="55" height="55"></a>
                    <a href="pdf.htm" class="cv"><p class="cv">CV</p></a>
                </nav>
                <p class="copyright">© Massimo Trimboli 2025</p>
            </div>
`;


let footerCode = 
`
    <div class="liens">
                <h1>Mes lien(s):</h1>
                <nav>
                    <a href="https://www.linkedin.com/in/trimboli-massimo/"><img src="https://s2.svgbox.net/social.svg?ic=linkedin&color=fff" width="40" height="40" class="linkedin"></a>
                    <a href="https://massimo-trimboli.itch.io/"><img src="../img/itch.svg" width="55" height="55"></a>
                    <a href="https://github.com/massimo-trimboli"><img src="https://s2.svgbox.net/social.svg?ic=github&color=fff" width="40" height="40" class="github"></a>
                    <a href="https://www.youtube.com/@m4c4_"><img src="https://s2.svgbox.net/social.svg?ic=youtube&color=fff" width="55" height="55"></a>
                    <a href="../pdf.htm" class="cv"><p class="cv">CV</p></a>
                </nav>
                <p class="copyright">© Massimo Trimboli 2025</p>
            </div>
`;

let footer;

//si dans page acceuil
if(document.querySelector("footer") != null){
    footer = document.querySelector("footer");

    footer.innerHTML = footerCodeAcceuil;
} else {
    footer = document.createElement("footer")

    footer.innerHTML = footerCode;
    document.body.append(footer);
}