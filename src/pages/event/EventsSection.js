import React from 'react';
import SingleCard from './event-single/SingleCard';
import SectionTitle from 'comp/Common/SectionTitle';
import { useQuery } from 'react-query';
import { getEvents } from 'api';
import BarLoader from "react-spinners/BarLoader";
import { LoadingSpinnerSettings } from 'helpers';

const Events = () => {
    const { data, isFetched } = useQuery("events", getEvents);

    return (
        <div className="rs-event modify2 orange-style pt-30 pb-50  md-pb-30">
            <div className="container md-max-w-unset wider">
                <SectionTitle
                    sectionClass="sec-title2 text-center mb-20"
                    subtitleClass="sub-title mb-0"
                    subtitle="Դարձիր Ակտուալ անդամ"
                    titleClass="title black-color"
                    title="Իրադարձություններ"
                />

                <div className="row gap-30 md-gap-20 mr-20 mobile-mr-10 ml-20 mobile-ml-10">
                    {
                        isFetched ?
                        data.map(event => (
                            <div 
                                key={event.id} 
                                className="min-col-4-gap min-col-6-gap col-md-6-gap col-xs-12 p-0 xs-px-0 radius-12 cursor-pointer"
                            >
                                <SingleCard
                                    eventClass='event-item radius-12'
                                    {...event}
                                />
                            </div>
                        )) :
                        <BarLoader color="rgba(48, 32, 197)" cssOverride={LoadingSpinnerSettings} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Events;