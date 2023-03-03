import { Box, Drawer } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import Typography from "@mui/material/Typography";
import { fontSize } from "./style";

const MotorCyclesDetails = [
  { id: "10", name: "Apache RR 310" },
  { id: "11", name: "Ronin" },
  { id: "12", name: "Apache RTR 160" },
  { id: "13", name: "Apache RTR 180" },
  { id: "14", name: "Apache RTR 200" },
  { id: "15", name: "Raider" },
  { id: "16", name: "Radeon" },
  { id: "17", name: "Star City plus" },
  { id: "18", name: "Sport" },
];

const scootersDetails = [
  { id: "6", name: "Jupiter" },
  { id: "7", name: "Ntorq" },
  { id: "8", name: "Zest 110" },
  { id: "9", name: "Scooty Pep plus" },
];

function AppSideBar() {
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
      <Box sx={fontSize}>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ flexGrow: 1, overflowY: "auto", fontWeight: "20px" }}
        >
          <TreeItem
            nodeId="1"
            label={
              <Typography variant="body1" className="font-size-16">
                {" "}
                Scooters
              </Typography>
            }
          >
            {scootersDetails.map((scooterName) => (
              <TreeItem
                sx={{ fontSize: "45px" }}
                nodeId={scooterName.id}
                label={
                  <Typography variant="body1" className="font-size-16">
                    {" "}
                    {scooterName.name}
                  </Typography>
                }
                onClick={() => console.log(scooterName.name)}
              />
            ))}
          </TreeItem>
          <TreeItem
            nodeId="2"
            label={
              <Typography variant="body1" className="font-size-16">
                {" "}
                MotorCycles
              </Typography>
            }
          >
            {MotorCyclesDetails?.map((treeValue) => (
              <TreeItem
                nodeId={treeValue.id}
                label={
                  <Typography variant="body1" className="font-size-16">
                    {" "}
                    {treeValue.name}
                  </Typography>
                }
                onClick={() => console.log(treeValue.name)}
              />
            ))}
          </TreeItem>
          <TreeItem
            nodeId="3"
            label={
              <Typography variant="body1" className="font-size-16">
                {" "}
                Mopeds
              </Typography>
            }
          >
            <TreeItem
              nodeId="19"
              label={
                <Typography variant="body1" className="font-size-16">
                  {" "}
                  XL 100
                </Typography>
              }
              onClick={() => console.log("XL 100")}
            />
          </TreeItem>
          <TreeItem
            nodeId="4"
            label={
              <Typography variant="body1" className="font-size-16">
                {" "}
                Electric
              </Typography>
            }
          >
            <TreeItem
              nodeId="20"
              label={
                <Typography variant="body1" className="font-size-16">
                  {" "}
                  iQube
                </Typography>
              }
              onClick={() => console.log("iQube")}
            />
          </TreeItem>
        </TreeView>
      </Box>
    </Drawer>
  );
}

export default AppSideBar;
