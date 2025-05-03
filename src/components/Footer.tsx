/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  color: #fff;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 30px 0;
    background: black;
    transition: all 0.6s ease-in-out;
  }

  ul {
    gap: 1.5rem;
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  h5 {
    margin-bottom: 0.5rem;
  }

  .tight {
    border-radius: 10%;
    width: 100%;
    background: black;
    margin-top: -60px;
    transition: all 0.6s ease-in-out;
  }

  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    .tight {
      border-radius: 10%;
      padding: 40px 0;
      width: 100%;
      background: black;
      margin-top: -70px;
      transition: all 0.6s ease-in-out;
    }
  }
`;

const Footer = () => {
  const footer: any = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heightFooter = footer.current as any;
      if (
        heightFooter &&
        scrollY > heightFooter?.offsetTop - 800 &&
        scrollY < heightFooter?.offsetTop + heightFooter?.offsetHeight
      ) {
        footer?.current?.classList.add("tight");
      } else {
        footer?.current?.classList.remove("tight");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FooterWrapper>
      <div ref={footer} className="footer gradient-bg relative ">
        <h5>Find me on</h5>
        <div></div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/andreahubacek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons/linkedin.png" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/anhubacek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons/github.png" />
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/andreahubacek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons/behance.png" />
            </a>
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
