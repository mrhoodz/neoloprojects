import { component$ } from "@builder.io/qwik";
import { ServiceHero } from "~/components/sections/service-hero/service-hero";
import { AboutSection } from "./about-section";
import { TestimonialCard } from "~/components/standalone/testimonial-card/testimonial-card";

export default component$(() => {
  return (
    <>
      <ServiceHero />

      <AboutSection />

      <TestimonialCard />
    </>
  );
});
