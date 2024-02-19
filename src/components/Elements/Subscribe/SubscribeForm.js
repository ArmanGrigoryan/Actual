import React, { useMemo, useRef, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = () => {
    const [disabled, setDisabled] = useState(false);
    const inputRef = useRef();

    const URL = useMemo(() => "https://rstheme.us16.list-manage.com/subscribe?u=b07284c0016b6ff3084de6551&id=292fe5312b", []);

    const clickHandler = (submitHandler) => () => {
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const value = inputRef.current.value.trim();

        if (!value || !pattern.test(value)) return;

        submitHandler({ email: inputRef.current.value });

        const body = JSON.stringify({
            filters: {
                toEmail: value
            }
        });

        fetch("http://localhost:8000/send-mail", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body
        })
            .finally(() => setDisabled(true))
    }

    return (
        <MailchimpSubscribe
            url={URL}
            render={({ subscribe, status }) => (
            <div className="d-flex flex">
                <input 
                    required
                    type="email"
                    placeholder="Էլ. փոստ" 
                    className="pr-10"
                    ref={inputRef}
                    disabled={disabled}
                    onInput={evt => evt.target.setCustomValidity("")}
                    onInvalid={evt => evt.target.setCustomValidity("Լրացրեք այս դաշտը")}
                />
                <button 
                    disabled={disabled} 
                    onClick={clickHandler(subscribe)}
                >
                    { status ? "Ուղարկված!" : "Ուղարկել" }
                </button>
            </div>
            )}
        />
    );
}

export default CustomForm;