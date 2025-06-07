import { useEffect, useRef } from "react";

const useAnimateOnScroll = (animationClass) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate__animated", animationClass);
        } else {
          el.classList.remove("animate__animated", animationClass);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [animationClass]);

  return elementRef;
};

export default useAnimateOnScroll;
