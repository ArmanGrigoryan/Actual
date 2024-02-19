import React from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
import ScrollToTop from 'comp/Common/ScrollTop';
import Newsletter from 'comp/Common/Newsletter';
import ContactMain from './ContactMain';
import footerLogo from 'media/logo/logo-light.png';
import { useFade } from 'hooks';
import SEO from 'comp/SEO';

const Contact = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Agency | Ակտուալ - Մեր մասին'
                description='Կապ մեզ հետ - Բաժանորդագրվեք Ակտուալի ալիքին հետադարձ կապի համար կամ այցելեք մեզ՝ ք. Երևան, Խանջյան 19, (+374)44-30-30-28։'
            />
            <Header parentMenu='contact' />
            <ContactMain />
            <Newsletter
                sectionClass="rs-newsletter style1 orange-color event-bg mb--90 sm-mb-0 sm-pb-20"
                titleClass="title mb-0 white-color"
            />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            <ScrollToTop
                scrollClassName="scrollup orange-color"
            />
        </div>
    );
}

export default Contact;