import { component$ } from "@builder.io/qwik";
import { CompetenceCard } from "~/components/standalone/competence-card/competence-card";
import { css } from "~/styled-system/css";

export const ServeAboveSection = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        backgroundColor: "main-bgColor",
        marginTop: "250rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "130rem",
        gap: "65rem",
      })}
    >
      <Heading />

      <Content />
    </section>
  );
});

const Heading = component$(() => {
  return (
    <section
      class={css({
        color: "main-textColor",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <h3
        class={css({
          fontSize: "19rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
        })}
      >
        OUR PROMISE
      </h3>

      <p
        class={css({
          fontSize: "48rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "118%",
          letterSpacing: "-4.32rem",
        })}
      >
        Is to serve above and beyond
      </p>
    </section>
  );
});

const Content = component$(() => {
  return (
    <section
      class={css({
        display: "flex",
        gap: "68rem",
        flexWrap: "wrap",
      })}
    >
      <CompetenceCard />
      <CompetenceCard />
      <CompetenceCard />
      <CompetenceCard />
    </section>
  );
});
