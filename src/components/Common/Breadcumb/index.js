import React from 'react';
import { Link } from 'react-router-dom';

const SiteBreadcrumb = (props) => {
	const { breadcrumbsClass, innerClass, titleClass, pageTitle, parentCategory, pageCategory, pageName, breadcrumbsImg } = props;

	return (
		<div className={breadcrumbsClass ? breadcrumbsClass : 'rs-breadcrumbs breadcrumbs-overlay'}>
			<div className="breadcrumbs-img" data-image={breadcrumbsImg} style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.35) ), url(${breadcrumbsImg})`
			}} />
			<div className={innerClass ? innerClass : 'breadcrumbs-text white-color md-mt-40'}>
				<h1 className={titleClass ? titleClass : 'page-title'}>{pageTitle ? pageTitle : 'Breadcrumbs'}</h1>
				{
					pageName ?
					<ul>
						<li>
							<Link to="/" className="active">{parentCategory ? parentCategory : 'Գլխավոր'}</Link>
						</li>
						{pageCategory ? 
							<>
								<li>
									<Link to="/" className="active">{pageCategory ? pageCategory : 'Category'}</Link>
								</li> 
								<li>{pageName ? pageName : 'Page Name'}</li>
							</> : <li>{pageName ? pageName : 'Page Name'}</li>							
						}
					</ul> :
					null
				}
			</div>
		</div>
	);
}

export default SiteBreadcrumb;