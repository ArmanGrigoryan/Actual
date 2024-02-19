import React, { Suspense } from 'react';
import SectionTitle from 'comp/Common/SectionTitle';
import SingleTestimonial from 'comp/Testimonial/SingleTestimonial';
import quote from 'media/testimonial/main-home/test-2.png';
import female from 'media/icon/female.png';

const Slider = React.lazy(() => import("react-slick"));

const Testimonial = () => {

    const testimonialSettings = {
        dots: true,
        centerMode: false,
        infinite: true,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        lazyLoad: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <div className="rs-testimonial main-home pt-50 pb-50  md-pb-30">
            <div className="container">
                <SectionTitle
                    sectionClass="sec-title2 mb-50 md-mb-30 text-center"
                    subtitleClass="sub-title primary"
                    subtitle=""
                    titleClass="title white-color"
                    title="Կարծիքներ մեր մասին"
                    effectClass="heading-line"
                />
                <Suspense fallback={<></>}>
                    <Slider {...testimonialSettings}>
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={female}
                            Title="Լուսինե Մանուկյան"
                            Designation="ՄՌԿ մասնագետ"
                            Description="Ոչ միայն խորհուրդ կտամ մասնակցել , այլև ես ինքս մեծ սիրով կրկին կմասնակցեմ Ակտուալի կողմից անցկացվելիք դասընթացներին..."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={female}
                            Title="Արմինե Աղաջանյան"
                            Designation="ՄՌԿ մասնագետ"
                            Description="Ակտուալը նորն ու այժմեականը լսելու վստահելի հարթակ է..."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={female}
                            Title="Սուսաննա Մարտիրոսյան"
                            Designation="ՄՌԿ մասնագետ"
                            Description="Դասընթացը տվեց այն հնարավորությունը, որ կադրային գծով մասնագետը դառնա բիզնես գործընկեր..."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={female}
                            Title="Սոնա Վարդանյան"
                            Designation="ՄՌԿ դասընթացի շրջանավարտ"
                            Description="Շատ շնորհակալ եմ արդիական դասընթացի, կազմակերպության գործնական խնդիրների վերաբերյալ մեծ քանակությանմբ տեղյակություն ստանալու համար..."
                        />
                        <SingleTestimonial
                            itemClass="testi-item"
                            quoteImage={quote}
                            authorImage={female}
                            Title="Աննա Օհանյան"
                            Designation="ՄՌԿ դասընթացի շրջանավարտ"
                            Description="Ակտուալ-ում Յուրաքանչյուր թեմա յուրովի հետաքրքիր է..."
                        />
                    </Slider>
                </Suspense>
            </div>
        </div>
    )
}

export default Testimonial