import React from 'react';

const SectionTitle = (props) => {
    const { titleClass, subtitleClass, bottomSubTitleClass, descClass, secondDescClass, effectClass, hrClass } = props;

    return (
        <div className={props.sectionClass}>
            {subtitleClass ? <div className={props.subtitleClass}>{props.subtitle}</div> : ''}
            {titleClass ? <h2 className={props.titleClass}>{props.title}</h2> : ''}
            {bottomSubTitleClass ? <div className={props.bottomSubTitleClass}>{props.bottomSubTitle}</div> : ''}
            {descClass ? <div>
                <div className={props.descClass}>{props.description}</div>
                <div className={props.descClass}>{props.detailedDescription}</div>
                { props.detailedDescription && <>
                    <div>Եկե՛ք զարգացնենք Ձեր բիզնեսը միասին 🧡</div> 
                    <hr className={hrClass || ""} />
                </> }
            </div> : ''}
            {secondDescClass ? <div className={props.secondDescClass}>{props.secondDescription}</div> : ''}
            {effectClass ? <div className={props.effectClass}></div> : ''}
        </div>
    );
}

export default SectionTitle;