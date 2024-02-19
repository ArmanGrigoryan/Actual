import React from 'react';
import Marquee from 'react-fast-marquee';
import BrandItem from './Item';
import brand1 from 'media/partners/Mersoft.png';
import brand2 from 'media/partners/Ador.png';
import brand3 from 'media/partners/Breavis.png';
import brand4 from 'media/partners/Exterior3.png';
import brand5 from 'media/partners/Tsiran3.png';
import brand6 from 'media/partners/Eye-Optics3.png';
import brand7 from 'media/partners/ANAU3.png';
import brand8 from 'media/partners/PAK3.png';

const BrandThree = (props) => {
    const { brandBg, brandClass } = props;

    const brandBgStyle = {
        backgroundImage: `url(${brandBg ? brandBg : ''})`
    }

    const brandBgDefaultStyle = {
        backgroundColor: 'transparent'
    }

    return (
        <div className={brandClass ? brandClass : 'rs-partner style2 pt-50 md-pt-30'} style={brandBg ? brandBgStyle : brandBgDefaultStyle}>
            <h2 className='title'>Ակտուալի գործընկերները</h2>

            <Marquee>
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
            </Marquee>
        </div>
    );
}

export default BrandThree;