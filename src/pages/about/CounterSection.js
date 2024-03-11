import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
import SectionTitle from 'comp/Common/SectionTitle';
import { AboutTabCounters as counters } from 'helpers';

const AboutCounter = () => {
    const [isReadyOnce, setIsReadyOnce] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);

    const onChange = (value) => value && setIsReadyOnce(true);

    const onEnd = () => isReadyOnce && setIsAnimated(true);

    return (
        <div id="rs-about" className="rs-about style3 pt-40 md-pt-20 md-mr-20 md-ml-20 xs-px-0 md-px-25">
            <div className="container md-max-w-unset">
                <div className="row align-items-center px-25 md-pr-0 md-pl-0">
                    <div className="col-lg-4 lg-pr-0 md-mb-20">
                        <div className="about-intro md-pr-20">
                            <SectionTitle
                                sectionClass="sec-title"
                                subtitleClass="sub-title primary"
                                subtitle=""
                                titleClass="title mb-20"
                                title="Մեր ուսանողների վերջնական արդյունքները"
                                description="Հաջողության բանալին գնահատելն է, թե ինչպես են մարդիկ սովորում, հասկանալ մտքի գործընթացը, որը մտնում է ուսումնական ձևավորման մեջ, ինչն է լավ աշխատում և մի շարք տարբեր բաներ:"
                                descClass="desc big"
                            />
                        </div>
                    </div>
                    <div className="col-lg-8 pl-80 md-pl-20">
                        {counters &&
                            <div className="row">
                                {counters.map(counter => (
                                    <div key={counter.countNum} className="col-md-4 md-mb-20 text-center">
                                        <div className="text-center one">
                                            <img loading="lazy" className="max-w-110" src={counter.countIcon} alt="" />
                                            <h2 className="number rs-count mt-10 mb-0">
                                                <VisibilitySensor onChange={onChange}>
                                                    {() => (
                                                        <div>
                                                            <CountUp 
                                                                onEnd={onEnd}
                                                                redraw={false}
                                                                start={isReadyOnce && !isAnimated ? 0 : counter.countNum} 
                                                                end={counter.countNum} 
                                                                duration={3}
                                                            />
                                                            <span className="counter-prefix">{counter.counterPrefix}</span>
                                                        </div>
                                                    )}
                                                </VisibilitySensor>
                                            </h2>
                                            <h5 className="title mb-0 xs-fs-14">{counter.countTitle}</h5>
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