import { Button, Grid, Rating, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { linkButtonDetails } from "../../common/social-media-icon";
import CardBikes from "../../components/card-bikes/card-bikes";
import { selectBetting } from "../dashboard/style";
import { LinkButton } from "./style";

interface LinkTabProps {
  label?: string;
  href?: string;
}
function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


function BikesCollections() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  return (
    // <div>BikesCollections</div>
    <Box>
    <Grid>
      <Box sx={selectBetting}>
        {" "}
        <Box>
          <Typography variant="h3">TVS Bikes</Typography>
        </Box>
        <br />
        <Typography variant="h6">
          <Rating value={5} readOnly /> Avg Rating for TVS Bikes and Scooters
          based on 27591 reviews
        </Typography>
        <Typography variant="h6">
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
    <Typography variant="h3">TVS Bikes Price List 2023 in India </Typography>
    <br />
    <Box sx={LinkButton}>
    {/* <Tabs value={value} onChange={handleChange} >
      <LinkTab label="Scooter" href="/" />
      <LinkTab label="MotorCycle" href="/" />
      <LinkTab label="Mopeds" href="/" />
      <LinkTab label="Electric" href="/" />
    </Tabs> */}
    {linkButtonDetails.map((value)=>(
    <Box>
   <Button  className={value.selected ? "active" : ""}>{value.name}</Button>
    </Box>
    ))}
  </Box>
    
    <CardBikes />
  </Box>
    );
}
;
export default BikesCollections;