import React from 'react';

const ContactForm = (props) => {
    const { submitBtnClass, btnText, cb, btnDisabled } = props;

    return (
        <form id="contact-form" action="#" onSubmit={cb}>
            <div className="row justify-content-between gap-0">
                <div className="col-md-6-gap min-col-6-gap mb-30">
                    <input
                        id="name" 
                        className="form-control" 
                        type="text" 
                        name="name" 
                        placeholder="Անուն" 
                        required 
                        disabled={btnDisabled}
                        onInvalid={evt => evt.target.setCustomValidity("Լրացրեք այս դաշտը")}
                        onInput={evt => evt.target.setCustomValidity("")}
                    />
                </div>

                <div className="col-md-6-gap min-col-6-gap mb-30">
                    <input
                        id="lastname" 
                        className="form-control" 
                        type="text" 
                        name="lastname" 
                        placeholder="Ազգանուն" 
                        required 
                        disabled={btnDisabled}
                        onInvalid={evt => evt.target.setCustomValidity("Լրացրեք այս դաշտը")}
                        onInput={evt => evt.target.setCustomValidity("")}
                    />
                </div>

                <div className="col-md-6-gap min-col-6-gap mb-30">
                    <input 
                        id="email" 
                        className="form-control" 
                        type="text" 
                        name="email" 
                        placeholder="Էլ. փոստ" 
                        required 
                        disabled={btnDisabled}
                        onInvalid={evt => evt.target.setCustomValidity("Լրացրեք այս դաշտը")}
                        onInput={evt => evt.target.setCustomValidity("")}
                    />
                </div>

                <div className="col-md-6-gap min-col-6-gap mb-30">
                    <input 
                        id="phone" 
                        className="form-control" 
                        type="text" 
                        name="phone" 
                        placeholder="Հեռ." 
                        required 
                        disabled={btnDisabled}
                        onInvalid={evt => evt.target.setCustomValidity("Լրացրեք այս դաշտը")}
                        onInput={evt => evt.target.setCustomValidity("")}
                    />
                </div>

                <div className="col-12 mb-30">
                    <textarea 
                        id="message" 
                        className="form-control" 
                        name="message" 
                        placeholder="Ձեր հաղորդագրությունը" 
                        required
                        disabled={btnDisabled}
                        onInvalid={evt => evt.target.setCustomValidity("Լրացրեք այս դաշտը")}
                        onInput={evt => evt.target.setCustomValidity("")}
                    ></textarea>
                </div>
            </div>
            <div className="btn-part">
                <button disabled={btnDisabled} className={submitBtnClass ? submitBtnClass : 'readon submit'} type="submit">{btnText}</button>
            </div>
        </form>
    );

}

export default ContactForm;