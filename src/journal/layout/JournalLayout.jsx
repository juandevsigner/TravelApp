import { Box, Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";

export const JournalLayout = ({ children }) => {
  const draweWidth = 240;
  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar draweWidth={draweWidth} />
      <SideBar draweWidth={draweWidth}></SideBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
