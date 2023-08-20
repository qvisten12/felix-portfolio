"use client";
import React, { forwardRef, useMemo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type PageTransitionProps = HTMLMotionProps<"div">;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function PageTransition(
  { children }: PageTransitionProps,
  ref: PageTransitionRef
) {
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };

  return (
    <motion.div
      ref={ref}
      transition={config}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ x: 0, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition);
