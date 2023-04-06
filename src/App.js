import "./App.css";
import React, { useState } from "react";

import { AppMenuBar } from "./components/AppMenuBar";
import SearchBox from "./components/SearchBox";
import CopyrightFooter from "./components/CopyrightFooter";
import listings from "./listings.json";
import ListGroup from "./components/ListGroup";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";

const theme = createTheme();

export default function App() {
  const [state, setState] = useState({
    searchString: "",
    listingsData: listings,
  });

  function handleInputChange(event) {
    const value = event.target.value;
    const industryFilter = listings.filter((item) =>
      item.industry.toLowerCase().includes(value)
    );
    // const listingsFilter = industryFilter
    setState({
      ...state,
      searchString: value,
      listingsData: industryFilter,
    });
  }

  return (
    <div>
      {AppMenuBar}
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <SearchBox handleInputChange={handleInputChange} />
          <Grid container spacing={2}>
            {state.listingsData.map((industry, key) => {
              return (
                <Grid item xs={12} md={4} key={key}>
                  <ListGroup industryList={industry} />
                </Grid>
              );
            })}
          </Grid>
          <CopyrightFooter sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

function getListItems(filterValue) {
  listings.filter((item) => {
    return item.industry.toLowerCase().includes(filterValue);
  });
}
