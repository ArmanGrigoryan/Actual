import React from 'react';
import { Link } from 'react-router-dom';
import { useCourseContext } from 'app/App';

const SingleCard = (props) => {
    const { courseChangeHandler } = useCourseContext();

    return (
        <div className={`${props.itemClass}`}>
            <Link to="/course/course-single" onClick={() => courseChangeHandler(props)}>
                <div className="courses-grid">
                    <div className="img-part featured-img">
                        <img 
                            width={425}
                            height={500}
                            src={props.logo}
                            alt={props.title}
                            loading="lazy"
                        />
                    </div>
                    <div className="content-part">
                        <div className="info-meta">
                            <ul>
                                <li className="ratings">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <span>({props.rate} կարծիք)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="course-price">
                            <span className="price">{props.info}</span>
                        </div>
                        <h3 className="title">{props.title}</h3>
                        <ul className="meta-part">
                            <li className="user">
                                <i className="fa fa-user"></i>
                                {props.disabled ? 0 : props.studentQuantity} մասնակից
                            </li>
                            <li className="user">
                                <i className="fa fa-file"></i>
                                {props.lessonsQuantity} դաս
                            </li>
                        </ul>
                        <span className="course-qnty">{props.quantity}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SingleCard