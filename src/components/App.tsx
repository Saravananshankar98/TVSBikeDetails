import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import DashBoardPage from "../pages/dashboard";
import theme, { dashboardBox } from "../themes/themes";
import AppFooter from "./layout/app-footer/app-footer";
import AppHeader from "./layout/app-header/app-header";
import AppSideBar from "./layout/app-sidebar/app-sidebar";

function App() {
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <AppSideBar />
        <Box sx={dashboardBox}>
          <DashBoardPage />
          <AppFooter />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default App;
