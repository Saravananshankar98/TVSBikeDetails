import { render } from "@testing-library/react";
import CardBikes from "./card-bikes";

const vehicleFilterDetails = {
  vehicleDetails: [
    {
      BikeName: "TVS Apache RTR 200",
      Price: "1.40 -1.45",
      CC: "197.75",
      PS: "20.82",
      nm: "17.25",
      RPM: "7500",
      KMPH: "35",
      Reviews: "281",
    },
  ],
};

describe("CardBikes", () => {
  let baseElement: any, container, screen;
  beforeEach(() => {
    ({ container, baseElement, ...screen } = render(
      <CardBikes vehicleFilterDetails={vehicleFilterDetails} />
    ));
  });

  it("Matches Snapshot", () => {
    expect(baseElement).toMatchSnapshot();
  });
});
