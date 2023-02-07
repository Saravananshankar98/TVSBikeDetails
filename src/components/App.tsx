import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import DashBoardPage from "../pages/dashboard";
import theme from "../themes/themes";
import AppHeader from "./layout/app-header/app-header";
import AppSideBar from "./layout/app-sidebar/app-sidebar";

function App() {
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <AppSideBar />
        <DashBoardPage />
      </ThemeProvider>
    </Box>
  );
}

export default App;
