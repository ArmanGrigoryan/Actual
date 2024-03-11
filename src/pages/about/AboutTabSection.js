import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import aboutImg from 'media/about/team.jpg';
import araqelutyunImg from 'media/about/araqelutyun.jpg';
import administraciaImg from 'media/about/administracia.jpg';
import { FadeAnimationItems } from 'helpers'

const tab1 = "Գործունեություն",
tab2 = "Առաքելություն",
tab3 = "Ադմինիստրացիա";
const tabStyle = 'nav nav-tabs histort-part';

const AboutTab = () => {
    const [tab, setTab] = useState(tab1);
    const refElement1 = useRef(null);
    const refElement2 = useRef(null);
    const refElement3 = useRef(null);

    const Image1 = useMemo(() => (
        <img
            ref={refElement1}
            src={aboutImg}
            alt="About" 
            className="radius-12 about-tabs-image card-shadow-deep"
        />
    ), []);

    const Image2 = useMemo(() => (
        <img
            ref={refElement2}
            src={araqelutyunImg}
            alt="About" 
            className="radius-12 about-tabs-image card-shadow-deep"
        />
    ), []);

    const Image3 = useMemo(() => (
        <img
            ref={refElement3}
            src={administraciaImg}
            alt="About" 
            className="radius-12 about-tabs-image card-shadow-deep"
        />
    ), []);

    useEffect(() => {
        if (tab === tab1) {
            refElement1.current?.animate(FadeAnimationItems, 1000)
        }
        else if (tab === tab2) {
            refElement2.current?.animate(FadeAnimationItems, 1000)
        }
        else {
            refElement3.current?.animate(FadeAnimationItems, 1000)
        } 
    }, [tab])

    return (
        <div className="rs-about style1 pt-40 pb-40 md-pt-20 md-pb-20">
            <div className="container">
                <Tabs>
                    <div className="row align-items-center xs-px-20 md-mr-20 md-ml-20 xs-mx-0">
                        <div className="col-lg-6 p-25 md-mb-20 relative">
                            <div className={`img-part text-center ${tab === tab2 ? "higher" : ""}`}>
                                {
                                    tab === tab2 ? 
                                        Image2 : 
                                            tab === tab3 ?
                                            Image3 :
                                                Image1
                                }
                            </div>
                            <TabList className={tabStyle}>
                                <Tab onClick={() => setTab(tab1)}>
                                    <button className="cursor-pointer"><span className="icon-part"><i className="flaticon-banknote"></i></span>{tab1}</button>
                                </Tab>
                                <Tab onClick={() => setTab(tab2)}>
                                    <button className="cursor-pointer"><span className="icon-part"><i className="flaticon-flower"></i></span>{tab2}</button>
                                </Tab>
                                <Tab onClick={() => setTab(tab3)}>
                                    <button className="cursor-pointer"><span className="icon-part"><i className="flaticon-analysis"></i></span>{tab3}</button>
                                </Tab>
                            </TabList>
                        </div>
                        <div className="col-lg-6 pl-50 md-pl-0">
                            <TabPanel>
                                <div className="about-history">
                                    <div className="sec-title mb-20">
                                        <h2 className="title">Ակտուալի Գործունեությունը</h2>
                                        <div className="desc">Դասընթացներ: Մենք իրականացնում ենք դասընթացներ ինչպես անհատների այնպես էլ կորպորատիվ փաթեթների շրջանակում: բիզնես անգլերենի, Մարդկային ռեսուրսների կառավարման և համակարգչային գիտելիքների վերազինման դասընթացներ: Ավելի քան  500 մասնակից արդեն հասցրել են գիտելիքներով վերազինվել մեր ընկերության օգնությամբ:</div>
                                        <div className="desc">Աութսորս ուղղվածությունը մեր ընկերության ամենադինամիկ աճ ապահովող կողմներից է: Մեր արհեստավարժ թիմը ամբողջ աշխատաժամանակով գործունեություն կծավալի ձեր բիզնեսում, ներդնելով՝ ՄՌԿ ստանդարտներ, կորպորատիվ մշակույթ, արժեհամակարգ և այն ամենը ինչը առնչվում է մարդկային ռեսուրսների կառավարման գործիքակազմին: Աութսորս ծառայության համար գործում են տարբեր փաթեթներ, որոնք տեղայնացվում են տվյալ բիզնեսի կատարողականին</div>
                                        <div className="desc">Խորհրդատվական ծառայությունը իրականացվում է անմիջապես հիմնադիր տնօրենի մասնակցությամբ: Բիզնես պրոցեսների օպտիմալացում, անձնակազմի կառավարման հիմնախնդիրների վերհանում և կարգավորում:</div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="about-mission">
                                    <div className="sec-title mb-20">
                                        <h2 className="title">Ակտուալի տեսլականը</h2>
                                        <div className="desc">«Ակտուալ» մարդկային ռեսուրսների կառավարման գործակալության նպատակն է ՀՀ-ում գործող
                                            կազմակերպություններին մասնագիտական և փորձի վրա հիմնված ծառայություններ մատուցելը:
                                            Ժամանակակից կազմակերպությունների անբաժան մասն է կազմում «Մարդկային ռեսուրսների կառավարման»
                                            մեխանիզմը, որը իր գործունեությամբ նպաստում է կազմակերպության համար սահմանված բոլոր նպատակների
                                            իրագործմանը աշխատակիցների միջոցով:
                                            Մեր փորձառու թիմը կօգնի ցանկացած բիզնեսին Մարդկային ռեսուրսների կառավարման ցանկացած խնդիրները
                                            լուծելու և արդյունք ապահովելու հարցում՝
                                            Կադրերի հավաքագրում
                                            ՄՌԿ համակարգի ներդրում
                                            Ռազմավարության մշակում
                                            Կորպորատիվ մշակույթի հիմնում
                                            Անձնակազմի ուսուցման և զարգացման մեխանիզմի հիմնում
                                            Անձնակազմի աշխատավարձերի վարձատրության մեխանիզմի հիմնում
                                            Արդյունավետության ցուցանիշների հիմնում (KPI)
                                            Անձնակազմի կառավարման բոլոր գործառույթների հիմնում և իրականացում
                                            Մեզ հետ միասին՝ առանց գլխացավանքի
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="about-admin">
                                    <div className="sec-title mb-20">
                                        <h2 className="title">ԱՄԵՆԱՄՅԱ ՄԻՋՈՑԱՌՈՒՄՆԵՐ</h2>
                                        <div className="desc">Ակտուալը, իր գործունեության ընթացքում, իրականացրել և իրականացնում է երկու կարևոր, ամենամյա միջոցառումներ, որոնց ունեն հատուկ նշանակություն և նպատակ
                                            <ol className="list">
                                                <li>
                                                    <strong>THE MASTER</strong> նախագիծը, որը նմանը չունեցող գաղափար է, որը իրագործվեց և հաջողեց, իր շուրջը
                                                    միավորելով թե ուսանողին թե՝ գործատուին: Հայաստանի առաջատար բարձրագույն ուսումնական
                                                    հաստատությունների այն մագիստրոսները, ովքեր գրել են՝ կառավարման, տնտեսագիտության կամ
                                                    գյուղատնտեսության ուղղվածությունների մագիստրոսական աշխատանքներ, հաջողությամբ պաշտպանել են
                                                    և վաստակել առավելագույն միավորները, կարող են նոմինացվել մրցույթին և արժանանալ դրամական
                                                    խրախուսանքի հենց բիզնեսի ներկայացուցչի կողմից: Նախագծի մանրամասները՝ նկարներով
                                                </li>
                                                <li>
                                                    <strong>THE VOICE OF HR</strong> առաջին անգամ ՄՌԿ գործունեություն ծավալող մասնագետների համար ստեղծվել է
                                                    հարթակ, խոսելու և բարձրարայնելու մասնագիտական գործունեության ընթացքում առաջ եկած
                                                    դժվարությունների և մարտահրավերների մասին: Ներկայացնելու վերջիններիս լուծումները և
                                                    հաղթահարման ոջղիները: Մանրամասները՝ նկարներով
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

export default AboutTab;