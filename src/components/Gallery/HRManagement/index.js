import React from "react";
import Image from 'comp/Elements/Image';
import pic1 from 'media/HR_Management/1.jpg';
import pic2 from 'media/HR_Management/2.jpg';
import pic3 from 'media/HR_Management/3.jpg';
import pic4 from 'media/HR_Management/4.jpg';
import pic5 from 'media/HR_Management/5.jpg';
import pic6 from 'media/HR_Management/6.jpg';
import pic7 from 'media/HR_Management/7.jpg';
import pic8 from 'media/HR_Management/8.jpg';
import pic9 from 'media/HR_Management/9.jpg';
import pic10 from 'media/HR_Management/10.jpg';

export default function HRManagement({ openPreviewHandler }) {

    return (
        <>
            <div className="image-grid-container">
                <div className="image-grid-container-column">
                    <Image 
                        src={pic1} 
                        alt="Picture 1" 
                        className="aspect-ratio-equal"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                    <Image 
                        src={pic2} 
                        alt="Picture 2" 
                        className="aspect-ratio-equal"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                </div>

                <div className="image-grid-container-column flex-half hidden-xl">
                    <Image 
                        src={pic10} 
                        alt="Picture 10" 
                        className="aspect-ratio-equal"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                </div>

                <div className="image-grid-container-column">
                    <Image 
                        src={pic3} 
                        alt="Picture 3" 
                        className="aspect-ratio-equal"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                    <Image 
                        src={pic4} 
                        alt="Picture 4" 
                        className="aspect-ratio-equal"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                </div>
            </div>

            <div className="image-grid-container visible-xl">
                <div className="image-grid-container-column">
                    <Image 
                        src={pic10} 
                        alt="Picture 10" 
                        className="aspect-ratio-equal"
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
                        src={pic5} 
                        alt="Picture 5" 
                        className="aspect-ratio-equal"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic6} 
                        alt="Picture 6" 
                        className="aspect-ratio-equal"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic7} 
                        alt="Picture 7" 
                        className="aspect-ratio-equal"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic8} 
                        alt="Picture 8" 
                        className="aspect-ratio-equal"
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
                        className="aspect-ratio-auto"
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                </div>
            </div>
        </>
    )
}