import React, { Suspense } from 'react';
import withPreviewPopup from 'comp/HOC/withPreviewPopup';
import SectionTitle from 'comp/Common/SectionTitle';
import Image from 'comp/Elements/Image';
import HtmlText from 'comp/Elements/HtmlText';
import { useQuery } from 'react-query';
import { getNews } from 'api';
import { WithLoveNewsSliderSettings as sliderSettings } from 'helpers';

const Slider = React.lazy(() => import("react-slick"));

const WithLoveNews = ({ openPreviewHandler }) => {
    const { data, isFetched } = useQuery("news", getNews);

    return (
        <div className="rs-featured-news pt-50 md-pt-30 pb-70 xs-pb-20">
            <div className="container-fluid">
                <SectionTitle
                    sectionClass="sec-title2 text-center"
                    subtitleClass="sub-title uppercase mb-10"
                    subtitle="Ծանոթացեք նորություններին"
                    titleClass="title mb-10"
                    title="Սիրով՝ Ակտուալից"
                />

                <Suspense fallback={<></>}>
                    <Slider {...sliderSettings}>
                        {
                            isFetched ?
                            data.slice(0).reverse().map(({ id, logo, alt, hasDarkCloseIcon, html }) => {
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
    );
}

const WithLoveNewsWithPreview = withPreviewPopup(WithLoveNews);

export default WithLoveNewsWithPreview;