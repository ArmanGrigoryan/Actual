import React from 'react';
import { Helmet } from 'react-helmet-async';

const env = import.meta.env;

export default function SEO({ title, description, type="article section", path="" }) {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={`${env.VITE_APP_APPLICATION_TITLE}, Inc.`} />
            <meta property="og:url" content={env.VITE_APP_APPLICATION_URL + path + "/index.htm"} />
            <meta name="twitter:image:alt" content={`${env.VITE_APP_APPLICATION_TITLE}, ${env.VITE_APP_APPLICATION_TITLE_SECOND}, ${env.VITE_APP_APPLICATION_TITLE_THIRD}`} />

            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}