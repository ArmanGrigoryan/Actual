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
        <div className="content light-bg radius-12">
            <div className="rs-course-reviews pt-30 px-25 xs-px-0 pb-20 md-pt-20 radius-12">
                <div className="container-fluid">
                    <SectionTitle
                        sectionClass="title text-center"
                        subtitleClass="sub-title mb-10"
                        subtitle=""
                        titleClass="title mb-10"
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