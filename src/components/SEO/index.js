import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, type="article section", path="" }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Actual HR Agency, Inc." />
            <meta property="og:url" content={"https://actualtc.am" + path + "/index.htm"} />
            <meta name="twitter:image:alt" content="Actual Training Center" />

            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}