import React from "react";
import Image from 'comp/Elements/Image';
import pic1 from 'media/Master_2/1.jpg';
import pic2 from 'media/Master_2/2.jpg';
import pic3 from 'media/Master_2/3.jpg';
import pic4 from 'media/Master_2/4.jpg';
import pic5 from 'media/Master_2/5.jpg';
import pic6 from 'media/Master_2/6.jpg';
import pic7 from 'media/Master_2/7.jpg';
import pic9 from 'media/Master_2/9.jpg';
import pic10 from 'media/Master_2/10.jpg';
import pic11 from 'media/Master_2/11.jpg';
import pic12 from 'media/Master_2/12.jpg';
import pic13 from 'media/Master_2/13.jpg';
import pic15 from 'media/Master_2/15.jpg';
import pic16 from 'media/Master_2/16.jpg';

export default function MasterTwo({ openPreviewHandler }) {

    return (
        <>
            <div className="image-grid-container"> 
                <div className="image-grid-container-column">
                    <Image 
                        src={pic1} 
                        alt="Picture 1" 
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
                        src={pic7} 
                        alt="Picture 7" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic13} 
                        alt="Picture 13" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic9} 
                        alt="Picture 9" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
            </div>

            <div className="divider">
                <hr className="cut progress" />
            </div>

            <div className="image-grid-container"> 
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
                        src={pic16} 
                        alt="Picture 16" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
            </div>

            <div className="image-grid-container"> 
                <div className="image-grid-container-column">
                    <Image 
                        src={pic6} 
                        alt="Picture 6" 
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
                <div className="image-grid-container-column">
                    <Image 
                        src={pic15} 
                        alt="Picture 15" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
            </div>
        </>
    )
}