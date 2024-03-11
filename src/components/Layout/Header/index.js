import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import RSMobileMenu from './RSMobileMenu';
import normalLogo from 'media/logo/logo-light.png';
import darkLogo from 'media/logo/logo-dark.png';

const Header = (props) => {
	const { parentMenu } = props;
	const [menuOpen, setMenuOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 100 && window.innerWidth > 991) setIsVisible(true);
			else setIsVisible(false);
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, [isVisible]);

	return (
		<div className={'full-width-header home8-style4 main-home'}>
			<header id="rs-header" className='rs-header'>

				<div className={`menu-area menu-sticky ${isVisible ? 'sticky' : ''}`}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-3 pl-30">
								<div className="logo-area hidden-md">
									<Link to="/">
										<img loading="lazy" 
											src={normalLogo} 
											alt="" 
											width={250} 
											height={70} 
											className="normal-logo" 
										/>
										<img loading="lazy" className="sticky-logo" width={250} height={70} src={darkLogo} alt="" />
									</Link>
								</div>
							</div>
							<div className="col-lg-9 text-end flex-grow">
								<div className="rs-menu-area">
									<div className="main-menu">
										<div className="mobile-menu md-display-flex">
											<Link to="/" className="pl-30 mobile-normal-logo">
												<img loading="lazy" 
													src={normalLogo} 
													alt="" 
													width={220} 
													height={70} 
													className="normal-logo" 
												/>
											</Link>
											<Link to="/" className="mobile-sticky-logo">
												<img loading="lazy" 
													src={darkLogo} 
													alt="logo" 
													width={220} 
													height={70} 
													className="normal-logo" 
												/>
											</Link>
											<span className="rs-menu-toggle pl-10 pr-10 mr-20" onClick={() => {
												setMenuOpen(!menuOpen)
											}}>
												<i className="fa fa-bars"></i>
											</span>
										</div>
										<nav className="rs-menu hidden-md">
											<ul className="nav-menu">
												<MenuItems />
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<RSMobileMenu
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
					parentMenu={parentMenu}
				/>
				<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
			</header>
		</div>
	);
}

export default Header;