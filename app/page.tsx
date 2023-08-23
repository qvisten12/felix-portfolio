import dynamic from "next/dynamic";
import "./landing.css";

const Landing = dynamic(() => import("@/components/Landing"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <section className="font-PP">
      <Landing />
    </section>
  );
}
