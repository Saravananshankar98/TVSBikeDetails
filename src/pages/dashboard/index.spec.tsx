import { fireEvent, render } from "@testing-library/react";
import DashBoardPage from ".";
import { TestContextProvider } from "../../test/test-container";

describe("DashBoard", () => {
  let baseElement: any, container:any, screen;
  beforeEach(() => {
    ({ container, baseElement, ...screen } = render(<DashBoardPage />, {
      wrapper: TestContextProvider,
    }));
  });

  it("Matches Snapshot", () => {
    expect(baseElement).toMatchSnapshot();
  });

  it("Filter electric bike Details", () =>{
    const electricModel = container.querySelectorAll(".MuiButtonBase-root");
    expect(electricModel[3].textContent.trim()).toEqual("Electric");
    fireEvent.click(electricModel[3]);
  })
});
