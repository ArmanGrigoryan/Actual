import React from "react";

export default function BrandItem({ src }) {

    return (
        <div className="partner-item">
            <div className="logo-img">
                <img className="main-logo" src={src} alt={src} />
            </div>
        </div>
    )
}