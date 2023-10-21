import { component$ } from "@builder.io/qwik";
import { ProjectOverviewCard } from "~/components/standalone/project-overview-card/project-overview-card";
// import { SearchComponent } from "~/components/standalone/search-component/search-component";
import { css } from "~/styled-system/css";

export const ServicesSection = component$(() => {
  return (
    <section>
      <Header />

      <Content />
    </section>
  );
});

const Header = component$(() => {
  return (
    <section
      class={css({
        display: "flex",
        justifyContent: "space-between",
      })}
    >
      <h3
        class={css({
          position: "relative",
          width: "574rem",
          fontSize: "66rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "118%" /* 77.88px */,
          letterSpacing: "-6.6rem",
        })}
      >
        We are experts in the engineering space
      </h3>

      {/* <SearchComponent /> */}
    </section>
  );
});

const Content = component$(() => {
  return (
    <section
      class={css({
        display: "flex",
        gap: "49rem",
      })}
    >
      <ProjectOverviewCard variant={"Primary" as any} />
      <ProjectOverviewCard variant={"Primary" as any} />
      <ProjectOverviewCard variant={"Primary" as any} />
    </section>
  );
});
