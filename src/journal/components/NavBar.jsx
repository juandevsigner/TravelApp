import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LoginOutlined, MenuOutlined } from "@mui/icons-material";

export const NavBar = ({ draweWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${draweWidth}px)` },
        ml: { sm: `${draweWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="h6">
            JournalApp
          </Typography>
          <IconButton color="error">
            <LoginOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
