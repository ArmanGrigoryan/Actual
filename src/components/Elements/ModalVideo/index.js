import React from "react";
import { useResponsive } from 'hooks';
import { DisplaySize } from "helpers";
import Rodal from 'rodal';

const ModalVideo = ({
    isOpen,
    closeHandler,
    videoWidth = "100%",
    videoHeight = "100%",
    videoUrl,
    hasOwnIframe = false,
    videoTitle = "Ակտուալի մասին"
}) => {
    const displaySize = useResponsive();

    return (
        <Rodal
            visible={isOpen}
            onClose={closeHandler}
            customStyles={{
                maxWidth: displaySize === DisplaySize.Tablet ? 
                    "95vw" :
                        displaySize === DisplaySize.MobileS || displaySize === DisplaySize.MobileM ? 
                        "100vw" :
                            "80vw",
                zIndex: 1000,
                background: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
            }}
            enterAnimation="door"
            leaveAnimation="fade"
            showCloseButton={false}
            className={`z-index-1000 ${hasOwnIframe ? "slim-iframe" : ""} w-100 h-100`}
            width={1920}
            height={1920}
        >
            { isOpen && <iframe 
                id="open-iframe"
                className={`radius-20 open-iframe border-none overflow-hidden max-height-inherit`}
                width={videoWidth}
                height={videoHeight}
                src={videoUrl}
                title={videoTitle}
                allowFullScreen={true}
                playsInline={true}
                frameBorder="0"
                scrolling="no"
                allow="accelerometer; autoplay; playsInline; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            /> }
        </Rodal>
    )
}

export default ModalVideo