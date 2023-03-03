import { Avatar, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  playStoreApp,
  socialMediaLink
} from "../../../common/social-media-icon";
import { footerStyle, socialMediaImage } from "./style";

function AppFooter() {
  return (
    <Box sx={footerStyle}>
      <Box
        sx={{
          backgroundColor: "#3356a9",
          height: "280px",
          color: "whitesmoke",
        }}
      >
        <Grid container sx={{ paddingTop: "40px" }}>
          <Grid
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "whitesmoke",
              paddingTop: "10px",
            }}
          >
            <Typography variant="h4">TVS CONNECT APP</Typography>
          </Grid>
          <Grid xs={3} sx={{ display: "flex", justifyContent: "center" }}>
            {playStoreApp?.map((appDetails) => (
              <Button href={appDetails.link} target="_blank">
                <Box
                  component="img"
                  src={appDetails.icon}
                  alt={appDetails.alt}
                ></Box>
              </Button>
            ))}
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ marginTop: "20px" }}
          columns={{ xs: 3, sm: 3, md: 12 }}
        >
          <Grid xs={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <img
                src="https://1000logos.net/wp-content/uploads/2020/07/TVS-Motor-Logo.jpg"
                width="275px"
                height="80px"
                alt="TVS logo"
              />
            </Box>
          </Grid>
          <Grid xs={3} sx={{ paddingLeft: "60px", justifyContent: "right" }}>
            <Typography variant="h4">ADDRESS</Typography>
            <p>
              Post Box No. 4 <br />
              Harita, Hosur - 635 109 <br />
              Ph: 04344-276780 Fax: 04344-276878
            </p>
          </Grid>
          <Grid
            xs={3}
            columnSpacing={2}
            sx={{ paddingLeft: "60px", justifyContent: "right" }}
          >
            <Typography variant="h4">CALL US ON</Typography>
            <p>
              Toll Free: 18002587555
              <br />
              Ph: +91-44-28332115
              <br />
              Fax: +91-44-28331214
            </p>
          </Grid>

          <Grid sx={{ marginTop: "10px", justifyContent: "center" }}>
            <Button
              className="customer-care-style"
              href="mailto:customercare@tvsmotor.com"
              target="_blank"
            >
              customercare@tvsmotor.com
            </Button>{" "}
            <br />
            <Button
              className="contact-button"
              href="mailto:customercare@tvsmotor.com"
              target="_blank"
            >
              Contact us{" "}
            </Button>{" "}
            <br />
          </Grid>
        </Grid>
      </Box>
      <Box sx={socialMediaImage}>
        <Grid
          container
          sx={{ height: "100px" }}
          columns={{ xs: 6, sm: 6, md: 12 }}
        >
          <Grid
            xs={5}
            sx={{
              display: "flex",
              paddingTop: "26px",
              justifyContent: "center",
            }}
          >
            <Typography>
              © TVS Motor Company. All Rights Reserved.
              <br />
              Privacy Policy | Disclaimer | Cookie Policy
            </Typography>
          </Grid>

          <Grid
            xs={7}
            sx={{ display: "flex", justifyContent: "center", width: "50px " }}
          >
            {socialMediaLink.map((social) => (
              <Button sx={{ width: "60px" }} href={social.link} target="_blank">
                <Avatar alt={social.alt} src={social.icon} />
              </Button>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AppFooter;
