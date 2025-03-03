import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { LogosSliderWrapper, ImageSlide, ImageSlider } from './LogosSlider.style';

export const data = [
  {
    color: "/assets/images/home/clients/mirtak-color.png",
    black: "/assets/images/home/clients/mirtak-black.png",
  },
  {
    color: "/assets/images/home/clients/germans-color.png",
    black: "/assets/images/home/clients/germans-black.png",
  },
  {
    color: "/assets/images/home/clients/bayer-color.png",
    black: "/assets/images/home/clients/bayer-black.png",
  },
  {
    color: "/assets/images/home/clients/clinic-black.png",
    black: "/assets/images/home/clients/clinic-black.png",
  },
  {
    color: "/assets/images/home/clients/dagram-color.png",
    black: "/assets/images/home/clients/dagram-black.png",
  },
  {
    color: "/assets/images/home/clients/aural-color.png",
    black: "/assets/images/home/clients/aural-black.png",
  },
  {
    color: "/assets/images/home/clients/hospital-de-la-paz-color.png",
    black: "/assets/images/home/clients/hospital-de-la-paz-black.png",
  },
  {
    color: "/assets/images/home/clients/gls-color.png",
    black: "/assets/images/home/clients/gls-black.png",
  },
  {
    color: "/assets/images/home/clients/idibell-color.png",
    black: "/assets/images/home/clients/idibell-black.png",
  },
  {
    color: "/assets/images/home/clients/keiser-color.png",
    black: "/assets/images/home/clients/keiser-black.png",
  },
  {
    color: "/assets/images/home/clients/laguna-color.png",
    black: "/assets/images/home/clients/laguna-black.png",
  },
  {
    color: "/assets/images/home/clients/sem-color.png",
    black: "/assets/images/home/clients/sem-black.png",
  },
  {
    color: "/assets/images/home/clients/ub-color.png",
    black: "/assets/images/home/clients/ub-black.png",
  },
  {
    color: "/assets/images/home/clients/uoc-color.png",
    black: "/assets/images/home/clients/uoc-black.png",
  },
  {
    color: "/assets/images/home/clients/sanofi-color.png",
    black: "/assets/images/home/clients/sanofi-black.png",
  },
  {
    color: "/assets/images/home/clients/amgen-color.png",
    black: "/assets/images/home/clients/amgen-black.png",
  },
  {
    color: "/assets/images/home/clients/aedv-color.png",
    black: "/assets/images/home/clients/aedv-black.png",
  },
];

const LogosSlider = () => {


    useEffect(() => {
        Aos.init({ duration: 3000 });
    });

    const displayLogos = () => {
        return (
            <ImageSlide>
                <div className="logos">
                    {data.map((logo: any, index: number) => (
                        <div className="logo-image" key={index}>
                            <img
                                alt="logo company"
                                src={logo.color}
                                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                            />
                            <img
                                alt="logo company"
                                src={logo.black}
                                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                                className="cover"
                            />
                        </div>
                    ))}
                </div>
            </ImageSlide>
        );
    };

    return (
        <LogosSliderWrapper>
            <ImageSlider>
                {/* both are necessary */}
                {displayLogos()}
                {displayLogos()}
            </ImageSlider>
        </LogosSliderWrapper>
    );
};

export default LogosSlider;
