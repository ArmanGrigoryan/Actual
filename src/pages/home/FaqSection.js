import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
import { Link } from 'react-router-dom';
import ModalVideo from 'comp/Elements/ModalVideo';

const FaqSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div className="rs-faq-part style1 orange-style pt-50 pb-50 md-pt-30 md-pb-30">
            <ModalVideo
                videoUrl="https://www.youtube.com/embed/yb9Qrzx1eMU?autoplay=1&start=0&vq=hd720"
                isOpen={isOpen}
                closeHandler={toggleModal}
            />

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 padding-0">
                        <div className="main-part h-100 h-full">
                            <div className="title mb-40 md-mb-14">
                                <h2 className="text-part">Հաճախ տրվող հարցեր</h2>
                            </div>
                            <div className="faq-content">
                                <Accordion className="accordion-style1" preExpanded={'h'}>
                                    <AccordionItem className="accordion-item" uuid="h">
                                        <AccordionItemHeading className="card-header">
                                            <AccordionItemButton className="card-link">
                                                Ինչու՞ հենց Ակտուալ
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="card-body">
                                            Ակտուալը տարիներ շարունակ թողարկել է նմանը չունեցող նախագծեր, որոնց արդյունքում ձևավորվել և աշխատաշուկայում իրենց ուրույն տեղն են գտել բազմաթիվ կադրեր։
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem className="accordion-item" uuid="a">
                                        <AccordionItemHeading className="card-header">
                                            <AccordionItemButton className="card-link">
                                                Ինչպիսի՞ դասընթացներ ունեք
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="card-body">
                                            <pre>
                                                {`Դասընթացները հետևյալն են՝
        - Մարդկային ռեսուրսների կառավարման դասընթաց սկսնակների համար,
        - Մարդկային ռեսուրսների կառավարման դասընթաց՝ 10/16 վերապատրաստում գործով մասնագետների համար,
        - Կադրային գործավարություն և ՀՀ Աշխատանքային օրենսգիրք,
        - Բիզնես անգլերեն՝ եռամսյա հատուկ դասընթաց,
        - Excel և վերլուծությունը հատուկ դասընթաց:
Մանրամասների համար զանգահարեք՝  `}
                                                <a href="tel:(+374)44-30-30-28">(+374)44-30-30-28</a>
                                            </pre>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem className="accordion-item" uuid="d">
                                        <AccordionItemHeading className="card-header">
                                            <AccordionItemButton className="card-link">
                                                Պրակտիկայի հարցում օգնու՞մ եք
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="card-body">
                                            Այո, Ակտուալը համագործակցում է կազմակերպությունների հետ, որտեղ կարող եք անցնել ուսումնական պրակտիկա։
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem className="accordion-item" uuid="f">
                                        <AccordionItemHeading className="card-header">
                                            <AccordionItemButton className="card-link">
                                                Որտե՞ղ է գտնվում Ակտուալը
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="card-body">
                                            Մեր հասցեն է ք․ Երևան, Խանջյան 19։ 
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                                
                                <div className='blog-button text-right mt-20'>
                                    <Link to="/about" className="blog-btn">
                                        Ավելին
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`col-lg-6 padding-0 ${isOpen ? "z-index-1" : ""}`}>
                        <div className={`img-part media-icon orange-color ${isOpen ? "overlay" : ""}`}>
                            <div className="popup-videos" onClick={toggleModal}><i className="fa fa-play"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqSection;