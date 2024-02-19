import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItems = () => {
    const location = useLocation();

    return (
        <>
            <li className={location.pathname === "/" ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/"> Գլխավոր </Link>
            </li>
            <li className={location.pathname.includes("/course") ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/course"> Դասընթացներ </Link>
            </li>
            
            <li className={location.pathname.includes("/event") ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/event"> Իվենթներ </Link>
            </li>
            <li className={location.pathname.includes("/about") ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/about"> Մեր մասին </Link>
            </li>
            <li className={location.pathname.includes("/contact") ? 'menu-item-has-children current-menu-item' : 'menu-item-has-children'}>
                <Link to="/contact"> Կապ </Link>
            </li>
        </>
    );
}

export default MenuItems;