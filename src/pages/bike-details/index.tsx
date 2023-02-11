import { Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BikeImages } from "../../components/card-bikes/style";

function BikeDetailsPage() {
  return (
    <>
      {/* bike concept */}
      <Box>
        <h2>CONCEPT</h2>
        <Grid container columns={{ xs: 6, sm: 6, md: 12 }} rowSpacing={2}>
          <Grid
            xs={7}
            sx={{
              display: "flex",
              paddingTop: "26px",
              justifyContent: "center",
            }}
          >

            <Typography variant="subtitle1">
            <Typography variant="h2">Apache RTR 180</Typography>
            <br/>
              For over ten years the TVS Apache RTR 180 has been a mainstay on
              the track, pushing the boundaries of performance. Now the iconic
              race machine is set to become the all-new racer's choice. It’s the
              first in its class to be equipped with ride modes, making the
              already formidable performance machine, even more cutting edge.
              The iconic styling now gets more aggressive, with distinct LED
              headlamps and tail lamps. While the flared tank design and angular
              cowls, offer aerodynamic superiority and track presence.
            </Typography>
          </Grid>

          <Grid xs={5} sx={{ display: "flex", justifyContent: "left" }}>
            <Box
              component="img"
              sx={BikeImages}
              src={`https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/optimized-images/TVS-Apache-180-Web-Banner_643-x-543-static-profile-shot.png`}
              alt={"all"}
            />
          </Grid>
        </Grid>
      </Box>
      {/* bike FEATURES */}
      <Box>
        <h2>Features</h2>
        <Grid container sx={{ backgroundColor:"red", textAlign:"center", justifyContent:"center" }}>
          <Box >
      <Tabs>
        <Tab label={"Performance"} ></Tab>
        <Tab label={"Style"} ></Tab>
        <Tab label={"Design"} ></Tab>
      </Tabs>
    </Box> 
          </Grid>
        <Grid container columns={{ xs: 6, sm: 6, md: 12 }}>

          <Grid xs={5} sx={{ display: "flex", justifyContent: "left", backgroundColor:"green" }}>
            <Box
              component="img"
              sx={BikeImages}
              src={`https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/optimized-images/TVS-Apache-180-Web-Banner_643-x-543-static-profile-shot.png`}
              alt={"all"}
            />
          </Grid>
          <Grid
            xs={7}
            sx={{
              display: "flex",
              paddingTop: "26px",
              justifyContent: "center",
              backgroundColor:"white"
            }}
            columnSpacing={2}
          >
            
          </Grid>

        </Grid>
      </Box>
      {/* bike Colours */}
      <Box>
        <h2>COLOURS</h2>
        <Grid container columns={{ xs: 6, sm: 6, md: 12 }}>
          <Grid
            xs={5}
            sx={{
              display: "flex",
              paddingTop: "26px",
              justifyContent: "center",
            }}
            columnSpacing={2}
          >
            
          </Grid>

          <Grid xs={7} sx={{ display: "flex", justifyContent: "left" }}>
            <Box
              component="img"
              sx={BikeImages}
              src={`https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/optimized-images/TVS-Apache-180-Web-Banner_643-x-543-static-profile-shot.png`}
              alt={"all"}
            />
          </Grid>
        </Grid>
      </Box>
      {/*bike tech specs */}
      <Box>
        <h2>tech specs</h2>
        <Grid container columns={{ xs: 6, sm: 6, md: 12 }}>
          <Grid
            xs={5}
            sx={{
              display: "flex",
              paddingTop: "26px",
              justifyContent: "center",
            }}
            columnSpacing={2}
          >
            </Grid>

          <Grid xs={7} sx={{ display: "flex", justifyContent: "left" }}>
            <Box
              component="img"
              sx={BikeImages}
              src={`https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/optimized-images/TVS-Apache-180-Web-Banner_643-x-543-static-profile-shot.png`}
              alt={"all"}
            />
          </Grid>
        </Grid>
      </Box>
      {/* bike price */}
      <Box>
        <h2>Price</h2>
        <Grid container columns={{ xs: 6, sm: 6, md: 12 }}>
          <Grid
            xs={5}
            sx={{
              display: "flex",
              paddingTop: "26px",
              justifyContent: "center",
            }}
            columnSpacing={2}
          >
            
          </Grid>

          <Grid xs={7} sx={{ display: "flex", justifyContent: "left" }}>
            <Box
              component="img"
              sx={BikeImages}
              src={`https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/optimized-images/TVS-Apache-180-Web-Banner_643-x-543-static-profile-shot.png`}
              alt={"all"}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Bike Gallery */}
      <Box>
        <h2>GALLERY</h2>
        <Grid container columns={{ xs: 4, sm: 4, md: 12 }}>
          <Grid
            xs={4}
            sx={{
              display: "flex",
              paddingTop: "26px",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={BikeImages}
              src={`https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/optimized-images/TVS-Apache-180-Web-Banner_643-x-543-static-profile-shot.png`}
              alt={"all"}
            />
          </Grid>

          <Grid xs={4} sx={{ display: "flex", justifyContent: "left" }}>
            <Box
              component="img"
              sx={BikeImages}
              src={`https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/optimized-images/TVS-Apache-180-Web-Banner_643-x-543-static-profile-shot.png`}
              alt={"all"}
            />
          </Grid>
          <Grid xs={4} sx={{ display: "flex", justifyContent: "left" }}>
            <Box
              component="img"
              sx={BikeImages}
              src={`https://www.tvsmotor.com/tvs-apache/-/media/Brand-Pages/Apache/Apache-RTR/Apache-RTR-180/08-09-22/optimized-images/TVS-Apache-180-Web-Banner_643-x-543-static-profile-shot.png`}
              alt={"all"}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default BikeDetailsPage;
