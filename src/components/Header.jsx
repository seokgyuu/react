import React, { useState } from "react";

const headerNav = [
    {
        title: "home",
        url: "#intro"
    },
    {
        title: "계산기",
        url: "#Cal",
        toggle: true // 계산기 링크에 toggle 속성 추가
    },
    {
        title: "기능3",
        url: "#site"
    },
    {
        title: "기능4",
        url: "#port"
    },
    {
        title: "chatbot",
        url: "#contact"
    }
];

const Header = ({ toggleCal }) => { // toggleCal props 추가
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">team2</a>
                </div>
                <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a 
                                    href={nav.url} 
                                    onClick={nav.toggle ? (e) => { e.preventDefault(); toggleCal(); } : undefined} // toggle이 true일 때만 toggleCal 호출
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
                    aria-expanded={show ? "true" : "false"}
                    role="button" 
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
