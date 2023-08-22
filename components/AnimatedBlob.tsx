"use client";
import { useEffect, useRef, useState } from "react";

const AnimatedBlob = () => {
  const [isSafari, setIsSafari] = useState(false);
  /* -- Glow effect -- */

  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isTouchDevice = () => {
      if (window) {
        return (
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          // @ts-ignore
          navigator.msMaxTouchPoints > 0
        );
      }
    };

    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));

    if (!isTouchDevice() && !isSafari) {
      window.onpointermove = (event) => {
        const { clientX, clientY } = event;

        blobRef?.current?.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      };
    }
  }, []);

  return (
    <>
      {isSafari ? null : (
        <>
          <div ref={blobRef} id="blob"></div>
          <div id="blur"></div>
        </>
      )}
    </>
  );
};

export default AnimatedBlob;
