import "bootstrap";
import "animate.css";
import "./styles";
import SmoothScroll from "smooth-scroll";
import WOW from "wow.js";
import Header from "./header.js";
import Servicios from "./Servicios.js";
import TablaPrecios from "./Precios";
import Testimonios from "./testimonios";
import Contact from "./contact";
import Footer from "./footer";
//wow
new WOW().init();

// SMOOTH SCROLL
new SmoothScroll('a[href*="#"]');

const App = Header + Servicios + TablaPrecios + Testimonios + Contact + Footer;

document.getElementById("App").innerHTML = App;
