import React from "react";
import Image from 'comp/Elements/Image';
import pic1 from 'media/The_Voice_Of_HR_2/1.jpg';
import pic2 from 'media/The_Voice_Of_HR_2/2.jpg';
import pic3 from 'media/The_Voice_Of_HR_2/3.jpg';
import pic4 from 'media/The_Voice_Of_HR_2/4.jpg';
import pic5 from 'media/The_Voice_Of_HR_2/5.jpg';
import pic6 from 'media/The_Voice_Of_HR_2/6.jpg';
import pic7 from 'media/The_Voice_Of_HR_2/7.jpg';
import pic8 from 'media/The_Voice_Of_HR_2/8.jpg';
import pic9 from 'media/The_Voice_Of_HR_2/9.jpg';
import pic10 from 'media/The_Voice_Of_HR_2/10.jpg';
import pic11 from 'media/The_Voice_Of_HR_2/11.jpg';
import pic12 from 'media/The_Voice_Of_HR_2/12.jpg';
import pic13 from 'media/The_Voice_Of_HR_2/13.jpg';
import pic14 from 'media/The_Voice_Of_HR_2/14.jpg';
import pic15 from 'media/The_Voice_Of_HR_2/15.jpg';
import pic16 from 'media/The_Voice_Of_HR_2/16.jpg';
import pic17 from 'media/The_Voice_Of_HR_2/17.jpg';
import pic18 from 'media/The_Voice_Of_HR_2/18.jpg';
import pic19 from 'media/The_Voice_Of_HR_2/19.jpg';
import pic20 from 'media/The_Voice_Of_HR_2/20.jpg';
import pic21 from 'media/The_Voice_Of_HR_2/21.jpg';
import pic22 from 'media/The_Voice_Of_HR_2/22.jpg';
import pic24 from 'media/The_Voice_Of_HR_2/24.jpg';
import pic23 from 'media/The_Voice_Of_HR_2/23.jpg';

export default function TheVoiceOfHRTwo({ openPreviewHandler }) {

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
                        src={pic6} 
                        alt="Picture 6" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
                <div className="image-grid-container-column">
                    <Image 
                        src={pic7} 
                        alt="Picture 7" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic8} 
                        alt="Picture 8" 
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
            </div>

            <div className="image-grid-container"> 
                <div className="image-grid-container-column">
                    <Image 
                        src={pic13} 
                        alt="Picture 13" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic14} 
                        alt="Picture 14" 
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
                    <Image 
                        src={pic16} 
                        alt="Picture 16" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
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
                        src={pic20} 
                        alt="Picture 20" 
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
                        src={pic21} 
                        alt="Picture 21" 
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
                <div className="image-grid-container-column">
                    <Image 
                        src={pic24} 
                        alt="Picture 24" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                    <Image 
                        src={pic23} 
                        alt="Picture 23" 
                        isZooming={true}
                        clickHandler={evt => openPreviewHandler(evt, null)}
                    />
                </div>
            </div>
        </>
    )
}