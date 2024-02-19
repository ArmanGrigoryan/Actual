import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from 'comp/Common/SectionTitle';
import ModalVideo from 'comp/Elements/ModalVideo';
import { DisplaySize } from "helpers";
import { useResponsive } from 'hooks';

const AboutVideo = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    const displaySize = useResponsive();

    return (
        <div className="rs-cta style2">
            <ModalVideo 
                videoUrl="https://www.youtube.com/embed/AsdPwN5-fHQ?autoplay=1&start=0&vq=hd720"
                isOpen={isOpen}
                closeHandler={toggleModal}
            />

            <div className="partition-bg-wrap inner-page">
                <div className="mx-30">
                    <div className="row y-bottom flex-nowrap md-flex-wrap">
                        <div className="col-lg-6 pb-50 md-pt-0 md-pb-0 d-flex align-items-center min-height-400">
                            <div className="video-wrap w-100">
                                <a className="popup-videos w-100" onClick={toggleModal}>
                                    <i className="fa fa-play"></i>
                                    <h5 className="title md-fs-18 xs-fs-14 mb-0 ml-10 md-ml-20 mr-10 mobile-fade-full-width width-30-100">
                                        {
                                            displaySize === DisplaySize.ComputerS || displaySize === DisplaySize.ComputerM ?
                                            "Կատարիր Շրջագայություն Ակտուալում" :
                                            "Շրջագայիր Ակտուալում"
                                        }
                                    </h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 ml-250 lg-pl-80 pl-120 pt-50 md-mt-0 pb-50 md-pl-10 md-pt-0 md-pb-30">
                            <SectionTitle
                                sectionClass="sec-title mb-40"
                                hrClass="hidden-md"
                                titleClass="title mb-16"
                                title="Ընդունելությունը բաց է"
                                descClass="desc"
                                description="𝗔𝗖𝗧𝗨𝗔𝗟 𝗛𝗥 𝗔𝗚𝗘𝗡𝗖𝗬-ն կօգնի Ձեր բիզնեսին նոր և պրոֆեսիոնալ մասնագետների հավաքագրման և առաջընթացի ապահովման գործում:"
                                detailedDescription="Մեր փորձառու մասնագետներից բաղկացած թիմը մշտապես կլինի Ձեր բիզնեսի կողքին՝ համալրելով Ձեր կազմակերպությունը ոչ միայն որակյալ և մրցունակ մասնագետներով, այլև գրագետ և ճիշտ բրենդավորելով Ձեր ընկերությունն աշխատաշուկայում՝ որպես գործատու"
                            />
                            <div className="btn-part">
                                <Link className="readon orange-btn primary-transparent radius-12" to="/course">Դիմել հիմա</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutVideo;