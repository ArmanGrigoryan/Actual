import React, { Suspense } from 'react';
import AboutVideo from './VideoSection';
import AboutCounter from './CounterSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from 'comp/Common/ScrollTop';
import AboutText from './AboutTextSection.js';
import AboutTab from './AboutTabSection.js';
import Faq from 'comp/FAQ';

const Team = React.lazy(() => import("./TeamSection"));

const AboutMain = () => {

    return (
        <>
            <AboutText />
            <AboutVideo />
            <AboutCounter />
            <AboutTab />
            <Suspense fallback={<></>}>
                <Team />
            </Suspense>
            <Testimonial />
            <Faq />
			<ScrollToTop scrollClassName="scrollup orange-color" />
        </>
    )
}

export default AboutMain;