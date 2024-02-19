import React from "react";
import Image from 'comp/Elements/Image';
import pic1 from 'media/Master/1.jpg';
import pic2 from 'media/Master/2.jpg';
import pic3 from 'media/Master/3.jpg';
import pic4 from 'media/Master/4.jpg';
import pic5 from 'media/Master/5.jpg';
import pic6 from 'media/Master/6.jpg';
import pic7 from 'media/Master/7.jpg';
import pic8 from 'media/Master/8.jpg';
import pic9 from 'media/Master/9.jpg';
import pic10 from 'media/Master/10.jpg';
import pic11 from 'media/Master/11.jpg';
import pic12 from 'media/Master/12.jpg';
import pic13 from 'media/Master/13.jpg';
import pic14 from 'media/Master/14.jpg';
import pic15 from 'media/Master/15.jpg';
import pic16 from 'media/Master/16.jpg';
import pic17 from 'media/Master/17.jpg';
import pic18 from 'media/Master/18.jpg';
import pic19 from 'media/Master/19.jpg';
import pic20 from 'media/Master/20.jpg';
import pic21 from 'media/Master/21.jpg';
import pic22 from 'media/Master/22.jpg';
import pic23 from 'media/Master/23.jpg';
import pic24 from 'media/Master/24.jpg';
import pic25 from 'media/Master/25.jpg';
import pic26 from 'media/Master/26.jpg';

export default function Master({ openPreviewHandler }) {

    return (
        <>
            <div className="image-grid-container"> 
                <div className="image-grid-container-column">
                    <Image 
                        src={pic1} 
                        alt="Picture 1" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                    <Image 
                        src={pic2} 
                        alt="Picture 2" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
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
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
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
                        src={pic8} 
                        alt="Picture 8" 
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
                        src={pic6} 
                        alt="Picture 6" 
                        className="aspect-ratio-auto"
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
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic14} 
                        alt="Picture 14" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic13} 
                        alt="Picture 13" 
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

            <div className="divider">
                <hr className="cut progress" />
            </div>

            <div className="image-grid-container"> 
                <div className="image-grid-container-column">
                    <Image 
                        src={pic15} 
                        alt="Picture 15" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                    <Image 
                        src={pic16} 
                        alt="Picture 16" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null, true)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic17} 
                        alt="Picture 17" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic18} 
                        alt="Picture 18" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic19} 
                        alt="Picture 19" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic21} 
                        alt="Picture 21" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic20} 
                        alt="Picture 20" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic22} 
                        alt="Picture 22" 
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
                        src={pic23} 
                        alt="Picture 23" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic24} 
                        alt="Picture 24" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic25} 
                        alt="Picture 25" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic26} 
                        alt="Picture 26" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
            </div>
        </>
    )
}