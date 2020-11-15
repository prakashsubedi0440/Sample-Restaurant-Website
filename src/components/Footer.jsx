import React from "react";

function Footer() {
    const d = new Date();
    const currentYear = d.getFullYear();
    return(
        <footer>
            <p>Follow us:</p>
            <i class="fontBrandIcon fab fa-facebook fa-2x"></i>
            <i class="fontBrandIcon fab fa-instagram fa-2x"></i>
            <i class="fontBrandIcon fab fa-twitter fa-2x"></i>
            <p>© {currentYear}. <em>Ravintola Rakas</em></p>
        </footer>
    );
}

export default Footer;