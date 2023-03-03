import { fireEvent,render } from "@testing-library/react";
import AppSideBar from "./app-sidebar";

describe("AppSideBar", () => {
  let baseElement: any, container: any, screen: any;
  beforeEach(() => {
    ({ container, baseElement, ...screen } = render(<AppSideBar />));
  });

  it("Matches Snapshot", () => {
    expect(baseElement).toMatchSnapshot();
  });

  it("Click scooter models options", async () => {
    const scooterModel = container.querySelectorAll(".MuiTypography-root");
    expect(scooterModel[0].textContent.trim()).toEqual("Scooters");
    fireEvent.click(scooterModel[0]);
    const jupiterScooter = screen.getByText("Jupiter");
    fireEvent.click(jupiterScooter);
  });

  
  it("Click Mopeds models options", async () => {
    const mopedModel = container.querySelectorAll(".MuiTypography-root");
    expect(mopedModel[2].textContent.trim()).toEqual("Mopeds");
    fireEvent.click(mopedModel[2]);
    const xl100Moped = screen.getByText("XL 100");
    fireEvent.click(xl100Moped);
  });

  
  it("Click motor cycle models options", async () => {
    const motorCycleModel = container.querySelectorAll(".MuiTypography-root");
    expect(motorCycleModel[1].textContent.trim()).toEqual("MotorCycles");
    fireEvent.click(motorCycleModel[1]);
    const apacheMotorCycle = screen.getByText("Apache RTR 200");
    fireEvent.click(apacheMotorCycle);
  });

  
  it("Click Electric models options", async () => {
    const electricModel = container.querySelectorAll(".MuiTypography-root");
    expect(electricModel[3].textContent.trim()).toEqual("Electric");
    fireEvent.click(electricModel[3]);
    const iQubeScooter = screen.getByText("iQube");
    fireEvent.click(iQubeScooter);
  });
});
