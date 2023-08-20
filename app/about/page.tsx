import AnimatedMe from "@/components/AnimatedMe";
import "../animatedme.css";
import Link from "next/link";
const about = () => {
  return (
    <section>
      <header className="flex justify-between">
        <h1 className="text-3xl">About</h1>
        <Link href="/">X</Link>
      </header>
      <AnimatedMe />
    </section>
  );
};

export default about;
