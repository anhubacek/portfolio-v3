/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect } from "react";
import { animation } from "../../data/skills";
import {
  AnimationItemWrapper,
  SkillsAnimationWrapper,
} from "./SkillsAnimation.styles";

export const SkillsAnimation = () => {
  const container = useRef(null);
  const animationItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = container.current as any;
    if (
      height &&
      scrollY > height?.offsetTop - 200 &&
      scrollY < height?.offsetTop + height?.offsetHeight
    ) {
      animationItemsRef.current.forEach((item) =>
        item.classList.remove("initial-position")
      );
      animationItemsRef.current.forEach((item) =>
        item.classList.add("regular-position")
      );
    } else {
      animationItemsRef.current.forEach((item) =>
        item.classList.remove("regular-position")
      );
      animationItemsRef.current.forEach((item) =>
        item.classList.remove("initial-animation")
      );
    }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SkillsAnimationWrapper ref={container}>
      <div className="animation">
        <div className="animation-items">
          {animation.items.map((item: any, index: number) => {
            return (
              <AnimationItemWrapper key={index} position={item.style}>
                <div
                  className={`animation-item initial-position`}
                  ref={(el) => {
                    if (el) {
                      if (animationItemsRef.current.length < 8) {
                        animationItemsRef.current.push(el);
                      }
                    }
                  }}
                >
                  <div className="logo">
                    <img alt={item.alt} src={item.image} />
                  </div>
                </div>
              </AnimationItemWrapper>
            );
          })}
        </div>
        <div className="blur"></div>
        <div className="animation-text">
        {/* <CustomTag text={animation.tag} /> */}
        <span>{animation.tag}</span>
        <h3 style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: animation.title }}></h3>
      </div>
      </div>
    </SkillsAnimationWrapper>
  );
};
