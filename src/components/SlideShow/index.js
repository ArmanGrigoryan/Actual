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
        <div className="rs-featured-news pt-50 pb-50 md-pt-30 md-pb-30 sm-pb-20">
            <div className="relative">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-title uppercase mb-10"
                    subtitle=""
                    titleClass="title mb-30"
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
                                            className="block d-block w-100 radius-12 b-none border-none" 
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