"use client";
import { useEffect, useRef } from "react";
import { isTouchDevice, isSafari } from "@/utils/WebAgent";

const AnimatedBlob = () => {
  const blobRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
  });

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
