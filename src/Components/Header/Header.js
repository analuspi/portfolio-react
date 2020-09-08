import React from 'react'

const Header = () => {
    return (
        <>
        <div className="header-logo">
            <img alt=""/>
        </div>
        <button className="header-toogle" aria-label="toggle navigation">
            <span className="header-hamburger" />
        </button>
        <nav className="header-nav">
            <ul className="header-nav__list">
                <li className="header-nav__item"><a href="#" className="header-nav__link">Home</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">My Services</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">About me</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">My Work</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Header
