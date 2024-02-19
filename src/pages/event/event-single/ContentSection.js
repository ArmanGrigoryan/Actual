import React, { Suspense, useState } from 'react';
import ModalVideo from 'comp/Elements/ModalVideo';
import { useEventContext } from 'app/App';
import HtmlText from 'comp/Elements/HtmlText';
import withPreviewPopup from 'comp/HOC/withPreviewPopup';

const EventGallery = React.lazy(() => import("./EventGallery"));
const EventGalleryWithPreview = withPreviewPopup(EventGallery);

const ContentSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { event } = useEventContext();

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div className="intro-section gray-bg pt-50 pb-0 md-pt-30 loaded">
            <div className="container">
                <div className="row clearfix">
                    <div className="col-lg-8 md-mb-30">
                        <div className="intro-info-tabs white-bg p-30 xs-px-20 xs-py-30 radius-12">
                            <HtmlText html={event.html} />
                        </div>
                    </div>

                    <div className="video-column col-lg-4">
                        <div className="inner-column">
                            <ModalVideo
                                videoWidth={event.eventVideoWidth}
                                videoHeight={event.eventVideoHeight}
                                videoUrl={event.eventVideoUrl}
                                hasOwnIframe={event.hasOwnIframe}
                                isOpen={isOpen}
                                closeHandler={toggleModal}
                            />

                            <div className="intro-video media-icon orange-color2">
                                <img 
                                    loading="lazy" 
                                    className="video-img radius-12 w-100 min-height-400 object-fit-cover" 
                                    src={event.logo} 
                                    alt="Video" 
                                />
                                <span to="" className="popup-videos" onClick={toggleModal} >
                                    <i className="fa fa-play"></i>
                                </span>
                            </div>

                            <div className="course-features-info slim radius-12">
                                <ul>
                                    <li className="gapper">
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-files-o"></i>
                                            <span className="label">Վերնագիր</span>
                                        </div>
                                        <span className="value right-align"><b>{event.title}</b></span>
                                    </li>

                                    <li className="gapper">
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-clock-o"></i>
                                            <span className="label">Տևողություն</span>
                                        </div>
                                        <span className="value right-align">{event.timeline}</span>
                                    </li>

                                    <li className="gapper">
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-calendar-check-o"></i>
                                            <span className="label">Ամսաթիվ</span>
                                        </div>
                                        <span className="value right-align">{event.date}</span>
                                    </li>

                                    <li className="gapper">
                                        <div className="d-flex align-items-center">
                                            <i className="fa fa-map-marker"></i>
                                            <span className="label">Հասցե</span>
                                        </div>
                                        <span className="value right-align">{event.location}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Suspense fallback={<></>}>
                <EventGalleryWithPreview type={event.type} />
            </Suspense>
        </div>
    );
}

export default ContentSection;