import React, { useState } from "react";

const headerNav = [
    {
        title: "Cal",
        url: "#Cal",
        toggle: true 
    },
    {
        title: "Law",
        url: "#Law",
        toggle: true
    },
    {
        title: "chatbot",
        url: "#chatbot"
    }
];

const Header = ({ toggleCal, toggleLaw }) => {
    const [showCal, setShowCal] = useState(false);
    const [showLaw, setShowLaw] = useState(false);

    const handleToggleCal = (e) => {
        e.preventDefault();
        setShowCal(!showCal);
        toggleCal();
    };

    const handleToggleLaw = (e) => {
        e.preventDefault();
        setShowLaw(!showLaw);
        toggleLaw();
    };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">team2</a>
                </div>
                <nav className={`header__nav ${showCal || showLaw ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a 
                                    href={nav.url}
                                    onClick={nav.title === "Cal" ? handleToggleCal : nav.title === "Law" ? handleToggleLaw : undefined}
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={showCal || showLaw ? "true" : "false"}
                    role="button" 
                    tabIndex="0"
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
