import { Button, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { linkButtonDetails } from "../../common/social-media-icon";
import CardBikes from "../../components/card-bikes/card-bikes";
import { LinkButton } from "./style";

function BikesCollections() {
  return (
    // <div>BikesCollections</div>
    <Box>
      <Grid>
        <Box >
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
        {linkButtonDetails.map((value) => (
          <Box>
            <Button className={value ? "active" : ""}>{value.name}</Button>
          </Box>
        ))}
      </Box>

      <CardBikes />
    </Box>
  );
}
export default BikesCollections;
