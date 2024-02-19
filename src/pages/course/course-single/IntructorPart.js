import React from 'react';
import { useCourseContext } from 'app/App';
import { useFade } from 'hooks';

const InstructorPart = () => {
    const { course } = useCourseContext();
    const { refElement: animateRef } = useFade(false);

    return (
        <div className="content pt-30 pb-30 md-pb-10 pl-30 pr-30 white-bg bottom-radius-12" ref={animateRef}>
            <div className="rs-team style1 transparent-bg clearfix d-flex gap-20 mt-0">
                <div className="col-lg-6 col-md-6 col-sm-12 sm-mb-30">
                    <div>
                        <img src={course.instructor.image} alt={course.instructor.name} className="radius-12 w-100" />
                    </div>
                </div>

                <div className="instructor col-lg-6 col-md-6 col-sm-12 sm-mb-30">
                    <h2 className="instructor-title">{course.instructor.name}</h2>
                    <h5 className="instructor-subtitle">{course.instructor.role}</h5>

                    <ul>
                        {
                            course.instructor.html ?
                            course.instructor.html.map((text, idx) => (
                                <li key={idx} className='mb-10'>{ text }</li>
                            )) :
                            null
                        }
                    </ul>
                </div>

            </div>  
        </div>
    );
}

export default InstructorPart;