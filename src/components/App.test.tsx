import { render } from "@testing-library/react";
import App from "../components/App";

const renderApp = () => {
  return render(<App />);
};
 
describe("App", () => {
  it("Matches Snapshot", () => {
    const { baseElement } = renderApp();
    expect(baseElement).toMatchSnapshot();
  });
});
