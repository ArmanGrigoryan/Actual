import React, { useState } from 'react';
import SiteBreadcrumb from 'comp/Common/Breadcumb';
import SectionTitle from 'comp/Common/SectionTitle';
import ContactForm from 'comp/Contact/ContactForm';
import ContactInfo from 'comp/Contact/ContactInfo';
import bannerbg from 'media/slider/main-home/homepage-bg.jpg';

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

            <div className="rs-contact style1 event-bg pt-50 md-pt-30 pb-50 md-pb-30 xs-px-10">
                <div className="container wider pb-50 md-pb-30">
                    <div className="row gutter-35">
                        <div className="col-md-4">
                            <ContactInfo
                                boxClass="sm-mb-30"
                                title="Հասցե"
                                iconClass="flaticon-location"
                                address="Խանջյան 19, Երևան"
                            />
                        </div>
                        <div className="col-md-4">
                            <ContactInfo
                                boxClass="sm-mb-30"
                                title="Էլ. հասցե"
                                iconClass="flaticon-email"
                                email="support@actualhr.am"
                            />
                        </div>
                        <div className="col-md-4">
                            <ContactInfo
                                boxClass="sm-mb-30"
                                title="Հեռախոս"
                                iconClass="flaticon-phone"
                                phone="(+374) 44-30-30-28"
                            />
                        </div>
                    </div>
                </div>

                <div className="container wider">
                    <div className="row y-top">
                        <div className="col-lg-6 md-mb-30">
                            <div className="mapouter">
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
                        <div className="col-lg-6 pl-50 md-pl-14">
                            <div className="contact-widget">
                                <SectionTitle
                                    sectionClass="sec-title2 mb-36"
                                    titleClass="title black-color mb-14"
                                    title="Կապ հաստատել"
                                    descClass="new-desc"
                                    description="Թողեք ձեր հաղորդագրությունը և մենք շուտով կպատասխանենք"
                                />
                                <ContactForm
                                    submitBtnClass="readon orange-btn primary-transparent main-home p-40 cursor-pointer radius-12"
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