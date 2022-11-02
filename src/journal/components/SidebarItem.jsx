import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SidebarItem = ({ title, id, body, date, imageUrls = [] }) => {
  const dispatch = useDispatch();
  const setNote = () => {
    dispatch(setActiveNote({ title, id, body, date, imageUrls }));
  };
  const newTitle = useMemo(() => {
    return title.length > 20 ? title.substring(0, 25) + "..." : title;
  }, [title]);
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={setNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
