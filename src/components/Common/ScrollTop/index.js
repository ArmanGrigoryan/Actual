import React from "react";
import { useScrollTop } from "hooks";

const ScrollToTop = ({ scrollClassName }) => {
	const {
        isVisible,
        animateRef,
        scrollToTop,
    } = useScrollTop();

	return (
		<div ref={animateRef} className={ scrollClassName ? scrollClassName : 'scrollup'}>
			{isVisible && (
				<div onClick={scrollToTop}>
					<i className="fa fa-angle-up"></i>
				</div>
			)}
		</div>
	);
}

export default ScrollToTop;