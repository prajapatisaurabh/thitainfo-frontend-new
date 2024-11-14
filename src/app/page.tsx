import About from "@/components/home/about";
import Featured from "@/components/home/featured";
import Hero from "@/components/home/hero";
import ServiceSection from "@/components/home/service";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Featured />
        <About />
        <ServiceSection />
      </main>
    </>
  );
}
