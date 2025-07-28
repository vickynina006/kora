import Header from "./header";
import Hero from "./hero";

export default function HeaderHeroBg() {
  return (
    <section className="bg-black/30 bg-blend-overlay  bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center">
      <Header />
      <Hero />
    </section>
  );
}
