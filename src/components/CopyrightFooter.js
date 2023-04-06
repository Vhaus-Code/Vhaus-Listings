import * as React from "react";
import Typography from "@mui/material/Typography";

export default function Copyright() {
  var copyrightText = "Vhaus Listing " + new Date().getFullYear() + ".";
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5, mb: 5 }}
    >
      {`Copyright © ${copyrightText}.`}
    </Typography>
  );
}
