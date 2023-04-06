import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import listings from "../listings.json";

export default function SearchBox(props) {
  return (
    <Box
      sx={{
        mt: 4,
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
            value={props.search}
            label="Search"
            name="Search String"
            onChange={props.handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.search}
              label="Category"
              onChange={props.handleInputChange}
            >
              {listings.map((item) => {
                return item(
                  <MenuItem
                    value={item.industry.toUpperCase().split(" ").join("_")}
                  >
                    {item.industry}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 5 }}>
        Search
      </Button>
    </Box>
  );
}
