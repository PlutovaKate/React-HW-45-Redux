import { useState } from "react";
import Buttons from "../Button";
import { Stack, TextField } from "@mui/material";
import { addContact } from "../../store/slices/contactsSlice";
import { useDispatch } from "react-redux";

function ContactForm({ onCancel, onReturnToList }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addContact({ name, username, phone }));
    onReturnToList();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <Stack direction="row" spacing={2}>
          <Buttons type="submit" variant="contained" color="primary">
            Save
          </Buttons>
          <Buttons variant="outlined" color="secondary" onClick={onCancel}>
            Cancel
          </Buttons>
        </Stack>
      </Stack>
    </form>
  );
}

export default ContactForm;
