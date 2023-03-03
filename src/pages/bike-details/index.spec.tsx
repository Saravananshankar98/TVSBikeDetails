import { render } from "@testing-library/react";
import BikeDetailsPage from ".";

describe("DashBoard", () => {
  let baseElement: any, container, screen;
  beforeEach(() => {
    ({ container, baseElement, ...screen } = render(<BikeDetailsPage />));
  });

  it("Matches Snapshot", () => {
    expect(baseElement).toMatchSnapshot();
  });
});
