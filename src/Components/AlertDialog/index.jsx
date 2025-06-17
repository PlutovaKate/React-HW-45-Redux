import * as React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../store/slices/contactsSlice";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";

function AlertDialog({ contactName, contactPhone, contactId }) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Delete
      </Button>
      <Button
        variant="outlined"
        onClick={() => navigate(`/editContact/${contactId}`)}
      >
        <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>{contactName}</DialogContentText>
          <DialogContentText>{contactPhone}</DialogContentText>
          <DialogContentText>
            This contact will be removed from your contact list.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => dispatch(deleteContact(contactId))} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AlertDialog;
