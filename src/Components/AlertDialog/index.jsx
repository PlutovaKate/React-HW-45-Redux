import * as React from "react";
import { useNavigate } from "react-router";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";

function AlertDialog({ contactName, contactPhone, contactId, onDelete }) {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Delete
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          navigate(`/editContact/${contactId}`);
        }}
      >
        <EditIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Contact</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {contactName}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            {contactPhone}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            This contact will be removed from your contact list.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => onDelete(contactId)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AlertDialog;
