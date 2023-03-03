import { render } from "@testing-library/react";
import AppFooter from "./app-footer";

describe("CardBikes", () => {
  it("Matches Snapshot", () => {
    const { baseElement } = render(<AppFooter />);
    expect(baseElement).toMatchSnapshot();
  });
});
