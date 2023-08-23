import "../animatedme.css";
import { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Felix Ljungqvist - About",
  description: "About Felix Ljungqvist",
};

const AnimatedMe = dynamic(() => import("@/components/AnimatedMe"), {
  loading: () => <p>Loading...</p>,
});

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
