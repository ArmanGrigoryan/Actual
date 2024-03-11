import React from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
import ScrollToTop from 'comp/Common/ScrollTop';
import Newsletter from 'comp/Common/Newsletter';
import ContactMain from './ContactMain';
import footerLogo from 'media/logo/logo-light.png';
import { useFade } from 'hooks';
import SEO from 'comp/SEO';

const env = import.meta.env;

const Contact = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title={`${env.VITE_APP_APPLICATION_TITLE} | Ակտուալ - Մեր մասին`}
                description={`Կապ մեզ հետ - Բաժանորդագրվեք Ակտուալի ալիքին հետադարձ կապի համար կամ այցելեք մեզ՝ ${env.VITE_APP_CONTACT_ADDRESS}, ${env.VITE_APP_CONTACT_PHONE}։`}
            />
            <Header parentMenu='contact' />
            <ContactMain />
            <Newsletter containerClass="container wider  xs-px-10 sm-px-30" />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            <ScrollToTop />
        </div>
    );
}

export default Contact;