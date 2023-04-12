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
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

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
    <Card key={businessName} style={{ height: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: AvatarColor(props.colorCode) }}>
            <IconButton aria-label="settings">
              <Typography variant="body2" color="text.secondary">
                {businessName.charAt(0) + businessName.toUpperCase().charAt(1)}
              </Typography>
            </IconButton>
          </Avatar>
        }
        title={businessName}
        subheader={servicesOffered}
      />
      <CardContent>
        {address ? (
          <Link
            href={`http://maps.google.com/?q=${address}+${suburb}`}
            target="_blank"
            underline="hover"
            rel="noopener"
          >
            <Typography variant="body2" color="text.secondary" display="inline">
              Address:&nbsp;
            </Typography>
            <Typography variant="body1" color="text.primary" display="inline">
              {address}
            </Typography>
          </Link>
        ) : null}
        {suburb ? (
          <Link
            href={`http://maps.google.com/?q=${address}+${suburb}`}
            target="_blank"
            underline="hover"
            rel="noopener"
          >
            <br mt={4} />
            <Typography variant="body2" color="text.secondary" display="inline">
              Suburb:&nbsp;
            </Typography>
            <Typography variant="body1" color="text.primary" display="inline">
              {suburb}
            </Typography>
          </Link>
        ) : null}
      </CardContent>
      <CardActions>
        <CallButton
          contactNo={contactNo}
          mobileNo={mobileNo}
          contactPerson={contactPerson}
        />
        <EmailButton emailAddress={emailAddress} />
        <WebsiteButton website={website} />
      </CardActions>
    </Card>
  );
}

function AvatarColor(colorCode) {
  if (colorCode) {
    return colorCode;
  }
  let hex = Math.floor(Math.random() * 0xffffff);
  return "#" + hex.toString(16);
}

const WebsiteButton = ({ website }) => {
  if (website) {
    return (
      <Button size="small" href={website} target="_blank">
        Website
      </Button>
    );
  }
};
const EmailButton = ({ emailAddress }) => {
  if (emailAddress) {
    return (
      <Button size="small" href={`mailto:${emailAddress}`}>
        Email
      </Button>
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
            <ListItemText>
              <Typography variant="body2" color="text.primary" display="inline">
                Primary:&nbsp;{contactNo}
              </Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        {mobileNo ? (
          <ListItem disablePadding>
            <ListItemButton href={`tel:${mobileNo}`}>
              <ListItemText>
                <Typography
                  variant="body2"
                  color="text.primary"
                  display="inline"
                >
                  Secondary:&nbsp;{mobileNo}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ) : null}
      </List>
    </Dialog>
  );
};
