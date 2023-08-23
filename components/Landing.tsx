"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 },
];

const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const Landing = () => {
  const wrapperRef = useRef(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const [combination, setCombination] = useState(
    combinations[rand(0, combinations.length - 1)]
  );
  const [prevIndex, setPrevIndex] = useState(0);

  const uniqueRand = (min: number, max: number, prev: number) => {
    let next = prev;

    while (prev === next) next = rand(min, max);

    return next;
  };

  setInterval(() => {
    const index = uniqueRand(0, combinations.length - 1, prevIndex);
    setCombination(combinations[index]);

    setPrevIndex(index);
  }, 3000);

  /* -- Text effect -- */

  const isTouchDevice = () => {
    if (window && navigator) {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0
      );
    }
  };

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    if (linkRef.current && !isTouchDevice()) {
      let interval: any = null;

      linkRef.current.onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
          // @ts-ignore
          event!.target!.innerText = event!
            // @ts-ignore
            .target!.innerText.split("")
            .map((letter: any, index: any) => {
              if (index < iteration) {
                // @ts-ignore
                return event?.target?.dataset?.value[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
          // @ts-ignore
          if (iteration >= event?.target?.dataset?.value?.length) {
            clearInterval(interval);
          }

          iteration += 1 / 2;
        }, 30);
      };
    }
  });

  return (
    <div className="grid place-items-center">
      <nav
        ref={wrapperRef}
        id="wrapper"
        data-configuration={combination.configuration}
        data-roundness={combination.roundness}
      >
        <Link
          className="shape bg-[#9bce51] dark:bg-green-500"
          href="/project/1"
          aria-label="Project 1"
        />
        <Link
          className="shape bg-[#ffe31b] dark:bg-yellow-300"
          href="/project/2"
          aria-label="Project 2"
        />
        <Link
          className="bg-black dark:bg-white shape"
          href="/project/3"
          aria-label="Project 3"
        />
        <Link
          className="shape bg-[#65bc4d] dark:bg-emerald-400"
          href="/project/4"
          aria-label="Project 4"
        />
        <Link
          className="shape bg-[#cdcccc] dark:bg-gray-500"
          href="/project/5"
          aria-label="Project 5"
        />
        <Link
          className="shape bg-[#2157a4] dark:bg-blue-600"
          href="/project/6"
          aria-label="Project 6"
        />
        <Link
          className="shape bg-[#85cef1] dark:bg-blue-300"
          href="/project/7"
          aria-label="Project 7"
        />
      </nav>
      <div className="landing-title-wrapper">
        <Link
          ref={linkRef}
          href="about"
          className="landing-title text-xl hover:text-slate-600 uppercase font-bold dark:text-white"
          data-value="Felix Ljungqvist"
        >
          Felix Ljungqvist
        </Link>
      </div>
    </div>
  );
};

export default Landing;
