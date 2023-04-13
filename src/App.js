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

  function filterItemByCategoryAndValue(categorySelect, searchString) {
    return listings
      .filter((item) => item.industry.includes(categorySelect))
      .map((item) => ({
        ...item,
        listings: filterItemByValue(item, searchString),
      }));
  }

  function filterItemByValue(listItem, searchString) {
    return listItem.listings.filter(
      (list) =>
        list.businessName.toLowerCase().includes(searchString.toLowerCase()) ||
        list.servicesOffered.toLowerCase().includes(searchString.toLowerCase())
    );
  }

  function handleInputChange(event) {
    const searchString = event.target.value;
    let industryFilter;
    if (state.searchCategory !== "ALL") {
      industryFilter = filterItemByCategoryAndValue(
        state.searchCategory,
        searchString
      );
    } else if (searchString && state.searchCategory === "ALL") {
      industryFilter = listings.map((item) => ({
        ...item,
        listings: filterItemByValue(item, searchString),
      }));
    } else {
      industryFilter = listings;
    }
    setState({
      ...state,
      searchString: searchString,
      listingsData: industryFilter,
    });
  }

  function handleSelectChange(event) {
    const categorySelect = event.target.value;
    if (categorySelect === "ALL") {
      setState({
        ...state,
        searchString: "",
        searchCategory: categorySelect,
        listingsData: listings,
      });
    } else {
      setState({
        ...state,
        searchCategory: categorySelect,
        listingsData: filterItemByCategoryAndValue(
          categorySelect,
          state.searchString
        ),
      });
    }
  }
  const GetListingsData = () => {
    return state.listingsData
      .map((industry) => {
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
      .filter(({ length }) => length > 0);
  };

  const EmptySearch = () => (
    <Grid item xs={12} md={12} textAlign={"center"}>
      <Typography variant="h5" color="error.main">
        No results found, try a different search or selection
      </Typography>
    </Grid>
  );

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
            {GetListingsData().length > 0 ? (
              <GetListingsData />
            ) : (
              <EmptySearch />
            )}
          </Grid>
          <CopyrightFooter />
        </Container>
      </ThemeProvider>
    </div>
  );
}
