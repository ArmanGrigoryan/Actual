import React from 'react';
import EventsSection from './EventsSection';
import SEO from 'comp/SEO';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
import Newsletter from 'comp/Common/Newsletter';
import ScrollToTop from 'comp/Common/ScrollTop';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import footerLogo from 'media/logo/logo-light.png';
import bannerbg from 'media/slider/bg-4.jpg';
import { useFade } from 'hooks';

const Event = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Partner | Ակտուալ Իվենթներ | Ակտուալ իրադարձություններ'
                description='Ծանոթացեք Ակտուալի իվենթներին։ Ստացեք տեղեկատվություն նմանը չունեցող Եվ յուրօրինակ The Master-ի, The voice of HR-ի հետ։'
            />
            <Header parentMenu='pages' />
            <SiteBreadcrumb
                pageTitle="Ակտուալ Իվենթներ"
                pageName=""
                breadcrumbsImg={bannerbg}
            />
            <EventsSection />
            <Newsletter />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            <ScrollToTop />
        </div>
    );
}

export default Event;