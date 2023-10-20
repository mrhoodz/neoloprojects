import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export interface SearchComponentProps {
  count?: any;
}

export const SearchComponent = component$<SearchComponentProps>((props) => {
  props.count;
  return (
    <section
      class={css({
        display: "flex",
        flexDirection: "column",
        gap: "24rem",
        width: "693rem",
      })}
    >
      <h5
        class={css({
          fontSize: "23rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          letterSpacing: "-1.38rem",
        })}
      >
        Looking for a comfortable strategic and good place ?
      </h5>

      <SearchInput />

      <HistorySection />
    </section>
  );
});

const SearchInput = component$(() => {
  return (
    <>
      <div
        class={css({
          position: "relative",
          backgroundColor: "main-textColor",
          border: "1rem solid",
          borderColor: "main-bgColor",
          borderRadius: "48rem",
          height: "94rem",
        })}
      >
        <input
          class={css({
            position: "absolute",
            height: "100%",
            width: "100%",
            paddingBlock: "31.5rem",
            paddingLeft: "44rem",
            paddingRight: "18.5rem",
            borderRadius: "48rem",

            fontSize: "22rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            letterSpacing: "-1.32rem",
          })}
          placeholder="Try searching Mechanical engineering"
          type="text"
        />

        <div
          class={css({
            position: "absolute",
            borderRadius: "50rem",
            backgroundColor: "main-bgColor",
            height: "66rem",
            width: "66rem",
            right: "18rem",
            top: "14rem",
          })}
        ></div>
      </div>
    </>
  );
});

const HistorySection = component$(() => {
  const history = ["Kathu", "Bloumfountain", "Kuruman", "Taung"];

  return (
    <ul
      class={css({
        display: "flex",
        gap: "25rem",
      })}
    >
      {history.map((i) => (
        <li
          class={css({
            backgroundColor: "main-bgColor",
            listStyle: "none",
            width: "max-content",
            padding: "27.5rem",
            color: "main-textColor",
            borderRadius: "48rem",

            fontSize: "23rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            letterSpacing: "-2.3rem",
          })}
          key={Math.random()}
        >
          {i}
        </li>
      ))}
    </ul>
  );
});
