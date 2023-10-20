import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface ContactUsHeroProps {
  count?: any;
}

export const ContactUsHero = component$<ContactUsHeroProps>((props) => {
  props.count;

  return (
    <section
      class={css({
        position: "relative",
        width: "100%",
        height: "1009rem",
        backgroundColor: "rebeccapurple",
        color: "main-textColor",
      })}
    >
      <HeroText />

      <MapSection />
    </section>
  );
});

const HeroText = component$(() => {
  return (
    <section
      class={css({
        position: "relative",
        width: "811rem",
        display: "flex",
        flexDirection: "column",
        gap: "9rem",

        left: "222rem",
        top: "301rem",

        fontStyle: "normal",
        fontWeight: "600",
      })}
    >
      <h2
        class={css({
          fontSize: "27rem",

          lineHeight: "normal",
        })}
      >
        Renewable Energy
      </h2>
      <h1
        class={css({
          fontSize: "110rem",

          lineHeight: "115.5%",
          letterSpacing: "-9.9rem",
        })}
      >
        Let's Start Your Project Journey
      </h1>

      <section
        class={css({
          marginTop: "84rem",
          display: "flex",
          alignItems: "center",
          gap: "46rem",
        })}
      >
        <div
          class={css({
            position: "relative",
            backgroundColor: "orange-bgColor",
            borderRadius: "70rem",
            height: "128rem",
            width: "128rem",
          })}
        >
          arrow
        </div>
        <div
          class={css({
            border: "3rem solid",
            borderColor: "main-textColor",
            padding: "32rem 36rem",

            fontSize: "24rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "127%" /* 30.48rem */,
            letterSpacing: "-0.6rem",
            borderRadius: "49rem",
          })}
        >
          career
        </div>
      </section>
    </section>
  );
});

const MapSection = component$(() => {
  return <div></div>;
});
