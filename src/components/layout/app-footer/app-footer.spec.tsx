import { render } from "@testing-library/react";
import AppFooter from "./app-footer";

describe("AppFooter", () => {
  it("Matches Snapshot", () => {
    const { baseElement } = render(<AppFooter />);
    expect(baseElement).toMatchSnapshot();
  });
});
