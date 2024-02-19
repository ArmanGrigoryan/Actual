import React from 'react';

const ContactInfo = (props) => {
    const { boxClass, iconClass, title, address, phone, email } = props;

    const emailSubject = "Հետադարձ կապ";
    const emailBody = "Բարև Ձեզ, կցանկանայի տեղեկանալ դասընթացների մասին ավելի մանրամասն։ Կոնտակտային հեռախոսահամար՝ +374";

    return (
        <div className={`address-box radius-12 ${boxClass}`}>
            <div className="address-icon">
                <i className={iconClass}></i>
            </div>
            <div className="address-text">
                <span className="label">{title ? title : 'Title Here'}</span>
                {address ? <div className="address">{address}</div> : ''}
                {phone ? <a className="phone" href={`tel:${phone}`}>{phone}</a> : ''}
                {email ? <a target="_top" className="email" href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}>{email}</a> : ''}
            </div>
        </div>
    );

}

export default ContactInfo;