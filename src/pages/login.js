import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
import Newsletter from 'comp/Common/Newsletter';
import ScrollToTop from 'comp/Common/ScrollTop';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import SEO from 'comp/SEO';
import footerLogo from 'media/logo/logo-light.png';
import bannerbg from 'media/slider/bg.jpg';
import { useFade } from 'hooks';

const env = import.meta.env;

const Login = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title={`${env.VITE_APP_APPLICATION_TITLE} | Ակտուալ - Մուտք գործեք`}
                description='Մուտք գործեք` Դասընթացներին գրանցվելու, Ակտուալի ամենաթարմ նորությունների, առաջարկությունների մասին տեղեկանալու և հետադարձ կապի պահպանման համար:'
            />
            <Header parentMenu='pages' />
            <SiteBreadcrumb
                pageTitle="Մուտք գործել"
                pageName=""
                breadcrumbsImg={bannerbg}
            />
            <div className="rs-login pt-50 pb-50 md-pt-30 md-pb-30">
                <div className="container">
                    <div className="noticed">
                        <div className="main-part">
                            <div className="method-account">
                                <h2 className="login">Լրացրեք տվյալները</h2>
                                <form>
                                    <input type="email" name="E-mail" placeholder="Էլ. փոստ" required />
                                    <input type="text" name="text" placeholder="Մուտքանուն" required />
                                    <button type="submit" className="readon submit-btn">Մուտք</button>
                                    <div className="last-password">
                                        <p>Չունե՞ք հաշիվ:   <Link className='ml-10 bold' to="/register">Ստեղծել նորը</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Newsletter />
            <Footer
                footerClass="rs-footer home9-style main-home"
                footerLogo={footerLogo}
            />
            <ScrollToTop />
        </div>
    );
}

export default Login;