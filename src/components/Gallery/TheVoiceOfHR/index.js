import React from "react";
import Image from 'comp/Elements/Image';
import pic1 from 'media/The_Voice_Of_HR/1.jpg';
import pic2 from 'media/The_Voice_Of_HR/2.jpg';
import pic3 from 'media/The_Voice_Of_HR/3.jpg';
import pic4 from 'media/The_Voice_Of_HR/4.jpg';
import pic5 from 'media/The_Voice_Of_HR/5.jpg';
import pic6 from 'media/The_Voice_Of_HR/6.jpg';
import pic7 from 'media/The_Voice_Of_HR/7.jpg';
import pic8 from 'media/The_Voice_Of_HR/8.jpg';
import pic9 from 'media/The_Voice_Of_HR/9.jpg';
import pic10 from 'media/The_Voice_Of_HR/10.jpg';
import pic11 from 'media/The_Voice_Of_HR/11.jpg';
import pic12 from 'media/The_Voice_Of_HR/12.jpg';

export default function TheVoiceOfHR({ openPreviewHandler }) {

    return (
        <>
            <div className="image-grid-container"> 
                <div className="image-grid-container-column">
                    <Image 
                        src={pic1} 
                        alt="Picture 1" 
                        className="aspect-ratio-auto"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic2} 
                        alt="Picture 2" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic3} 
                        alt="Picture 3" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic4} 
                        alt="Picture 4" 
                        className="aspect-ratio-auto"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                </div>  
                <div className="image-grid-container-column">
                    <Image 
                        src={pic7} 
                        alt="Picture 7" 
                        className="aspect-ratio-auto"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                    <Image 
                        src={pic6} 
                        alt="Picture 6" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic5} 
                        alt="Picture 5" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic8} 
                        alt="Picture 8" 
                        className="aspect-ratio-auto"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                </div>
            </div>

            <div className="divider">
                <hr className="cut progress" />
            </div>

            <div className="image-grid-container"> 
                <div className="image-grid-container-column">
                    <Image 
                        src={pic9} 
                        alt="Picture 9" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic10} 
                        alt="Picture 10" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>  
                <div className="image-grid-container-column">
                    <Image 
                        src={pic11} 
                        alt="Picture 11" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic12} 
                        alt="Picture 12" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
            </div>
        </>
    )
}