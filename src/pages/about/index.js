import React from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
import Newsletter from 'comp/Common/Newsletter';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import AboutMain from './AboutMain';
import footerLogo from 'media/logo/logo-light.png';
import bannerbg from 'media/slider/bg-3.jpg';
import { useFade } from 'hooks';
import SEO from 'comp/SEO';

const About = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Partner | Ակտուալ - Մեր մասին'
                description='Ծանոթացեք Ակտուալի պատմությանը, առաքելությանը, ուսումնական կենտրոնի հեռանկարներին և Ակտուալ թիմին։ Դիտեք Ակտուալի արխիվը Եվ կատարեք շրջագայություն։'
            />
            <Header parentMenu='home' />
            <SiteBreadcrumb
                pageTitle="Մեր մասին"
                pageName=""
                breadcrumbsImg={bannerbg}
            />
            <AboutMain />
            <Newsletter />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
        </div>
    );
}

export default About;