import { Box, Drawer, MenuItem, MenuList, Typography } from "@mui/material";
import tvsLogo from "../../../assets/images/tvs-logo.png";
import { TvsBikeDetailsDescriptions } from "../../../common/tvs-bike-details-descriptions";

function AppSideBar() {
  return (
    <Drawer
      open
      variant="permanent"
      PaperProps={{
        sx: {
          width: "250px",
          // backgroundColor: "white",
          marginTop: "64px",
          paddingTop: {
            mt: "100px",
          },
        },
      }}
    >
      <Box sx={{ paddingTop: "15px", paddingLeft: "40px" }}>
        <img src={tvsLogo} width="auto" height="auto" alt="TVS logo" />
      </Box>
      {TvsBikeDetailsDescriptions?.map((bikeDetails) => (
        <MenuList>
          <MenuItem>
            <img src={bikeDetails.img} alt="tvs" width={50} />
            <Typography>
              {" "}
              &nbsp;&nbsp;
              <Box component="span">{bikeDetails.BikeName} </Box>
            </Typography>
          </MenuItem>
        </MenuList>
      ))}
    </Drawer>
  );
}

export default AppSideBar;
