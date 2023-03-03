import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Grid
            container
            md={12}
            sx={{ textAlign: "center", justifyContent: "flex-end" }}
          >
            <Grid
              xs={1}
              sx={{ justifyContent: "flex-end", paddingTop: "10px" }}
            >
              <Typography variant="h5"> test Ride</Typography>
            </Grid>
            <Grid
              xs={1.5}
              sx={{
                justifyContent: "center",
                paddingTop: "10px",
                display: "flex",
              }}
            >
              <Typography variant="h5"> Book Vehicle</Typography>
            </Grid>
            <Grid xs={0.4} sx={{ justifyContent: "flex-end" }}>
              <Box>
                <IconButton
                  size="large"
                  // edge="end"
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
