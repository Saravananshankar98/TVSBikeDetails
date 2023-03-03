import { render } from "@testing-library/react";
import BikeDetailsPage from ".";
import { TestContextProvider } from "../../test/test-container";

describe("DashBoard", () => {
  let baseElement: any, container, screen;
  beforeEach(() => {
    ({ container, baseElement, ...screen } = render(<BikeDetailsPage />, {
      wrapper: TestContextProvider,
    }));
  });

  it("Matches Snapshot", () => {
    expect(baseElement).toMatchSnapshot();
  });
});
