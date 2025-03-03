import { keyframes, styled } from 'styled-components';

const slideShow = keyframes`
    from {
        -webkit-transform: translateX(0%);
    }
    to {
        -webkit-transform: translateX(-100%);
    }
`;

export const ImageSlider = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    position: relative;
    z-index: 0;
    @media only screen and (max-width: 991px) {
        padding-top: 30px;
    }
    @media only screen and (max-width: 624px) {
        padding-top: 30px;
        width: 100%;
    }
    &::before {
        left: 0;
    }
    &::after {
        right: 0;
        transform: rotateZ(180deg);
    }
`;

export const ImageSlide = styled.div`
    animation: ${slideShow} 55s linear infinite;
   
    div {
        transition: all 0.3s ease-in-out;
        @media only screen and (max-width: 991px) {
            margin: 0 20px;
        }
        @media only screen and (max-width: 624px) {
            margin: 0 5px;
        }
        img {
            @media only screen and (max-width: 1360px) {
                max-width: 100%;
            }
            @media only screen and (max-width: 991px) {
                max-width: 80%;
            }
        }
    }

    @media (max-width: 769px) {
        padding: 0 10px;
    }
`;

export const LogosSliderWrapper = styled.section`
    width: 100%;
    z-index: 0;
    position: relative;
    overflow: hidden;
    .logos {
        display: flex;
        align-items: space-between;
        padding: 0px 30px;
        .logo-image {
            position: relative;
            z-index: 0;
            width: 120px;
            height: 100px;
            filter: opacity(0.6);
            margin-right: 60px;
            &:last-of-type {
                margin-right: 0px;
            }
            .cover {
                position: absolute;
                left: 0px;
                top: 0px;
                transition: 0.4s ease-in;
            }
            &:hover {
                .cover {
                    opacity: 0;
                }
            }
        }
    }

    @media (max-width: 769px) {
        .logos {
            gap: 0px;
            .logo-image {
                width: 70px;
                height: 50px;
                margin-right: 30px;
            }
        }
    }
`;
