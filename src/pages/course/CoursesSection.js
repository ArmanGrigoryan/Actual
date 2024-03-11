import React from 'react';
import SectionTitle from 'comp/Common/SectionTitle';
import SingleCard from 'pages/course/course-single/SingleCard';
import { useQuery } from 'react-query';
import { getCourses } from 'api';
import BarLoader from "react-spinners/BarLoader";
import { LoadingSpinnerSettings } from 'helpers';

const Courses = () => {
    const { data, isFetched } = useQuery("courses", getCourses);

    return (
        <div className="rs-popular-courses main-home event-bg pt-30 pb-40  md-pb-20">
            <div className="container md-max-w-unset wider pr-20 pl-20 xs-px-10">
                <SectionTitle
                    sectionClass="sec-title text-center mb-20"
                    subtitleClass="sub-title mb-0"
                    subtitle="Դարձիր Ակտուալ անդամ"
                    title="Շտապիր գրանցվել"
                    titleClass="title black-color mb-30 xs-mb-20"
                />
                <div className="row gap-30 md-gap-20 md-justify-content-between">
                    {
                        isFetched ?
                        data.map(course => (
                            <div 
                                key={course.id} 
                                className="min-col-4-gap min-col-6-gap col-md-6-gap col-xs-12 p-0 xs-px-0 radius-12 cursor-pointer"
                            >
                                <SingleCard 
                                    itemClass="courses-item radius-12 h-100"
                                    {...course}
                                />
                            </div>
                        )) :
                        <BarLoader color="rgba(48, 32, 197)" cssOverride={LoadingSpinnerSettings} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Courses;