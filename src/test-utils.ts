import { queries, Queries } from "@testing-library/dom";
import { render, RenderOptions } from "@testing-library/react";

const customRender = <
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  ui: React.ReactElement,
  options: RenderOptions<Q, Container, BaseElement> = {}
) =>
  render(ui, {
    // wrap provider(s) here if needed

    wrapper: ({ children }) => children,

    ...options,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { fetchMock } from "../setupTests";
export { customRender as render };
