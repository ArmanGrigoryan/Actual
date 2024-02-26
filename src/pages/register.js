import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'comp/Layout/Header';
import Footer from 'comp/Layout/Footer';
import Newsletter from 'comp/Common/Newsletter';
import ScrollToTop from 'comp/Common/ScrollTop';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import footerLogo from 'media/logo/logo-light.png';
import bannerbg from 'media/slider/bg.jpg';
import { useFade } from 'hooks';
import SEO from 'comp/SEO';

const Register = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Agency | Ակտուալ - Գրանցվեք'
                description='Գրանցվեք՝ Դասընթացներին մասնակից դառնալու, Ակտուալի ամենաթարմ նորությունների, առաջարկությունների մասին տեղեկանալու և հետադարձ կապի պահպանման համար:'
            />
            <Header parentMenu='pages' />
            <SiteBreadcrumb
                pageTitle="Գրանցվել"
                pageName=""
                breadcrumbsImg={bannerbg}
            />
            <div className="register-section pt-50 pb-50 md-pt-30 md-pb-30">
                <div className="container">
                    <div className="register-box">
                        <div className="sec-title text-center mb-30">
                            <h2 className="title mb-10">Ստեղծել նոր հաշիվ</h2>
                        </div>
                        <div className="styled-form">
                            <div id="form-messages"></div>
                            <form id="contact-form" method="post" action="#">
                                <div className="row clearfix">
                                    <div className="form-group col-lg-12 mb-25">
                                        <input type="text" id="Name" name="First Name" value="" placeholder="Անուն" required />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="text" id="last" name="lname" value="" placeholder="Ազգանուն" required />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="email" id="email" name="email" value="" placeholder="Էլ. փոստ" required />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="text" id="user" name="phone_number" value="" placeholder="Մուտքանուն" required />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="text" id="puser" name="Password" value="" placeholder="Գաղտնաբառ" required />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="text" id="Confirm" name="Confirm Password" value="" placeholder="Կրկնել գաղտնաբառը" required />
                                    </div>
                                    <div className="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                                        <button type="submit" className="readon register-btn"><span className="txt">Գրանցվել</span></button>
                                    </div>
                                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                        <div className="users text-center">Ունե՞ք հաշիվ: <Link className='ml-10 bold' to="/login">Մուտք</Link></div>
                                    </div>
                                </div>
                            </form>
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

export default Register;