import React, { Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddressMaps = React.lazy(() => import('./Maps'));

const env = import.meta.env;

const Footer = (props) => {
    const { footerClass, footerTopClass } = props;
    const [visible, setVisible] = useState(false);

    const emailSubject = "Հետադարձ կապ";
    const emailBody = "Բարև Ձեզ, ես ցանկանում եմ տեղեկանալ դասընթացների մասին ավելի մանրամասն։ Կարող եք զանգահարել՝ +374";

    useEffect(() => {
        setTimeout(() => setVisible(true), 500);
    }, []);

    return (
        <footer className={footerClass ? footerClass : 'rs-footer'}>
            <div className={`footer-top ${footerTopClass}`}>
                <div className="info-container">
                    <div className="col-lg-5 footer-widget">
                        <h3 className="widget-title">Հասցե</h3>
                        <ul className="address-widget">
                            <li>
                                <i className="flaticon-location"></i>
                                <div className="desc">{ env.VITE_APP_CONTACT_ADDRESS }</div>
                            </li>
                            <li>
                                <i className="flaticon-call"></i>
                                <div className="desc"><a href={`tel:${env.VITE_APP_CONTACT_PHONE}`}>{ env.VITE_APP_CONTACT_PHONE }</a></div>
                            </li>
                            <li>
                                <i className="flaticon-email"></i>
                                <div className="desc"><a href={`mailto:${env.VITE_APP_CONTACT_EMAIL}?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`}>{ env.VITE_APP_CONTACT_EMAIL }</a></div>
                            </li>
                            <li className='mt-50 sm-mt-0'>
                                <ul className="d-flex gap-20">
                                    <li className="d-flex">
                                        <a target="_blank" href={env.VITE_APP_SOCIAL_FB_URL} className="cursor-pointer">
                                            <i className="fa fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <a target="_blank" href={env.VITE_APP_SOCIAL_IG_URL}>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <a target="_blank" href={env.VITE_APP_SOCIAL_TG_URL}>
                                            <i className="fa fa-telegram"></i>
                                        </a>
                                    </li>
                                    <li className="d-flex">
                                        <a target="_blank" href={env.VITE_APP_SOCIAL_YT_URL}>
                                            <i className="fa fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <Suspense fallback={<></>}>
                        { visible && <AddressMaps /> }
                    </Suspense>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container wider">
                    <div className="row align-items-center">
                        <div className='legal-links'>
                            <div className="col-lg-6 text-left">
                                <ul className="copy-right-menu">
                                    <li className="dotted"><Link to="/event">Իվենթներ</Link></li>
                                    <li className="dotted"><Link to="/course">Դասընթացներ</Link></li>
                                    <li className="dotted"><Link to="/about">Մեր մասին</Link></li>
                                    <li className="dotted"><Link to="/contact">Կապ</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 text-end last">
                                <div className="copyright md-mb-0">
                                    <p className="white-color text-middle text-center">Բոլոր իրավունքները պաշտպանված են  {new Date().getFullYear()}թ.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;