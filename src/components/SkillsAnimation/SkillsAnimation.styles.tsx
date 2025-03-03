import styled from "styled-components";

export const SkillsAnimationWrapper = styled.div`
  padding: 10px 10% 100px 10%;
  height: 100vh;
  h2 {
    font-family: "Lufga Medium";
    font-size: 40px;
    margin: 24px 0px;
  }
  .descriptions {
    display: flex;
    gap: 48px;
    p {
      width: 50%;
      color: #000;
      font-feature-settings: "clig" off, "liga" off;
      font-family: "DM Sans";
      font-size: 16px;
      font-weight: 400;
    }
  }
  @keyframes float {
    0% {
      transform: translate(-50%, -50%) translateX(25px) translateY(0);
    }
    25% {
      transform: translate(-50%, -50%) translateX(25px) translateY(25px);
    }
    50% {
      transform: translate(-50%, -50%) translateX(0) translateY(25px);
    }
    75% {
      transform: translate(-50%, -50%) translateX(0) translateY(0);
    }
    100% {
      transform: translate(-50%, -50%) translateX(25px) translateY(0);
    }
  }

  .animation {
    position: relative;
    height: 90vh;
    width: 100%;
    margin-top: 10vh;
    .blur {
      border-radius: 634px;
      background: radial-gradient(
        55.71% 55.71% at 50% 50%,
        rgba(3, 192, 206, 0.16) 0%,
        rgba(234, 5, 194, 0) 100%
      );
      filter: blur(60px);
      width: 634px;
      height: 616px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
    }
    .animation-text {
      position: absolute;
      top: 42%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 50;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h3 {
        color: #000;
        text-align: center;
        font-family: "Lufga Medium";
        font-size: 40px;
        font-weight: 600;
        margin-top: 24px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10px 24px 30px 24px;
    height: 60vh;
    h2 {
      font-size: 20px;
    }
    .descriptions {
      flex-direction: column;
      gap: 16px;
      p {
        width: 100%;
        font-size: 12px;
      }
    }
    .animation {
      position: relative;
      height: 420px;
      width: 100%;
      margin-top: 30px;
      margin-bottom: 30px;
      overflow: hidden;
      .blur {
        width: 250px;
        height: 250px;
        border-radius: 250px;
      }
      .animation-text {
        width: 100%;
        top: 50%;
        h3 {
          font-family: "Lufga Medium";
          font-size: 18px;
          font-weight: 600;
          margin-top: 16px;
        }
      }
    }
  }
`;

export const AnimationItemWrapper = styled.div<{
  position: {
    desktop: {
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
      animationDelay: string;
    };
    mobile: {
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
      animationDelay: string;
    };
  };
}>`
  @keyframes float {
    0% {
      transform: translate(-50%, -50%) translateX(15px) translateY(0);
    }
    25% {
      transform: translate(-50%, -50%) translateX(15px) translateY(15px);
    }
    50% {
      transform: translate(-50%, -50%) translateX(0) translateY(15px);
    }
    75% {
      transform: translate(-50%, -50%) translateX(0) translateY(0);
    }
    100% {
      transform: translate(-50%, -50%) translateX(15px) translateY(0);
    }
  }
  @keyframes shoot {
    0% {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    100% {
      left: ${(props) => props.position.desktop.left};
      right: ${(props) => props.position.desktop.right};
      top: ${(props) => props.position.desktop.top};
      bottom: ${(props) => props.position.desktop.bottom};
    }
  }
  .animation-item {
    display: flex;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 80;
    .logo {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        object-fit: contain;
      }
    }
  }

  .regular-position {
    left: ${(props) => props.position.desktop.left || "auto"};
    right: ${(props) => props.position.desktop.right || "auto"};
    top: ${(props) => props.position.desktop.top || "auto"};
    bottom: ${(props) => props.position.desktop.bottom || "auto"};
    animation: shoot 1.5s ease-out forwards, float 5s linear infinite;
    animation-delay: 0s, ${(props) => props.position.desktop.animationDelay};
  }

  .initial-position {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 768px) {
    @keyframes shoot {
      0% {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      100% {
        left: ${(props) => props.position.mobile.left};
        right: ${(props) => props.position.mobile.right};
        top: ${(props) => props.position.mobile.top};
        bottom: ${(props) => props.position.mobile.bottom};
      }
    }

    .animation-item {
      width: 48px;
      height: 48px;
      padding: 8px;
    }

    .regular-position {
      left: ${(props) => props.position.mobile.left || "auto"};
      right: ${(props) => props.position.mobile.right || "auto"};
      top: ${(props) => props.position.mobile.top || "auto"};
      bottom: ${(props) => props.position.mobile.bottom || "auto"};
      animation: shoot 1.5s ease-out forwards, float 5s linear infinite;
      animation-delay: 0s, ${(props) => props.position.desktop.animationDelay};
    }
  }
`;
