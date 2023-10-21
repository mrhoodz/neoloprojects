import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface ServiceCompetenceCardProps {
  variant?: string[];
  headerMetric?: string;
  headerDetails?: string;
  title?: string;
  body?: string;
  footer?: string;
}

interface HeaderProps {
  variant?: any;
  headerMetric?: string;
  headerDetails?: string;
  title?: string;

  body?: string;
}

export const ServiceCompetenceCard = component$<ServiceCompetenceCardProps>(
  (props) => {
    const x: any = props.variant;
    return (
      <article
        class={css({
          position: "relative",
          backgroundColor: "orange-bgColor",
          width: { base: "505rem", md: "538rem" },
          paddingInline: "23.5rem",
          paddingTop: "54rem",
          paddingBottom: "57rem",
          borderRadius: "38rem",
        })}
      >
        {x == "big" ? (
          <></>
        ) : (
          <Header
            headerMetric={props.headerMetric}
            headerDetails={props.headerDetails}
          />
        )}

        <section
          class={css({
            display: "flex",
            flexDirection: "column",
            gap: "37rem",
          })}
        >
          <Body variant={x} body={props.body} />

          <Footer footer={props.footer} />
        </section>
      </article>
    );
  }
);

const Header = component$<ServiceCompetenceCardProps>((props) => {
  return (
    <section
      class={css({
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        gap: "-3rem",
        marginBottom: "47rem",

        "& button": {
          position: "relative",
          border: "4rem solid",
          borderColor: "main-bgColor",
          height: "93rem",
          borderRadius: "50rem",
          marginBottom: "7rem",

          fontSize: "20rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          letterSpacing: "-1.2rem",

          // width:"119rem ",
        },
      })}
    >
      <button
        class={css({
          position: "relative",
          paddingInline: "39.5rem",
        })}
      >
        {props.headerMetric}
      </button>

      <button
        class={css({
          paddingInline: "29.5rem",
        })}
      >
        {props.headerDetails}
      </button>
    </section>
  );
});

const Body = component$<HeaderProps>((props) => {
  return (
    <>
      <h3
        class={css({
          position: "relative",
          marginLeft: "23rem",
          fontSize: props.variant == "big" ? "44rem" : "38rem",
          fontStyle: "normal",
          fontWeight: props.variant == "big" ? "600" : "500",
          lineHeight: "127%",
          letterSpacing: "-0.54rem",

          _after: {
            content: '" "',
            position: "absolute",
            height: "90%",
            width: "3rem",
            backgroundColor: "main-bgColor",
            left: "-24rem",
            top: "6rem",
          },
        })}
      >
        {props.variant == "big" ? "Join Our Tea" : props.title}
      </h3>

      <p
        class={css({
          fontSize: "24rem",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "142.5%",
          letterSpacing: "-2.16rem",
        })}
      >
        {props.body}
      </p>
    </>
  );
});

const Footer = component$<ServiceCompetenceCardProps>(() => {
  return (
    <button
      class={css({
        position: "relative",
        width: "max-content",
        padding: "29.5rem 32rem",
        borderRadius: "380rem",
        color: "main-textColor",
        backgroundColor: "main-bgColor",

        fontSize: "20rem",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "142.5%",
        letterSpacing: "-1.16rem",
      })}
    >
      Contact Us
    </button>
  );
});
