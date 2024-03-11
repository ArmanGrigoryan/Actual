import React from 'react';

const SiteBreadcrumb = (props) => {
	const { breadcrumbsClass, innerClass, titleClass, pageTitle, breadcrumbsImg } = props;

	return (
		<div className={breadcrumbsClass ? breadcrumbsClass : 'rs-breadcrumbs breadcrumbs-overlay'}>
			<div className="breadcrumbs-img" data-image={breadcrumbsImg} style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.35) ), url(${breadcrumbsImg})`
			}} />
			<div className={innerClass ? innerClass : 'breadcrumbs-text white-color md-mt-40'}>
				<h1 className={titleClass ? titleClass : 'page-title'}>{pageTitle ? pageTitle : 'Breadcrumbs'}</h1>
			</div>
		</div>
	);
}

export default SiteBreadcrumb;