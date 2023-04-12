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
import { Grid, Typography } from "@mui/material";

const theme = createTheme();

export default function App() {
  const defaultState = {
    searchString: "",
    searchCategory: "",
    listingsData: listings,
  };
  const [state, setState] = useState(defaultState);

  function handleInputChange(event) {
    const value = event.target.value;
    let industryFilter;
    if (value && state.searchCategory && state.searchCategory !== "ALL") {
      industryFilter = listings
        .filter((item) => item.industry.includes(state.searchCategory))
        .map((item) => ({
          ...item,
          listings: item.listings.filter(
            (list) =>
              list.businessName.toLowerCase().includes(value.toLowerCase()) ||
              list.servicesOffered.toLowerCase().includes(value.toLowerCase())
          ),
        }));
    } else if (value) {
      industryFilter = listings.map((item) => ({
        ...item,
        listings: item.listings.filter(
          (list) =>
            list.businessName.toLowerCase().includes(value.toLowerCase()) ||
            list.servicesOffered.toLowerCase().includes(value.toLowerCase())
        ),
      }));
    } else {
      industryFilter = state.listingsData;
    }
    setState({
      ...state,
      searchString: value,
      listingsData: industryFilter,
    });
  }
  function handleSelectChange(event) {
    const value = event.target.value;
    if (value === "ALL") {
      setState({
        ...state,
        searchString: "",
        searchCategory: value,
        listingsData: listings,
      });
    } else {
      const returnedData = listings
        .filter((item) => item.industry.includes(value))
        .map((item) => ({
          ...item,
          listings: item.listings.filter(
            (list) =>
              list.businessName.toLowerCase().includes(value.toLowerCase()) ||
              list.servicesOffered.toLowerCase().includes(value.toLowerCase())
          ),
        }));
      setState({
        ...state,
        searchCategory: value,
        listingsData: returnedData,
      });
    }
  }

  return (
    <div>
      {AppMenuBar}
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <SearchBox
            searchCategory={state.searchCategory}
            searchString={state.searchString}
            handleInputChange={handleInputChange}
            handleSelectChange={handleSelectChange}
          />
          <Grid container spacing={2}>
            {state.listingsData ? (
              state.listingsData.map((industry) => {
                return industry.listings.map((listItem, key) => (
                  <Grid item xs={12} md={4} key={key}>
                    <ListGroup
                      key={key}
                      listItem={listItem}
                      colorCode={industry.colorCode}
                    />
                  </Grid>
                ));
              })
            ) : (
              <Grid item xs={12} md={12}>
                <Typography variant="h5" color="text.secondary">
                  No results found, try a different search or selection
                </Typography>
              </Grid>
            )}
          </Grid>
          <CopyrightFooter />
        </Container>
      </ThemeProvider>
    </div>
  );
}
