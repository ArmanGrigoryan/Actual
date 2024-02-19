import React from 'react';
import CourseSidebar from './CourseSidebar';
import CourseDetailsTab from './CourseDetailsTab';
import ReviewPart from './ReviewPart';

const CourseDetailsPart = () => {

    return (
        <>
            <div className="intro-section gray-bg pt-50 pb-50 md-pt-30 md-pb-30 loaded">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-lg-8 md-mb-30">
                            <CourseDetailsTab />
                        </div>
                        <div className="video-column col-lg-4">
                            <CourseSidebar />
                        </div>
                    </div>

                    <ReviewPart />
                </div>
            </div>
        </>
    )
}

export default CourseDetailsPart;