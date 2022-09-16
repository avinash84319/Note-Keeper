import React from "react";
import { createModuleResolutionCache } from "typescript";

var CurrentYear = new Date().getFullYear();
function Footer() {
return <footer><p>Copyright {CurrentYear}</p></footer>
}

export default Footer;