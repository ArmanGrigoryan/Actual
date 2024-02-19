import React from "react";
import { useAnimateOnMount } from "hooks";

const PopupImage = React.forwardRef((props, ref) => {
    const { refElement: animateRef } = useAnimateOnMount(ref);
    const { children, onClose } = props;

    return (
        <>
            <div className="image-preview-modal" ref={animateRef}>
                <div className="image-preview-modal-container">
                    <div className="relative max-height-inherit">
                        { children }

                        <button className='close-icon' onClick={onClose}>
                            <i className='fa fa-close'></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
});

export default PopupImage;