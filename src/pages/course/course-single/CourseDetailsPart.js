import React from 'react';
import CourseSidebar from './CourseSidebar';
import CourseDetailsTab from './CourseDetailsTab';
import ReviewPart from './ReviewPart';

const CourseDetailsPart = () => {

    return (
        <div className="intro-section gray-bg pt-40 pb-40 md-pt-20 md-pb-20 loaded">
            <div className="container">
                <div className="row clearfix mb-20 xs-px-10">
                    <div className="col-lg-8 md-mb-20">
                        <CourseDetailsTab />
                    </div>
                    <div className="video-column col-lg-4">
                        <CourseSidebar />
                    </div>
                </div>

                <ReviewPart />
            </div>
        </div>
    )
}

export default CourseDetailsPart;