import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import { Grid, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import TestRide from "../../../pages/test-ride/test-ride";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from "../../../themes/themes";

function AppHeader() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            backgroundImage: `url("https://i.pinimg.com/originals/12/65/83/126583b1d1b536fb77f337f9b6620f30.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginLeft: "250px",
          }}
        >
          {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search> */}
          <Grid container md={12} sx={{textAlign:"center",justifyContent:"flex-end"}}>
            <Grid xs={1} sx={{ justifyContent:"flex-end",paddingTop:"14px"}}>
           {/* < href="/TestRide"  underline="none"> */}
            test Ride
            </Grid>
            <Grid xs={1} sx={{justifyContent:"center",paddingTop:"14px", display:"flex"}}>
              Book Vehicle
            </Grid>
            <Grid
            xs={0.3} sx={{justifyContent:"flex-end"}}>
          <Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
