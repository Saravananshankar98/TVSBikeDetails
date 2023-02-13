import { Box, Drawer } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import { useBikeDetailContext } from "../../context";
import { fontSize } from "./style";

function AppSideBar() {
  const { bikeNameState } = useBikeDetailContext();
  const [bikeName, setBikeName] = bikeNameState;
  const handleBikeChange =(value: string) =>{
    console.log(value);
    console.log("bikeName",bikeName);
    setBikeName(""); 
    console.log("bikeName22",bikeName);
  }
  return (
    <Drawer
      open
      variant="permanent"
      PaperProps={{
        sx: {
          width: "250px",
          backgroundImage: `url("https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJsdWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "whitesmoke",
          paddingTop: {
            mt: "100px",
          },
        },
      }}
    >
      <Box sx={{ padding: "15px", marginLeft: "20px" }}>
        <img
          src="https://1000logos.net/wp-content/uploads/2020/07/TVS-Motor-Logo.jpg"
          width="150"
          height="70"
          alt="TVS logo"
        />
      </Box>
      <Box sx={fontSize} >
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ flexGrow: 1, overflowY: "auto", fontWeight:"20px" }}
        >
          <TreeItem  nodeId="1" label="Scooters">
            <TreeItem nodeId="6" label="Jupiter"  onClick={()=>handleBikeChange("Jupiter")} />
            <TreeItem nodeId="7" label="Ntorq"  onClick={()=>handleBikeChange("Ntorq")}/>
            <TreeItem nodeId="8" label="Zest 110"  onClick={()=>handleBikeChange("Zest 110")}/>
            <TreeItem nodeId="9" label="Scooty Pep plus"  onClick={()=>handleBikeChange("Scooty Pep plus")}/>
          </TreeItem>
          <TreeItem nodeId="2" label="MotorCycles">
            <TreeItem nodeId="10" label="Apache RR 310"  onClick={()=>handleBikeChange("Apache RR 310")}/>
            <TreeItem nodeId="11" label="Ronin"  onClick={()=>handleBikeChange("Ronin")}/>
            <TreeItem nodeId="12" label="Apache RTR 160"  onClick={()=>handleBikeChange("Apache RTR 160")}/>
            <TreeItem nodeId="13" label="Apache RTR 180"  onClick={()=>handleBikeChange("Apache RTR 180")}/>
            <TreeItem nodeId="14" label="Apache RTR 200"  onClick={()=>handleBikeChange("Apache RTR 200")}/>
            <TreeItem nodeId="15" label="Raider"  onClick={()=>handleBikeChange("Raider")}/>
            <TreeItem nodeId="16" label="Radeon"  onClick={()=>handleBikeChange("Radeon")}/>
            <TreeItem nodeId="17" label="Star City plus"  onClick={()=>handleBikeChange("Star City plus")}/>
            <TreeItem nodeId="18" label="Sport"  onClick={()=>handleBikeChange("Sport")}/>
          </TreeItem>
          <TreeItem nodeId="3" label="Mopeds">
            <TreeItem nodeId="19" label="XL 100"  onClick={()=>handleBikeChange("XL 100")}/>
          </TreeItem>
          <TreeItem nodeId="4" label="Electric">
            <TreeItem nodeId="20" label="iQube"  onClick={()=>handleBikeChange("iQube")}/>
          </TreeItem>
        </TreeView>
      </Box>
    </Drawer>
  );
}

export default AppSideBar;
