import Landing from "@/components/Landing";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  const onExitComplete = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <section className="font-PP">
      <Landing />
    </section>
  );
}
