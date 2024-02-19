import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import SectionTitle from 'comp/Common/SectionTitle';
import countIcon1 from 'media/about/style3/icons/1.png';
import countIcon2 from 'media/about/style3/icons/2.png';
import countIcon3 from 'media/about/style3/icons/3.png';

const counters = [
    {
        countNum: 500,
        countTitle: 'Ուսանող',
        counterPrefix: '+',
        countIcon: countIcon1
    },
    {
        countNum: 88,
        countTitle: 'Միջին գնահատական',
        counterPrefix: '',
        countIcon: countIcon2
    },
    {
        countNum: 95,
        countTitle: 'Շրջանավարտ',
        counterPrefix: '%',
        countIcon: countIcon3
    }
];

const AboutCounter = () => {
    const [isReadyOnce, setIsReadyOnce] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const onChange = (value) => {
        if (!isReadyOnce && value) setIsReadyOnce(true);
    };

    const onEnd = () => {
        if (isReadyOnce || !isAnimated) setIsAnimated(true);
    };

    return (
        <div id="rs-about" className="rs-about style3 pt-50 md-pt-30">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-4 lg-pr-0 md-mb-30">
                        <div className="about-intro md-pr-16">
                            <SectionTitle
                                sectionClass="sec-title"
                                subtitleClass="sub-title orange"
                                subtitle=""
                                titleClass="title mb-20"
                                title="Մեր ուսանողների վերջնական արդյունքները"
                                description="Հաջողության բանալին գնահատելն է, թե ինչպես են մարդիկ սովորում, հասկանալ մտքի գործընթացը, որը մտնում է ուսումնական ձևավորման մեջ, ինչն է լավ աշխատում և մի շարք տարբեր բաներ:"
                                descClass="desc big"
                            />
                        </div>
                    </div>
                    <div className="col-lg-8 pl-82 md-pl-14">
                        {counters &&
                            <div className="row rs-counter counter-area">
                                {counters.map(counter => (
                                    <div key={counter.countNum} className="col-md-4 sm-mb-30">
                                        <div className="counter-item one">
                                            <img loading="lazy" className="count-img" src={counter.countIcon} alt="" />
                                            <h2 className="number rs-count mt-10 mb-0">
                                                <VisibilitySensor onChange={onChange}>
                                                    {({ isVisible }) => (
                                                        <div>
                                                            <CountUp 
                                                                onEnd={onEnd}
                                                                redraw={true} 
                                                                start={!isAnimated ? 0 : counter.countNum} 
                                                                end={isVisible && isReadyOnce ? counter.countNum : 0} 
                                                                duration={2} 
                                                            />
                                                            <span className="counter-prefix">{counter.counterPrefix}</span>
                                                        </div>
                                                    )}
                                                </VisibilitySensor>
                                            </h2>
                                            <h4 className="title mb-0">{counter.countTitle}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCounter;