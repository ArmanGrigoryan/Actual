import React from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
import Newsletter from 'comp/Common/Newsletter';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import ScrollToTop from 'comp/Common/ScrollTop';
import SEO from 'comp/SEO';
import Courses from './CoursesSection';
import { useFade } from 'hooks';
import footerLogo from 'media/logo/logo-light.png';
import bannerbg from 'media/slider/bg-2.jpg';

const env = import.meta.env;

const Course = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title={`${env.VITE_APP_APPLICATION_TITLE} | Ակտուալ - Դասընթացներ`}
                description='Ակտուալն իր ուսուցման ծառայություններն է առաջարկում բիզնես անգլերենի, մարդկային ռեսուրսների կառավարման, Excel-ի, կադրային գործավարության ոլորտներում, ինչպես սկսնակների, այնպես էլ խորացված մասնագետների համար։ Դարձեք վկայագրված մասնագետ:'
            />
            <Header parentMenu='course' />
            <SiteBreadcrumb
                pageTitle="Ակտուալ Դասընթացներ"
                pageName=""
                breadcrumbsImg={bannerbg}
            />
			<Courses />
			<ScrollToTop />
            <Newsletter containerClass="container wider md-max-w-unset pr-20 pl-20 xs-px-10" />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
        </div>
    );
}

export default Course;