import React from 'react';
import SectionTitle from 'comp/Common/SectionTitle';
import AboutImage from 'media/about/about2orange.png';

const AboutText = () => {

    return (
        <div className="rs-about style1 pt-50 pb-50 md-pt-30 md-pb-30">            
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 pr-70 md-pr-14 pl-20">
                        <div className="about-content">
                            <SectionTitle
                                sectionClass="sec-title mb-44 md-mb-0"
                                subtitleClass="sub-title orange"
                                subtitle=""
                                titleClass="title mb-16"
                                title="Ակտուալ-ի մասին"
                                descClass="bold-text mb-22"
                                description="Ակտուալը ժամանակակից հարթակ է, որտեղ Մարդկային ռեսուրսների կառավարմամբ հետաքրքրված յուրաքանչյուր
                                անձ, սկսնակից մինչև կայացած մասնագետ, կարող է ձեռքբերել գիտելիքներ և հմտություններ: Մարդկային
                                ռեսուրսների կառավարումը ամենապահանջված մասնագիտացումներից մեկն է և մենք ձեզ կօգնենք դառնալ
                                մրցունակ մասնագետ, փոխանցելով ձեզ՝ կառավարման ողջ հոգեկերտվածքը, գործիքակազմը և կիրառելիությունը:
                                Եթե, դուք չունեք փորձ, կարող եք գնել այն…"
                                secondDescClass="desc"
                                secondDescription="Ակտուալ ընկերությունը մշակել և ներդրել է հատուկ բիզնեսների համար նախագծված մի մեխանիզմ, 
                                որն իր ձևաչափով նոր մոտեցում է շուկայում մատուցվող ծառայությունների մեջ՝ Outsource In House մոտեցմամբ:
                                Ակուալի հմուտ և մասնագիտացված մարդկային ռեսուրսների կառավարման մասնագետները, աշխատանքային
                                ռեժիմով, գտնվում են բիզնեսում կատարելով ամենօրյա անհրաժեշտ աշխատանքները՝ ի բարորություն ձեր բիզնեսին:"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 padding-0 md-pl-14 md-pr-14 md-mb-30">
                        <div className="img-part animated">
                            <img loading="lazy" className="about-main" src={AboutImage} alt="About" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutText;