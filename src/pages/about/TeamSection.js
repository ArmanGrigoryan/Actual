import React, { Suspense } from 'react';
import SingleTeam from 'comp/Team/SingleTeam';
import SectionTitle from 'comp/Common/SectionTitle';
import withPreviewPopup from 'comp/HOC/withPreviewPopup';
import SlideShow from 'comp/SlideShow';
import { ArchiveImages } from 'helpers';
import { TeamSliderSettings as sliderSettings } from 'helpers';
import team1 from 'media/team/1.jpeg';
import team2 from 'media/team/2.jpg';
import team3 from 'media/team/3.jpg';
import team4 from 'media/team/4.jpg';
import team5 from 'media/team/5.jpg';
import team6 from 'media/team/6.jpg';
import team7 from 'media/team/7.jpg';
import team8 from 'media/team/8.jpeg';
import team9 from 'media/team/9.jpeg';

const Slider = React.lazy(() => import("react-slick"));

const SlideShowWithPreview = withPreviewPopup(SlideShow);

const Team = () => {

    return (
        <div className="rs-team style1 inner-style orange-color mt-0 sm-pt-20 pt-40 pb-40 gray-bg">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-md-6 sm-mb-0">
                        <SectionTitle
                            sectionClass="sec-title"
                            subtitleClass="sub-title orange sm-mb-0"
                            subtitle="Գործընկերներ"
                            titleClass="title mb-20"
                            title="Ակտուալի թիմը"
                        />
                    </div>
                </div>

                <Suspense fallback={<></>}>
                    <Slider {...sliderSettings}>
                        <SingleTeam
                            teamClass="team-item"
                            isCovering={true}
                            image={team2}
                            Title="Սիրանուշ Բարսեղյան"
                            Designation="ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            isCovering={true}
                            image={team3}
                            Title="Լաուրա Վիրաբյան"
                            Designation="Հիմնադիր տնօրեն, Ավագ ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            isCovering={true}
                            image={team4}
                            Title="Մոնիկա Գրիգորյան"
                            Designation="ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            isCovering={true}
                            image={team6}
                            Title="Լիլիթ Դավթյան"
                            Designation="ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            isCovering={true}
                            image={team7}
                            Title="Հասմիկ Սիմոնյան"
                            Designation="ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            teamClass="team-item"
                            isCovering={true}
                            image={team5}
                            Title="Լիլիթ Սաղաթելյան"
                            Designation="ՄՌԿ մասնագետ"
                        />

                        <SingleTeam
                            itemClass="team-item"
                            isCovering={true}
                            image={team1}
                            Title="Աննա Թովմասյան"
                            Designation="Թարգմանչուհի"
                        />

                        <SingleTeam
                            itemClass="team-item"
                            isCovering={true}
                            image={team8}
                            Title="Մարինե Հովհաննիսյան"
                            Designation="Փաստաբան"
                        />

                        <SingleTeam
                            itemClass="team-item"
                            isCovering={true}
                            image={team9}
                            Title="Գայանե Ղուկասյան"
                            Designation="Excel մասնագետ"
                        />
                    </Slider>
                </Suspense>
            </div>

            <SlideShowWithPreview images={ArchiveImages} />
        </div>
    )
}

export default Team;