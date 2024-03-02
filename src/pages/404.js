import React from 'react';
import ErrorContent from 'comp/Error';
import { useFade } from 'hooks';
import SEO from 'comp/SEO';

const env = import.meta.env;

const Error = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title={`${env.VITE_APP_APPLICATION_TITLE} | Ակտուալ - Էջը չի գտնվել`}
                description='Էջը չի գտնվել, փորձեք ավելի ուշ կամ վերադարձեք Ակտուալի գլխավոր էջ:'
            />
            <ErrorContent />
        </div>
    );
}

export default Error;