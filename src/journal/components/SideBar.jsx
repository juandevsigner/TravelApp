import { useSelector } from "react-redux";
import { TurnedInNot } from "@mui/icons-material";
import { Box, Drawer, Typography, Toolbar, Divider, List } from "@mui/material";
import React from "react";
import { SidebarItem } from "./SidebarItem";

export const SideBar = ({ draweWidth }) => {
  const { displayName } = useSelector(state => state.auth);
  const { notes } = useSelector(state => state.journal);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: draweWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: draweWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="h6">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map(note => (
            <SidebarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
