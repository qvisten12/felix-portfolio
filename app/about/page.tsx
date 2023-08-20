import AnimatedMe from "@/components/AnimatedMe";
import "../animatedme.css";
import { Metadata } from "next";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Felix Ljungqvist - About",
  description: "About Felix Ljungqvist",
};

const about = () => {
  return (
    <PageTransition>
      <section>
        <AnimatedMe />
      </section>
    </PageTransition>
  );
};

export default about;
