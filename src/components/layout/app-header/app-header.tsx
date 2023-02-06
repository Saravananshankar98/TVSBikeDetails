import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from "../../../themes/themes";
// import { NavLink } from "react-router-dom";

const models = {
  Scooter: "Scooter",
  MotorCycles: "MotorCycles",
  Mopeds: "Mopeds",
};

function AppHeader() {
  const [showOverLaySideBar, setShowOverLaySideBar] = useState(false);
  const drawerWidth = 240;
  const showSideBar = () => {
    setShowOverLaySideBar(!showOverLaySideBar);
  };

  return (
    <Box>
      <Drawer
        open={showOverLaySideBar}
        onClose={() => showSideBar()}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            paddingTop: {
              md: "10px",
            },
          },
        }}
      >
        <List>
          {Object.keys(models).map((modelKey) => (
            <ListItem>
              <Box component="span" sx={{ textDecoration: "none" }}>
                <ListItemText>{modelKey}</ListItemText>
              </Box>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={showSideBar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Bike Details
          </Typography>

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
