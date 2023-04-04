import "./App.css";
import React from "react";

import { AppMenuBar } from "./components/AppMenuBar";
import SearchBox from "./components/SearchBox";
import CopyrightFooter from "./components/CopyrightFooter";
import listings from "./listings.json";
import ListGroup from "./components/ListGroup";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function App() {
  console.log(listings);
  var filteredData = listings.filter((item) => item.industry.includes("Tech"));
  console.log(filteredData);
  return (
    <div>
      {AppMenuBar}
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <SearchBox />
          <ListGroup />
          <CopyrightFooter sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
