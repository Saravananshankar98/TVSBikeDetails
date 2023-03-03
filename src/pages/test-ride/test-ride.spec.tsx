import { render } from "@testing-library/react";
import TestRide from "./test-ride";

describe("DashBoard", () => {
  let baseElement: any, container: any, screen;
  beforeEach(() => {
    ({ container, baseElement, ...screen } = render(<TestRide />));
  });

  it("Matches Snapshot", () => {
    expect(baseElement).toMatchSnapshot();
  });
});
