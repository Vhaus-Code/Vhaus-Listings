import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import * as React from "react";
export default function ListGroup(props) {
  const { industry, listings } = props.industryList;
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: randomColor() }} aria-label="hello">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={industry}
        subheader={listings.length}
      />
    </Card>
  );
}

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff);
  return "#" + hex.toString(16);
}
