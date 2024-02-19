import { useRef, useState } from "react";
import { HeightScrollAnimationParams } from "helpers";

export default function useScrollAnimate() {
    const animateRef = useRef();
    const [isExpandable, setIsExpandable] = useState(false);
    const [moreButtonVisible, setMoreButtonVisible] = useState(true);

    const toggleImages = () => {
        const fullHeight = animateRef.current?.scrollHeight;
        const minHeight = 600;

        const keyFrames = [
            { height: `${isExpandable ? fullHeight : minHeight}px` },
            { height: `${!isExpandable ? fullHeight : minHeight}px` }
        ];

        Promise.resolve(animateRef.current.animate(keyFrames, HeightScrollAnimationParams))
        .then(res => {
            setMoreButtonVisible(false);
            if (res.finished) {
                setTimeout(() => {
                    setIsExpandable(prev => !prev);
                    setMoreButtonVisible(true);
                }, 2000);
            }
        });
    }

    return {
        animateRef,
        isExpandable,
        moreButtonVisible,
        toggleImages,
    }
}