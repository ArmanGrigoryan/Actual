import React from 'react';

export default function Maps() {

    return (
        <div className="col-lg-5 footer-widget">
            <div>
                <iframe
                    loading="lazy"
                    title="Map"
                    className="radius-12" 
                    width="100%" 
                    height={250}
                    frameBorder="0" 
                    scrolling="no" 
                    src="https://maps.google.com/maps?width=530&amp;height=530&amp;hl=en&amp;q=Khanjyan 19&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
            </div>
        </div>
    )
}