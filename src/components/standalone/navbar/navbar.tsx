/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface NavbarProps {
  textColor: string;
}

export const Navbar = component$<NavbarProps>((props) => {
  props.textColor;
  return (
    <header
      class={css({
        position: "relative",
        backgroundColor: "black",
        height: "103rem",
        minWidth: "1712rem",
        display: "flex",
        alignItems: "center",
        paddingLeft: "56rem",
        paddingRight: "17rem",
        color: "main-textColor",
        justifyContent: "space-between",
        borderRadius: "38rem",
      })}
    >
      {/* logo for NeoloProjects */}
      <div
        class={css({
          position: "relative",
          width: "146.99rem",
          height: "40.003rem",

          "& img": {
            position: "absolute",
            height: "100%",
            width: "100%",
          },
        })}
      >
        <img
          src="images\NeoloProjects-MiniLogo.svg"
          alt="Logo for NeoloProjects"
        />
      </div>

      {/* all the navlinks */}
      <nav class="navlinks">
        <ul
          class={css({
            display: "flex",
            flexDirection: "row",
            gap: "48rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          })}
        >
          <li>Home</li>
          <li>Projects</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
      </nav>

      <div class={css({ display: "flex", gap: "6rem" })}>
        <button
          class={css({
            display: { base: "block", mdTo2xl: "none" },
            height: "75rem",
            width: "75rem",
            position: "relative",
            borderRadius: "100rem",
            border: " 2rem solid",
            color: "main-textColor",
            fontSize: "21rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            backgroundColor: "main-textColor",

            "& img": {
              position: "absolute",
              height: "40rem",
              width: "30rem",
              top: "50%",
              left: "50%",
              transform: " translate(-50%, -50%) ",
            },
          })}
        >
          <img src="images\search icon.svg" alt="search svg icon" />
        </button>

        <button
          class={css({
            display: { base: "block", mdTo2xl: "none" },
            height: "75rem",
            width: "75rem",
            position: "relative",
            borderRadius: "100rem",
            border: " 2rem solid",
            color: "main-textColor",
            borderColor: "main-textColor",
            fontSize: "21rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            backgroundColor: "main-bgColor",

            "& img": {
              position: "absolute",
              height: "20rem",
              width: "37rem",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
          })}
        >
          <img src="images\menu icon.svg" alt="menu svg icon" />
        </button>

        <button
          class={css({
            display: { base: "none", mdTo2xl: "block" },

            padding: "22rem 55rem",
            borderRadius: "38rem",
            border: " 2rem solid",
            color: "main-textColor",
            borderColor: "main-textColor",
            fontSize: "21rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            // backgroundColor: "lime",
          })}
        >
          Register
        </button>
      </div>
    </header>
  );
});