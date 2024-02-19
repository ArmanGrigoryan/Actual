import { useEffect, useLayoutEffect, useRef } from "react";
import { FadeAnimationItems, ForwardAnimationParams } from "helpers";

export default function useFade(isScrolling = true) {
    const animateRef = useRef();

    useLayoutEffect(() => {
        if (isScrolling) {
            window.scrollTo(0, 0);
        }
    }, []);

    useEffect(() => {
        animateRef.current.animate(FadeAnimationItems, ForwardAnimationParams);
    }), [];

    return {
        refElement: animateRef
    }
}