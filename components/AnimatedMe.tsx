"use client";

import { useEffect } from "react";

const AnimatedMe = () => {
  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const enhance = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const text = element.innerText.split("");
      element.innerText = "";

      text.forEach((value, index) => {
        const outer = document.createElement("span");

        outer.className = "outer";

        const inner = document.createElement("span");

        inner.className = "inner";

        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const letter = document.createElement("span");

        letter.className = "letter";

        if (value !== " ") letter.innerText = value;
        else {
          console.log("1");
          letter.innerText = "\u00A0";
        }

        letter.style.animationDelay = `${index * 1000}ms`;

        inner.appendChild(letter);

        outer.appendChild(inner);

        element.appendChild(outer);
      });
    }
  };

  useEffect(() => {
    enhance("channel-link");
  });

  return (
    <div className="grid place-items-center sm:mb-20 lg:mb-0 ">
      <div id="text">
        <div className="line">
          <p className="word">A</p>
          <p className="word">Person</p>
        </div>

        <div className="line">
          <p className="word">Developer</p>
          <p className="word">&</p>
        </div>

        <div className="line">
          <p className="word">Tech Enthusiast</p>
        </div>

        <div className="line">
          <a
            id="channel-link"
            href="mailto:felixljungqvist@icloud.com"
            aria-label="email me"
            target="_blank"
            className="word fancy"
          >
            Send Me An Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMe;
