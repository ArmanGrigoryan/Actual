import React from 'react';
import SliderDefault from 'comp/Slider/SliderDefault';
import Cta from './CtaSection';
import FaqSection from './FaqSection';
import Testimonial from './TestimonialSection';
import ScrollToTop from 'comp/Common/ScrollTop';
import BrandThree from 'comp/Common/Brand/BrandThree.js';
import Videos from './VideoSection.js';
import WithLoveNewsWithPreview from './WithLoveNews';

const HomeMain = () => {

	return (
		<>
			<SliderDefault />
			<WithLoveNewsWithPreview />
			<Videos />
			<Cta />
			<FaqSection />
			<Testimonial />
			<BrandThree brandClass='rs-partner pb-50 pt-50 sec-title2' />
			<ScrollToTop />
		</>
	);
}

export default HomeMain;