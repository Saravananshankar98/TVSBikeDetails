import { Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CardBikes from "../../components/card-bikes/card-bikes";
import { selectBetting } from "./style";

function DashBoardPage() {
  return (
    <Box sx={{ paddingLeft: "260px", marginTop: "64px" }}>
      <Grid>
        <Box sx={selectBetting}>
          {" "}
          <Typography variant="h1">TVS Bikes</Typography>
          <Typography variant="h6">
            <Rating value={5} readOnly /> Avg Rating for TVS Bikes and Scooters
            based on 27591 reviews
          </Typography>
          <Typography variant="h4">
            TVS bikes price in India starts at Rs 45,241 for TVS XL100, which is
            the cheapest model. The most expensive TVS two wheeler is TVS Apache
            RR 310 priced at Rs 2.65 Lakh. The most popular models for TVS
            includes 4
            <a href="/" style={{ textDecoration: "none" }}>
              Sports
            </a>
            , 7 <a href="/">Scooters</a>, 1 <a href="/">Electric</a>, 1{" "}
            <a href="/">Cruiser</a>, 1<a href="/">Cafe Racer</a> , 2{" "}
            <a href="/">Commuter</a>, 1<a href="/">Moped</a> and 1{" "}
            <a href="/">Sports Naked</a>. Upcoming TVS bike in India include TVS
            ADV, TVS Apache RTR 310 , TVS iQube Electric which are expected to
            launch in 2023. Select a TVS motorcycle to find out its latest
            price, specifications, TVS Finance, offers, mileage, colors, images
            and more at BikeDekho. To get more details of TVS bikes, download
            BikeDekho App.Searching for <a href="/">TVS Scooters</a>?
          </Typography>
        </Box>
      </Grid>
      <Typography variant="h2">TVS Bikes Price List 2023 in India </Typography>

      <CardBikes />
    </Box>
  );
}

export default DashBoardPage;
