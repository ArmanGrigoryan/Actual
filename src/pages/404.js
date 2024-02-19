import React from 'react';
import ErrorContent from 'comp/Error';
import { useFade } from 'hooks';
import SEO from 'comp/SEO';

const Error = () => {
    const { refElement: animateRef } = useFade();

    return (
        <div ref={animateRef} className="hidden-opacity">
            <SEO
                title='Actual HR Agency | Ակտուալ - Էջը չի գտնվել'
                description='Էջը չի գտնվել, փորձեք ավելի ուշ կամ վերադարձեք Ակտուալի գլխավոր էջ:'
            />
            <ErrorContent />
        </div>
    );
}

export default Error;