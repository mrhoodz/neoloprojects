import { component$ } from "@builder.io/qwik";
import { ServiceCompetenceCard } from "~/components/standalone/service-competence-card/service-competence-card";
import { css } from "~/styled-system/css";

export const AboutSection = component$(() => {
  return (
    <section
      class={css({
        position: "relative",

        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      })}
    >
      <div
        class={css({
          display: "flex",
          flexDirection: "column",
          gap: "110rem",
        })}
      >
        <Header />

        <Content />
      </div>
    </section>
  );
});

const Header = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "19rem",
        backgroundColor: "rebeccapurple",
        width: "100%",
      })}
    >
      <h2
        class={css({
          fontSize: "27rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        })}
      >
        Why we go above and beyond
      </h2>

      <p
        class={css({
          position: "relative",
          textAlign: "center",

          width: "1017rem",
          height: "281rem",

          fontSize: "56rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "118%" /* 66.08px */,
          letterSpacing: "-4.48rem",
        })}
      >
        At Neoloprojects, we're the renewable energy experts you can trust. With
        a focus on sustainability and innovation, we deliver customized
        solutions that harness the power of clean energy.
      </p>
    </section>
  );
});

const Content = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        display: "flex",
        gap: "178rem",
      })}
    >
      <ServiceCompetenceCard variant={"small" as any} />
      <ServiceCompetenceCard variant={"small" as any} />
    </section>
  );
});
