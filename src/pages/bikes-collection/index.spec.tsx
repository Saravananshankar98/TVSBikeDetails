import { render } from "@testing-library/react";
import BikesCollections from ".";
import { TestContextProvider } from "../../test/test-container";

describe("DashBoard", () => {
  let baseElement: any, container: any, screen;
  beforeEach(() => {
    ({ container, baseElement, ...screen } = render(<BikesCollections />, {
      wrapper: TestContextProvider,
    }));
  });

  it("Matches Snapshot", () => {
    expect(baseElement).toMatchSnapshot();
  });
});
