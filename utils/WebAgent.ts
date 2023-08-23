export const isSafari = /^((?!chrome|android).)*safari/i.test(
  navigator.userAgent
);

export const isTouchDevice = () => {
  if (window && navigator) {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-ignore
      navigator.msMaxTouchPoints > 0
    );
  }
};
