import React from 'react';
import CourseDetailsPart from './CourseDetailsPart';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
import Newsletter from 'comp/Common/Newsletter';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import SEO from 'comp/SEO';
import ScrollToTop from 'comp/Common/ScrollTop';
import footerLogo from 'media/logo/logo-light.png';
import bannerbg from 'media/slider/main-home/homepage-bg.jpg';
import { useFade } from 'hooks';

const CourseSingle = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Agency | Ակտուալ - Դասընթացներ'
                description='Ծանոթացեք դասընթացի բնութագրին, ստացեք տեղեկատվություն դասընթացավարի, անցկացման ժամերի մասին Եվ գրանցվեք։'
            />
            <Header parentMenu='course' />
            <SiteBreadcrumb
                pageTitle="Ընդհանուր բնութագիր"
                pageName=""
                breadcrumbsImg={bannerbg}
            />
            <CourseDetailsPart />
			<ScrollToTop scrollClassName="scrollup orange-color" />
            <Newsletter
                sectionClass="rs-newsletter style1 gray-bg orange-color mb--90 sm-mb-0 sm-pb-20"
                titleClass="title mb-0 white-color"
            />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
        </div>
    );
}

export default CourseSingle;