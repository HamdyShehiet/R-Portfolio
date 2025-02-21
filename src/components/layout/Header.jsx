import { Link } from "react-router";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <header>
    <div className="container flex align-center">
        <div className="logo"><Link to="/">R</Link></div>
        <nav>
            <button className="menu-icon" onClick={()=> setIsOpen(!isOpen)}><img src="./icons/menu.webp" alt="Menu Icon" /></button>
            <ul className={`${ isOpen ? "openMenu" : "" }`}>
                <li ><a href="#home" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li> 
                <li><a href="#blog">Blog</a></li>
                <li><a href="#cotact">Contact</a></li>
            </ul>
        </nav>
    </div>
    </header>
    );
}

export default Header;