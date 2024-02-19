import React, { Suspense } from 'react';
import SectionTitle from "comp/Common/SectionTitle";
import withPreviewPopup from "comp/HOC/withPreviewPopup";
import Image from "comp/Elements/Image";
import HtmlText from 'comp/Elements/HtmlText';
import { useQuery } from 'react-query';
import { getReviews } from 'api';
import { CourseReviewsSliderSettings as sliderSettings } from 'helpers';

const Slider = React.lazy(() => import("react-slick"));

const CourseReviews = ({ openPreviewHandler }) => {
    const { data, isFetched } = useQuery("reviews", getReviews);

    return (
        <div className="content white-bg">
            <div className="rs-course-reviews rs-featured-news pt-30 pb-70 md-pt-30 md-pb-30">
                <div className="container-fluid">
                    <SectionTitle
                        sectionClass="sec-title2 text-center"
                        subtitleClass="sub-title uppercase mb-10"
                        subtitle=""
                        titleClass="title mb-30"
                        title="Ակտուալ Հաղորդակցություն"
                    />

                    <Suspense fallback={<></>}>
                        <Slider {...sliderSettings}>
                            {
                                isFetched ?
                                data.map(({ id, logo, alt, hasDarkCloseIcon, html }) => {
                                    const textDescriptionComponent = <HtmlText html={html} />;

                                    return (
                                        <Image
                                            key={id}
                                            src={logo} 
                                            alt={alt} 
                                            className="block d-block w-100 radius-12 b-none border-none coverable" 
                                            clickHandler={evt => openPreviewHandler(evt, textDescriptionComponent, hasDarkCloseIcon)}
                                            textDescriptionComponent={textDescriptionComponent}
                                            isZooming={true}
                                        />
                                    )
                                }) :
                                null
                            }
                        </Slider>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

const ReviewPart = withPreviewPopup(CourseReviews);

export default ReviewPart;