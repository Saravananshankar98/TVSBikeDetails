import { Box, Drawer, MenuItem, MenuList, Typography } from "@mui/material";
import tvsLogo from "../../../assets/images/tvs-logo.png";
import { BikeDetailsMenu } from "../../../common/bikeDetails";

function AppSideBar() {
  return (
    <Drawer
      open
      variant="permanent"
      PaperProps={{
        sx: {
          width: "250px",
          backgroundColor: "white",
          marginTop: "64px",
          paddingTop: {
            mt: "100px",
          },
        },
      }}
    >
      <Box
        sx={{ width: 100, height: 50, paddingTop: "25px", paddingLeft: "25px" }}
      >
        {" "}
        <img src={tvsLogo} width={100} alt="TVS logo" />
      </Box>
      {BikeDetailsMenu?.map((bikeDetails) => (
        <MenuList>
          <MenuItem>
            <img src={bikeDetails.img} alt="tvs" width={50} />
            <Typography>
              {" "}
              &nbsp;&nbsp;
              <Box component="span">{bikeDetails.bikeName} </Box>
            </Typography>
          </MenuItem>
        </MenuList>
      ))}
    </Drawer>
  );
}

export default AppSideBar;
