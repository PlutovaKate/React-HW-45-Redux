import { Stack, TextField } from "@mui/material";
import Buttons from "../Button";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

function EditForm({ contacts, onCancel, onSave }) {
  const { id } = useParams();
  const contact = contacts.find((contact) => String(contact.id) === String(id));

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact) {
      setName(contact.name || "");
      setUsername(contact.username || "");
      setPhone(contact.phone || "");
    }
  }, [contact]);

  function handleSubmit(event) {
    event.preventDefault();
    onSave({ id, name, username, phone });
    onCancel();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default EditForm;
