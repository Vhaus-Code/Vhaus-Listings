import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import listings from "../listings.json";

export default function SearchBox(props) {
  var searchValue = props.searchCategory ? props.searchCategory : "ALL";
  return (
    <Box
      sx={{
        mt: 4,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="searchText"
            defaultValue={props.searchString}
            label="Search"
            name="Search String"
            onChange={props.handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="category-select">Category</InputLabel>
            <Select
              labelId="category-select"
              id="category-select"
              value={searchValue}
              label="Category"
              onChange={props.handleSelectChange}
            >
              <MenuItem key="ALL" value="ALL">
                -- All Categories--
              </MenuItem>
              {listings.map((item, key) => {
                return (
                  <MenuItem key={key} value={item.industry}>
                    {item.industry}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
