import React, { useState } from "react";
import "bulma/css/bulma.css"; // Import Bulma CSS
import "./Navbar.css"; // Import custom CSS

const Navbar = () => {
    const [isMenuActive, setMenuActive] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };

    const toggleSubMenu = (menu) => {
        if (activeSubMenu === menu) {
            setActiveSubMenu(null); // Collapse if the same menu is clicked
        } else {
            setActiveSubMenu(menu); // Open the clicked submenu
        }
    };

    return (
        <nav className="navbar is-light">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="/utils/logo.jpeg" alt="D7 Digital Logo" className="navbar-logo" />
                </a>
                <button
                    className={`navbar-burger ${isMenuActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded={isMenuActive}
                    onClick={toggleMenu}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" onClick={() => toggleSubMenu("photography")}>
                            Photography & Videos
                        </a>
                        <div className={`navbar-dropdown ${activeSubMenu === "photography" ? 'is-active' : ''}`}>
                            <a className="navbar-item">Wedding shoot</a>
                            <a className="navbar-item">Candid shoot</a>
                            <a className="navbar-item">Outdoor Wedding Shoot</a>
                            <a className="navbar-item">Baby shoot</a>
                            <a className="navbar-item">Commercial shoot</a>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" onClick={() => toggleSubMenu("design")}>
                            Design Studio
                        </a>
                        <div className={`navbar-dropdown ${activeSubMenu === "design" ? 'is-active' : ''}`}>
                            <a className="navbar-item">Brand Logo design</a>
                            <a className="navbar-item">Business Card design</a>
                            <a className="navbar-item">Flyers design</a>
                            <a className="navbar-item">Poster design</a>
                            <a className="navbar-item">Sticker design</a>
                            <a className="navbar-item">Sign board design</a>
                            <a className="navbar-item">Invitation design</a>
                            <a className="navbar-item">Events welcome board design</a>
                            <a className="navbar-item">Photos editing</a>
                            <a className="navbar-item">Booklet design</a>
                            <a className="navbar-item">Product label design</a>
                            <a className="navbar-item">Product cover design</a>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" onClick={() => toggleSubMenu("marketing")}>
                            Social Media Marketing
                        </a>
                        <div className={`navbar-dropdown ${activeSubMenu === "marketing" ? 'is-active' : ''}`}>
                            <a className="navbar-item">Page creation</a>
                            <a className="navbar-item">Page management</a>
                            <a className="navbar-item">Business promotional posters</a>
                            <a className="navbar-item">Discount & offer posters</a>
                            <a className="navbar-item">Festival posters</a>
                            <a className="navbar-item">Motivational posters</a>
                            <a className="navbar-item">Unlimited bulk WhatsApp messages</a>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" onClick={() => toggleSubMenu("printing")}>
                            Printing
                        </a>
                        <div className={`navbar-dropdown ${activeSubMenu === "printing" ? 'is-active' : ''}`}>
                            <a className="navbar-item">Offset Printing</a>
                            <a className="navbar-item">Digital Printing</a>
                            <a className="navbar-item">Screen Printing</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
