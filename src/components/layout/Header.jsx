
function Header() {
    return (
    <header>
    <div className="container">
        <div className="logo"><a href="index.html">R</a></div>
        <nav>
            <img className="menu-icon" src="/icons/menu.webp" alt="Menu Icon" />
            <ul>
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