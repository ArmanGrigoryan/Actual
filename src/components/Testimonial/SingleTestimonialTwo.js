import React from 'react';

const SingleTestimonialTwo = (props) => {
    const { itemClass } = props;

    return (
        <div className={itemClass ? itemClass : 'testi-wrap mb-20'}>
            <div className="img-part">
                <img loading="lazy"
                    src={props.testiImage}
                    alt={props.name}
                />
            </div>
            <div className="content-part pt-12">
                <div className="desc">{props.description}</div>
                <div className="info">
                    <h5 className="name text-right">{props.name}</h5>
                    <div className="designation">{props.designation}</div>
                </div>
            </div>
        </div>
    )
}

export default SingleTestimonialTwo