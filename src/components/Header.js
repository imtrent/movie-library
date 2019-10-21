import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Search from './Search';

const Header = props => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [stopScroll, setStopScroll] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
        setStopScroll(!stopScroll);
    };

    const handleRouteChange = () => {
        setMobileMenu(false);
        setStopScroll(false);
    };

    const checkDimensions = () => {
        if (window.innerWidth > 1024) {
            setMobileMenu(false);
            setStopScroll(false);
        }
    };

    window.addEventListener('resize', checkDimensions);

    if (mobileMenu) {
        document.querySelector('html').classList.add('mobile-active');
    } else {
        document.querySelector('html').classList.remove('mobile-active');
    }

    if (stopScroll) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = '';
    }

    return (
        <div>
            <div className="mobile-menu">
                <div className="mobile-menu-wrapper">
                    <Navigation routeChange={handleRouteChange} />
                    <Search routeChange={handleRouteChange} />
                </div>
            </div>
            <header>
                <div className="header-content">
                    <Link to="/">
                        <h1>
                            <span role="img" aria-label="Popcorn">
                                🍿
                            </span>
                            MOVIAC
                        </h1>
                    </Link>
                    <div className="right">
                        <Navigation routeChange={handleRouteChange} />
                        <Search routeChange={handleRouteChange} />
                    </div>
                    <div
                        className={`hamburger${mobileMenu ? ' active' : ''}`}
                        onClick={handleMobileMenu}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
