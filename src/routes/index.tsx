import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { Navbar } from "~/components/standalone/navbar/navbar";
// import { HeroSection } from "./hero-section";
// import { AboutSection } from "./about-section";
// import { ServicesSection } from "./services-section";
// import { ServeAboveSection } from "./serve-above-section";
// import { TestimonialCard } from "~/components/standalone/testimonial-card/testimonial-card";
// import { OurServiceArea } from "./OurServiceArea";

export default component$(() => {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ServeAboveSection />
      <OurServiceArea />
      <TestimonialCard /> */}
      memeza
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to NeoloProjects",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
