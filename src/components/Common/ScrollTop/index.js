import React from "react";
import { useScrollTop } from "hooks";

const ScrollToTop = () => {
	const {
        isVisible,
        animateRef,
        scrollToTop,
    } = useScrollTop();

	return (
		<div ref={animateRef} className="scrollup">
			{isVisible && (
				<div onClick={scrollToTop}>
					<i className="fa fa-angle-up"></i>
				</div>
			)}
		</div>
	);
}

export default ScrollToTop;