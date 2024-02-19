import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from 'comp/Common/SectionTitle';

const Cta = () => {

    return (
        <div className="rs-cta main-home">
            <div className="partition-bg-wrap">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-6 col-lg-6 pl-70 md-pl-14">
                            <SectionTitle
                                sectionClass="sec-title2 mb-40"
                                titleClass="title white-color mb-16"
                                title="Միացիր հիմա - Ստացիր 5% զեղչ"
                                descClass="desc white-color pr-100 md-pr-0"
                                description="Ակտուալը մասնագիտացված ընկերություն է, որը տրամադրում է տարբեր ընկերությունների 
                                Մարդկային ռեսուրսների կառավարման մեխանիզմների ներդրման ծառայություններ: Ուղղվածությունները երեքն են՝ 
                                Դասընթացներ, Աութսորս ծառայություններ և Խորհրդատվություն: Ակտուալի համընդհանուր համագործակցության 
                                շրջանակներն օրեցօր ընդլայնվում են, ՀՀ շուկայում կազմելով շուրջ 2000:"
                            />
                            <div className="btn-part">
                                <Link className="readon orange-btn white-transparent" to="/course">Գրանցվել Հիմա</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;