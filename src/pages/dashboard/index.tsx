import { Box } from "@mui/system";
import AppHeader from "../../components/layout/app-header/app-header";
import AppSideBar from "../../components/layout/app-sidebar/app-sidebar";

function DashBoardPage() {
  return (
    <Box sx={{ paddingLeft: "260px", marginTop: "64px" }}>
      <AppHeader />
      <AppSideBar />
      <h1>Bike Details</h1>
    </Box>
  );
}

export default DashBoardPage;
