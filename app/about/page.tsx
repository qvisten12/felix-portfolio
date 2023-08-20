import AnimatedMe from "@/components/AnimatedMe";
import "../animatedme.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Felix Ljungqvist - About",
  description: "About Felix Ljungqvist",
};

const about = () => {
  return (
    <section>
      <AnimatedMe />
    </section>
  );
};

export default about;
