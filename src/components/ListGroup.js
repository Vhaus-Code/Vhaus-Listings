import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import * as React from "react";
export default function ListGroup(props) {
  const {
    businessName,
    servicesOffered,
    contactPerson,
    contactNo,
    mobileNo,
    emailAddress,
    address,
    suburb,
    website,
  } = props.listItem;
  return (
    <Card key={businessName}>
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
        title={businessName}
        subheader={servicesOffered}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hello worlds a.s.as.d.asd.ds
        </Typography>
      </CardContent>
      <CardActions>
        <CallButton
          contactNo={contactNo}
          mobileNo={mobileNo}
          contactPerson={contactPerson}
        />
        <EmailButton emailAddress={emailAddress} />
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function randomColor() {
  let hex = Math.floor(Math.random() * 0xffffff);
  return "#" + hex.toString(16);
}

const EmailButton = ({ emailAddress }) => {
  if (emailAddress) {
    return (
      <>
        <Button size="small" href={`mailto:${emailAddress}`}>
          Email
        </Button>
      </>
    );
  }
};

const CallButton = ({ contactNo, mobileNo, contactPerson }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" size="small" onClick={handleClickOpen}>
        Call
      </Button>
      <CallDialog
        open={open}
        onClose={handleClose}
        contactNo={contactNo}
        mobileNo={mobileNo}
        contactPerson={contactPerson}
      />
    </>
  );
};

const CallDialog = ({ open, onClose, contactNo, mobileNo, contactPerson }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Contact {contactPerson}</DialogTitle>
      <List>
        <ListItem disablePadding>
          <ListItemButton href={`tel:${contactNo}`}>
            <ListItemText>Primary: {contactNo}</ListItemText>
          </ListItemButton>
        </ListItem>
        {mobileNo ? (
          <ListItem disablePadding>
            <ListItemButton href={`tel:${mobileNo}`}>
              <ListItemText>Secondary: {mobileNo}</ListItemText>
            </ListItemButton>
          </ListItem>
        ) : null}
      </List>
    </Dialog>
  );
};
