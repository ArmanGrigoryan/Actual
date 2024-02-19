import React from "react";
import { useScrollAnimate } from "hooks";

export default function withGalleryActions(Component) {
    return function withGalleryActionsComponent({ openPreviewHandler }) {
        const {
            animateRef: contentRef,
            isExpandable,
            moreButtonVisible,
            toggleImages,
        } = useScrollAnimate();

        return (
            <div className="gallery sec-title">
                <div className="container">
                    <h3 className="sub-title orange">Դարձիր Ակտուալի մի մասը</h3>
                    <h1 className="title">Արխիվ</h1>
                </div>

                <div 
                    ref={contentRef} 
                    className={`gallery-wrapper ${isExpandable ? "expanded" : ""}`}
                >
                    <Component openPreviewHandler={openPreviewHandler} />
                </div>

                <div className={`more-section ${!isExpandable ? "card-shadow-top" : ""}`}>
                    <h1 className={`cursor-pointer ${!moreButtonVisible ? "hidden-opacity" : ""}`} onClick={toggleImages}>
                        <span className="let1">ա</span>
                        <span className="let2">վ</span>
                        <span className="let3">ե</span>
                        <span className="let4">լ</span>
                        <span className="let5">ի</span>
                        <span className="let6">ն</span>
                        {
                            isExpandable ?
                            <span className="let7">&uarr;</span> :
                            <span className="let7">&darr;</span>
                        }
                    </h1>
                </div>
            </div>
        )
    }
}