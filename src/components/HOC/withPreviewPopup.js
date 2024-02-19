import React, { useState, useRef } from "react";
import PopupImage from "comp/Layout/ImagePopup";
import Image from "comp/Elements/Image";
import { AnimationInterval, FadeAnimationItemsReversed, ForwardAnimationParams } from "helpers";

export default function withPreviewPopup(Component) {
    return function withPreviewPopupComponent({ ...props }) {
        const [previewElement, setPreviewElement] = useState(null);
        const [isElementPreviewing, setIsElementPreviewing] = useState(false);
        const [activeComponent, setActiveComponent] = useState(null);
        const [hasDarkCloseIcon, setHasDarkCloseIcon] = useState(null);

        const ElementRef = useRef();

        const openPreviewHandler = (evt, comp, isDarkIcon) => {
            setPreviewElement(evt.target);
            setIsElementPreviewing(true);
            setActiveComponent(comp);
            setHasDarkCloseIcon(isDarkIcon);
        }

        const closePreviewHandler = () => {
            Promise.resolve(ElementRef.current.animate(FadeAnimationItemsReversed, ForwardAnimationParams))
            .then(res => {
                if (res.finished) setTimeout(() => {
                    setPreviewElement(null);
                    setIsElementPreviewing(false);
                    setActiveComponent(null);
                }, AnimationInterval)
            });
        }

        return (
            <div className="relative">
                <Component {...props} openPreviewHandler={openPreviewHandler} />

                {
                    previewElement ?
                    <PopupImage 
                        ref={ElementRef}
                        onClose={closePreviewHandler}
                    >
                        <Image
                            isPreviewing={isElementPreviewing}
                            textDescriptionComponent={activeComponent}
                            src={previewElement.src} 
                            alt={previewElement.alt} 
                            hasDarkCloseIcon={hasDarkCloseIcon}
                            className="radius-12 b-none border-none item" 
                        />
                    </PopupImage> :
                    null
                }
            </div>
        )
    }
}