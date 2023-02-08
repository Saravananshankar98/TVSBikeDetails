import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
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
          {/* <Box sx={{ paddingTop: "15px", paddingLeft: "10px" }}>
            <img
              src="https://www.pngfind.com/pngs/m/543-5431679_tvs-logo-png-vector-free-download-tvs-motors.png"
              width="150"
              height="50"
              alt="TVS logo"
            />
          </Box> */}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
