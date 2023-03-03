import { render } from "@testing-library/react";
import App from "../components/App";
import { TestContextProvider } from "../test/test-container";

const renderApp = () => {
  return render(<App />, {
    wrapper: TestContextProvider,
  });
};

describe("App", () => {
  it("Matches Snapshot", () => {
    const { baseElement } = renderApp();
    expect(baseElement).toMatchSnapshot();
  });
});
