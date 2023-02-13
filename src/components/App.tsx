import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import DashBoardPage from "../pages/dashboard";
import BikeDetailsPage from "../pages/bike-details/index";
import theme, { dashboardBox } from "../themes/themes";
import { useBikeDetailContext } from "./context";
import AppFooter from "./layout/app-footer/app-footer";
import AppHeader from "./layout/app-header/app-header";
import AppSideBar from "./layout/app-sidebar/app-sidebar";

function App() {
  const { bikeNameState } = useBikeDetailContext();
  const [bikeName, _setBikeName] = bikeNameState;
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <AppSideBar />
        <Box sx={dashboardBox}>
          {bikeName ? <BikeDetailsPage /> : <DashBoardPage />}
          <AppFooter />
        </Box>
        
      </ThemeProvider>
    </Box>
  );
}

export default App;
