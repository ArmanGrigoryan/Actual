import { useEffect, useRef } from "react";
import { FadeAnimationItems, ForwardAnimationParams } from "helpers";

export default function useAnimateOnMount(forwardedRef) {
    const animateRef = useRef();

    useEffect(() => {
        const currentRef = forwardedRef || animateRef;

        currentRef.current.animate(FadeAnimationItems, ForwardAnimationParams);
    }), [];

    return  {
        refElement: forwardedRef || animateRef
    }
}