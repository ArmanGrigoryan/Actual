import React from 'react';
import MenuItems from './MenuItems.js';

const RSMobileMenu = ({ menuOpen, headerFullWidth }) => {

	return (
		<div className={headerFullWidth ? "container-fluid relative" : "container relative"}>
			<div className={`mobile-menu-part ${menuOpen ? "open" : ""}`}>
				<div className="mobile-menu radius-12">
					<ul className="nav-menu">
						<MenuItems />
					</ul>
				</div>
			</div>
		</div>
	)
}

export default RSMobileMenu;