import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { AnimationInterval, FadeAnimationItems, FadeAnimationItemsReversed, ForwardAnimationParams } from "helpers";

export default function useScrollTop() {
	const [isVisible, setIsVisible] = useState(false);
    const animateRef = useRef();
    const location = useLocation();

	const scrollToTop = useCallback(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, []);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 200 && !isVisible) {
				setIsVisible(true);

                animateRef.current.animate(FadeAnimationItems, ForwardAnimationParams);
			} 
            else if(window.pageYOffset <= 200 && isVisible) {
                animateRef.current.animate(FadeAnimationItemsReversed, ForwardAnimationParams);

                setTimeout(() => setIsVisible(false), AnimationInterval);
            }
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, [isVisible]);

    useEffect(() => {
        const elementId = location.hash;
        if (elementId) {
            const element = document.getElementById(elementId);
            element?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [location.hash]);

    return {
        isVisible,
        animateRef,
        scrollToTop,
    }
}