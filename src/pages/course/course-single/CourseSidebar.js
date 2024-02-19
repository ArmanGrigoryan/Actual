import React, { useState } from 'react';
import ModalVideo from 'comp/Elements/ModalVideo';
import { useCourseContext } from 'app/App';

const CourseSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { course } = useCourseContext();

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div className="inner-column">
            {course.courseVideoUrl && <ModalVideo
                videoUrl={course.courseVideoUrl}
                videoWidth={course.courseVideoWidth}
                videoHeight={course.courseVideoHeight}
                hasOwnIframe={course.hasOwnIframe}
                isOpen={isOpen}
                closeHandler={toggleModal}
            />}

            <div className="intro-video media-icon orange-color2">
                <img 
                    loading="lazy" 
                    className="video-img radius-12 w-100" 
                    src={course.logo} 
                    alt="Video" 
                />
                <span className="popup-videos" onClick={toggleModal} >
                    <i className="fa fa-play"></i>
                </span>
            </div>
            <div className="course-features-info radius-12">
                <ul>
                    <li className="lectures-feature">
                        <div>
                            <i className="fa fa-files-o"></i>
                            <span className="label">Դասախոսություններ</span>
                        </div>
                        <span className="value">{course.lecturesQuantity}</span>
                    </li>

                    <li className="duration-feature">
                        <div>
                            <i className="fa fa-clock-o"></i>
                            <span className="label">Տևողություն</span>
                        </div>
                        <span className="value">{course.timeline}</span>
                    </li>

                    <li className="weekly-feature">
                        <div>
                            <i className="fa fa-book"></i>
                            <span className="label">Շաբաթական պարապմունքներ</span>
                        </div>
                        <span className="value">{course.weeklySessions}</span>
                    </li>

                    <li className="students-feature">
                        <div>
                            <i className="fa fa-users"></i>
                            <span className="label">Ուսանողներ</span>
                        </div>
                        <span className="value">{course.disabled ? 0 : course.studentQuantity}</span>
                    </li>

                    <li className="assessments-feature">
                        <div>
                            <i className="fa fa-check-square-o"></i>
                            <span className="label">Գնահատականներ</span>
                        </div>
                        <span className="value">{course.estimations ? "Այո" : "Ոչ"}</span>
                    </li>

                    <li className="assessments-feature">
                        <div>
                            <i className="fa fa-address-card-o"></i>
                            <span className="label">Սերտիֆիկատ</span>
                        </div>
                        <span className="value">{course.certificate ? "Այո" : "Ոչ"}</span>
                    </li>
                </ul>
            </div>
            <div className="btn-part radius-12 mt-30">
                {
                    !course.disabled ?
                    <button className="btn readon orange pointer-events-none">
                        { course.oldPrice && <span className='text-decoration-line-through h5 mr-10 d-inline-block'>{ course.oldPrice }</span> }
                        <span className='h5 mr-10'>{ course.price }</span> 
                        <span className='h6 mr-10 d-inline-block'>ՀՀ դրամ</span>
                        {
                            course.singlePricing ?
                            <span className='single-price-text'>(օրվա արժեք)</span> :
                            null
                        }
                    </button> :
                    null
                }
                <a 
                    href={course.courseLink} 
                    target='_blank' 
                    className={`btn readon orange-white-transparent ${course.disabled ? "pointer-events-none" : ""}`}
                >
                    {
                        !course.disabled ?
                        <>
                            <span className='h6 mr-10'>Գրանցվել</span> 
                            <span className='h6'>հիմա</span> 
                        </> :
                        <>
                            <span className='h6 mr-10'>Գրանցումը՝</span> 
                            <span className='h6'>Շուտով</span> 
                        </>
                    }
                </a>
            </div>
        </div>
    );
}

export default CourseSidebar;