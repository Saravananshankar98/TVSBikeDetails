import { render } from "@testing-library/react";
import AppHeader from "./app-header";

describe("AppHeader", () => {
  let baseElement: any, container, screen;
  beforeEach(() => {
    ({ container, baseElement, ...screen } = render(<AppHeader />));
  });

  it("Matches Snapshot", () => {
    expect(baseElement).toMatchSnapshot();
  });
});
