import { Button, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { linkButtonDetails } from "../../common/social-media-icon";
import { TvsBikeDetailsDescriptions } from "../../common/tvs-bike-details-descriptions";
import CardBikes from "../../components/card-bikes/card-bikes";
import { LinkButton } from "./style";

function DashBoardPage() {
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [vehicleName, setVehicleName] = useState("Motor Cycles");

  const handleFilterVehiclesChange = (modelName: any) => {
    setVehicleName(modelName);
  };

  useEffect(() => {
    const filterBikeDetails = TvsBikeDetailsDescriptions.filter(
      (x) => x.varient === vehicleName
    );
    setVehicleDetails(filterBikeDetails);
  }, [vehicleName]);

  return (
    <Box>
      <Grid>
        <Box>
          {" "}
          <Typography variant="h2">TVS Bikes</Typography>
          <Typography variant="body2">
            <Rating value={5} readOnly /> Avg Rating for TVS Bikes and Scooters
            based on 27591 reviews
          </Typography>
          <Typography variant="body2">
            TVS bikes price in India starts at Rs 45,241 for TVS XL100, which is
            the cheapest model. The most expensive TVS two wheeler is TVS Apache
            RR 310 priced at Rs 2.65 Lakh. The most popular models for TVS
            includes 4 Sports , 7 Scooters, 1 Electric, 1 Cruiser, 1Cafe Racer ,
            2 Commuter, 1Moped and 1 Sports Naked. Upcoming TVS bike in India
            include TVS ADV, TVS Apache RTR 310 , TVS iQube Electric which are
            expected to launch in 2023. Select a TVS motorcycle to find out its
            latest price, specifications, TVS Finance, offers, mileage, colors,
            images and more at BikeDekho. To get more details of TVS bikes,
            download BikeDekho App.Searching for TVS Scooters?
          </Typography>
        </Box>
        <br />
      </Grid>
      <Typography variant="h2">TVS Bikes Price List 2023 in India </Typography>
      <Grid spacing={2} container sx={{ justifyContent: "center" }}>
        {linkButtonDetails.map((modelName) => (
          <Grid item>
            <Button
              className={
                vehicleName === modelName?.name ? "button-selected" : ""
              }
              sx={LinkButton}
              onClick={() => handleFilterVehiclesChange(modelName?.name)}
            >
              {modelName.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <br />
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "grey", paddingTop: "10px" }}
      >
        <CardBikes vehicleDetails={Object.values(vehicleDetails)} />
      </Grid>
    </Box>
  );
}

export default DashBoardPage;
