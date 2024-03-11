import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import BrandItem from './Item';
import brand1 from 'media/partners/Mersoft.png';
import brand2 from 'media/partners/Ador.png';
import brand3 from 'media/partners/Breavis.png';
import brand4 from 'media/partners/Exterior.png';
import brand5 from 'media/partners/Tsiran.png';
import brand6 from 'media/partners/Eye-Optics.png';
import brand7 from 'media/partners/ANAU.png';
import brand8 from 'media/partners/PAK.png';

const BrandThree = (props) => {
    const { brandBg, brandClass } = props;
    const [visible, setVisible] = useState(false);

    const brandBgStyle = {
        backgroundImage: `url(${brandBg ? brandBg : ''})`
    }

    const brandBgDefaultStyle = {
        backgroundColor: 'transparent'
    }

    useEffect(() => {
        setTimeout(() => setVisible(true), 1000);
    }, []);

    return (
        <div className={brandClass ? brandClass : 'rs-partner sec-title style2 pt-40 md-pt-20'} style={brandBg ? brandBgStyle : brandBgDefaultStyle}>
            <h2 className='title text-center mb-20'>Ակտուալի գործընկերները</h2>

            { visible && <Marquee>
                <BrandItem src={brand1} />
                <BrandItem src={brand2} />
                <BrandItem src={brand3} />
                <BrandItem src={brand4} />
                <BrandItem src={brand5} />
                <BrandItem src={brand6} />
                <BrandItem src={brand7} />
                <BrandItem src={brand8} />
                <BrandItem src={brand1} />
                <BrandItem src={brand2} />
                <BrandItem src={brand3} />
                <BrandItem src={brand4} />
                <BrandItem src={brand5} />
                <BrandItem src={brand6} />
                <BrandItem src={brand7} />
                <BrandItem src={brand8} />
            </Marquee> }
        </div>
    );
}

export default BrandThree;