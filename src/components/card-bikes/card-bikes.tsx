import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Button,
  Card,
  CardActions,
  Grid,
  Rating,
  Typography
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import { useBikeDetailContext } from "../context";
import { BikeImages, buttonHover } from "./style";

function CardBikes(vehicleName: any) {
  const { bikeNameState } = useBikeDetailContext();
  const [bikeName, setBikeName] = bikeNameState;
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 6, sm: 6, md: 12 }}
      >
        {vehicleName?.vehicleName.map((bikeDetails: any) => (
          <Grid item xs={2} sm={6} md={6}>
            <Card
              sx={{
                display: "flex",
                borderRadius: "20px",
                pb: "5px",
                mb: "10px",
                width: "700px",
              }}
            >
              <CardMedia
                component="img"
                sx={BikeImages}
                src={bikeDetails.img}
                alt={bikeDetails.BikeName}
              />
              <Box sx={{ display: "flex", flexDirection: "column", pl: 2 }}>
                <Grid container>
                  <Grid item xs={10}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        {bikeDetails.BikeName}
                      </Typography>
                      <Typography variant="subtitle1">
                        Rs.{bikeDetails.Price} Lakh*
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: "center" }}>
                    <Button sx={{ paddingTop: "10px", minWidth: "inherit" }}>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                      />
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 4 }}
                >
                  <Rating value={4.5} precision={0.5} readOnly /> &nbsp;&nbsp;
                  <Typography>
                    Based On {bikeDetails.Reviews} User Reviews
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", pl: 1 }}>
                  <Typography>
                    {bikeDetails.CC} cc {bikeDetails.RPM} rpm {bikeDetails.KMPH}{" "}
                    KMPH
                  </Typography>
                </Box>
                <CardActions>
                  <Button
                    sx={buttonHover}
                    onClick={() => setBikeName(bikeDetails.BikeName)}
                  >
                    Know More
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CardBikes;
