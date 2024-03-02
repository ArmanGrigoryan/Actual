import React, { useRef, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { subscribeMail } from "api";

const env = import.meta.env;
const SubscribeUrl = env.VITE_APP_MAILCHAMP_SUBSCRIBE_URL;

const CustomForm = () => {
    const [disabled, setDisabled] = useState(false);
    const inputRef = useRef();

    const clickHandler = (submitHandler) => () => {
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const value = inputRef.current.value.trim();

        if (!value || !pattern.test(value)) return;

        submitHandler({ email: inputRef.current.value });
        subscribeMail(value)
            .finally(() => setDisabled(true));
    }

    return (
        <MailchimpSubscribe
            url={SubscribeUrl}
            render={({ subscribe, status }) => (
            <div className="d-flex flex">
                <input 
                    required
                    type="email"
                    placeholder="Էլ. փոստ" 
                    className="pr-10 radius-0"
                    ref={inputRef}
                    disabled={disabled}
                    onInput={evt => evt.target.setCustomValidity("")}
                    onInvalid={evt => evt.target.setCustomValidity("Լրացրեք այս դաշտը")}
                />
                <button 
                    disabled={disabled} 
                    onClick={clickHandler(subscribe)}
                >
                    { status ? "Ուղարկված է!" : "Ուղարկել" }
                </button>
            </div>
            )}
        />
    );
}

export default CustomForm;