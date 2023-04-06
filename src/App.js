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
    let industryFilter;
    if (value) {
      industryFilter = state.listingsData.map((item) => ({
        ...item,
        listings: item.listings.filter(
          (list) =>
            list.businessName.toLowerCase().includes(value.toLowerCase()) ||
            list.servicesOffered.toLowerCase().includes(value.toLowerCase())
        ),
      }));
    } else {
      industryFilter = listings;
    }
    setState({
      ...state,
      searchString: value,
      listingsData: industryFilter,
    });
  }
  function handleSelectChange(event) {
    const value = event.target.value;
    const industryFilter = listings.map((item) => ({
      ...item,
      listings: item.listings.filter(
        (list) =>
          list.businessName.toLowerCase().includes(value.toLowerCase()) ||
          list.servicesOffered.toLowerCase().includes(value.toLowerCase())
      ),
    }));
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
          <SearchBox
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
          />
          <Grid container spacing={2}>
            {state.listingsData.map((industry, key) => {
              return industry.listings.map((listItem, key) => (
                <Grid item xs={12} md={4} key={key}>
                  <ListGroup key={key} listItem={listItem} />
                </Grid>
              ));
            })}
          </Grid>
          <CopyrightFooter />
        </Container>
      </ThemeProvider>
    </div>
  );
}
