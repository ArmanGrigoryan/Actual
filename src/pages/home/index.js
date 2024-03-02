import React from 'react';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
import Newsletter from 'comp/Common/Newsletter';
import HomeMain from './HomeMain';
import footerLogo from 'media/logo/logo-light.png';
import { useFade } from 'hooks';
import SEO from 'comp/SEO';

const env = import.meta.env;

const HomePage = () =>  {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title={`${env.VITE_APP_APPLICATION_TITLE} | Ակտուալ - Գլխավոր`}
                description='Գլխավոր էջ - Այցելեք Ակտուալ` Հայաստանում նմանը չունեցող ուսումնական կենտրոն ծառայությունների ոլորտում: Եթե չունեք փորձ, պարզապես գնեք այն:'
            />
            <Header parentMenu='home' />
            <HomeMain />
            <Newsletter />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
        </div>
    );
}

export default HomePage;