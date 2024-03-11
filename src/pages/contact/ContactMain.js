import React, { useState } from 'react';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import SectionTitle from 'comp/Common/SectionTitle';
import ContactForm from 'comp/Contact/ContactForm';
import ContactInfo from 'comp/Contact/ContactInfo';
import bannerbg from 'media/slider/bg.jpg';

const env = import.meta.env;

const ContactMain = () => {
    const [btnText, setBtnText] = useState("Ուղարկել");
    const [disabled, setDisabled] = useState(false);

    const submitHandler = (evt) => {
        evt.preventDefault();

        setDisabled(true);
        setBtnText("Շնորհակալություն");
    }

    return (
        <>
            <SiteBreadcrumb
                pageTitle="Կապ մեզ հետ"
                pageName=""
                breadcrumbsImg={bannerbg}
            />

            <div className="rs-contact style1 event-bg pt-40 md-pt-20 pb-40 md-pb-20 xs-px-10">
                <div className="container wider pb-40 md-pb-20">
                    <div className="row justify-content-between">
                        <div className="col-md-4-gap">
                            <ContactInfo
                                boxClass="sm-mb-30"
                                title="Հասցե"
                                iconClass="flaticon-location"
                                address={env.VITE_APP_CONTACT_ADDRESS}
                            />
                        </div>
                        <div className="col-md-4-gap">
                            <ContactInfo
                                boxClass="sm-mb-30"
                                title="Էլ. հասցե"
                                iconClass="flaticon-email"
                                email={env.VITE_APP_CONTACT_EMAIL}
                            />
                        </div>
                        <div className="col-md-4-gap">
                            <ContactInfo
                                boxClass="sm-mb-30"
                                title="Հեռախոս"
                                iconClass="flaticon-call"
                                phone={env.VITE_APP_CONTACT_PHONE}
                            />
                        </div>
                    </div>
                </div>

                <div className="container wider">
                    <div className="row">
                        <div className="col-lg-6 md-mb-20">
                            <div className="relative text-right w-100">
                                <div className="gmap_canvas">
                                    <iframe
                                        title="Map"
                                        className="gmap_iframe radius-32" 
                                        width="100%" 
                                        frameBorder="0" 
                                        scrolling="no" 
                                        src="https://maps.google.com/maps?width=530&amp;height=530&amp;hl=en&amp;q=Khanjyan 19&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-50 md-pl-0">
                            <div className="contact-widget">
                                <SectionTitle
                                    sectionClass="sec-title mb-40"
                                    titleClass="title black-color mb-10"
                                    title="Կապ հաստատել"
                                    descClass="new-desc"
                                    description="Թողեք ձեր հաղորդագրությունը և մենք շուտով կպատասխանենք"
                                />
                                <ContactForm
                                    submitBtnClass="readon orange-btn primary-transparent cursor-pointer"
                                    btnText={btnText}
                                    btnDisabled={disabled}
                                    cb={submitHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ContactMain;