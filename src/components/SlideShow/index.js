import React, { Suspense } from 'react';
import SectionTitle from 'comp/Common/SectionTitle';
import Image from 'comp/Elements/Image';
import { SlideShowSliderSettings as sliderSettings } from 'helpers';

const Slider = React.lazy(() => import("react-slick"));

const SlideShow = ({ 
    images = [],
    openPreviewHandler
}) => {

    return (
        <div className="light-bg pt-40 pb-40 md-pt-20 md-pb-20">
            <div className="relative">
                <SectionTitle
                    sectionClass="sec-title text-center"
                    subtitleClass="sub-title mb-10"
                    subtitle=""
                    titleClass="title mb-20"
                    title="Ակտուալի արխիվը"
                />
                {
                    images.length > 0 ?
                    (
                        <Suspense fallback={<></>}>
                            <Slider {...sliderSettings}>
                                {
                                    images.map(({ url, hasDarkCloseIcon }) => (
                                        <Image 
                                            key={url}
                                            src={url} 
                                            alt="" 
                                            className="block d-block w-100 b-none border-none" 
                                            clickHandler={evt => openPreviewHandler && openPreviewHandler(evt, null, hasDarkCloseIcon)}
                                        />
                                    ))
                                }
                            </Slider>
                        </Suspense>
                    ) :
                    null
                }
            </div>
        </div>
    );
}

export default SlideShow;