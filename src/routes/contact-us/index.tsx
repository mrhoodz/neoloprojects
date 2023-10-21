import { component$ } from "@builder.io/qwik";
import { ContactUsHero } from "~/components/sections/contact-us-hero/contact-us-hero";
import { AboutSection } from "./about-section";
import { TestimonialCard } from "~/components/standalone/testimonial-card/testimonial-card";
import { ServicesSection } from "./services-section";

export default component$(() => {
  return (
    <>
      <ContactUsHero />

      <AboutSection />

      <ServicesSection />
      <TestimonialCard />
    </>
  );
});
