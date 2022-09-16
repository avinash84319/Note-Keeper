import React from "react";

var CurrentYear = new Date().getFullYear;
function Footer() {
return <p>Copyright {CurrentYear}</p>
}

export default Footer;