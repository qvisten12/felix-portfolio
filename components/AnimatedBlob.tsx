"use client";
import { useEffect, useRef } from "react";

const AnimatedBlob = () => {
  /* -- Glow effect -- */

  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div ref={blobRef} id="blob"></div>
      <div id="blur"></div>
    </>
  );
};

export default AnimatedBlob;
