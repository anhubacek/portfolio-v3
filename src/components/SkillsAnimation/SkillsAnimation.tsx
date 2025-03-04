/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from "react";
import { animation } from "../../data/skills";
import {
  AnimationItemWrapper,
  SkillsAnimationWrapper,
} from "./SkillsAnimation.styles";
import { GradientText } from "../GradientText";

export const SkillsAnimation = () => {
  const container = useRef(null);
  const animationItemsRef = useRef<HTMLDivElement[]>([]);
  const text = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = container.current as any;
      if (
        height &&
        scrollY > height?.offsetTop - 150 &&
        scrollY < height?.offsetTop + height?.offsetHeight
      ) {
        animationItemsRef.current.forEach((item) =>
          item.classList.remove("initial-position")
        );
        animationItemsRef.current.forEach((item) =>
          item.classList.add("regular-position")
        );
        text.current?.classList.remove("black-text");
      } else {
        animationItemsRef.current.forEach((item) =>
          item.classList.remove("regular-position")
        );
        animationItemsRef.current.forEach((item) =>
          item.classList.remove("initial-animation")
        );
        text.current?.classList.add("black-text");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const setRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      animationItemsRef.current[index] = el;
    }
  };

  return (
    <SkillsAnimationWrapper ref={container}>
      <div className="animation">
        <div className="animation-items">
          {animation.items.map((item: any, index: number) => {
            return (
              <AnimationItemWrapper key={index} position={item.style}>
                <div
                  className={`animation-item initial-position`}
                  ref={(el) => setRef(el, index)}
                >
                  <div className="logo">
                    <img alt={item.alt} src={item.image} />
                  </div>
                </div>
              </AnimationItemWrapper>
            );
          })}
        </div>
        {/* <div className="blur"></div> */}
        <div className="animation-text">
          <GradientText>
            <h3 ref={text} dangerouslySetInnerHTML={{ __html: animation.title }}></h3>
          </GradientText>
        </div>
      </div>
    </SkillsAnimationWrapper>
  );
};
