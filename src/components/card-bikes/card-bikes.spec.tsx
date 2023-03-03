import { fireEvent, render } from "@testing-library/react";
import { TestContextProvider } from "../../test/test-container";
import CardBikes from "./card-bikes";

const vehicleFilterDetails = [ 
    {
      BikeName: "TVS Apache RTR 200",
      Price: "1.40 -1.45",
      CC: "197.75",
      PS: "20.82",
      nm: "17.25",
      RPM: "7500",
      KMPH: "35",
      Reviews: "281",
    }
  ];

describe("CardBikes", () => {
  let baseElement: any, container, screen;
  beforeEach(() => {
    ({ container, baseElement, ...screen } = render(
      <CardBikes vehicleFilterDetails={vehicleFilterDetails} />,
      {
        wrapper: TestContextProvider,
      }
    ));
  });

  it("Matches Snapshot", () => {
    expect(baseElement).toMatchSnapshot();
  });

  // it("click Know more options", async () => {
  //   const knowMoreButton = container.querySelectorAll(".MuiTypography-root");
  //   expect(knowMoreButton[0].textContent.trim()).toEqual("Scooters");
  //   fireEvent.click(knowMoreButton[0]);
  // });
});
