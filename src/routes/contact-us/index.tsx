import { component$ } from "@builder.io/qwik";
// import { ContactUsHero } from "~/components/sections/contact-us-hero/contact-us-hero";
import { AboutSection } from "./about-section";
import { TestimonialCard } from "~/components/standalone/testimonial-card/testimonial-card";
import { ServicesSection } from "./services-section";
import { ServiceHero } from "~/components/sections/service-hero/service-hero";
import { Navbar } from "~/components/standalone/navbar/navbar";

export default component$(() => {
  return (
    <>
      <Navbar />

      {/* <ContactUsHero /> */}
      <ServiceHero />

      <AboutSection />

      <ServicesSection />
      <TestimonialCard />
    </>
  );
});
