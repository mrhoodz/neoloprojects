import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Test } from "~/components/test/test";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
      <h1>booo boo boo</h1>
      <Test backgroundColor="lime" textColor={"red"} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to NeoloProjects",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
