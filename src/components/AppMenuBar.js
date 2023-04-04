import * as React from "react";
import logo from "../logo.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export const AppMenuBar = (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Box
          component="img"
          sx={{
            height: 100,
          }}
          alt="Vhaus listing"
          src={logo}
        />
      </Toolbar>
    </AppBar>
  </Box>
);
