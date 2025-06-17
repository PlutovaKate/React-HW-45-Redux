import { Stack, TextField } from "@mui/material";
import Buttons from "../Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContact } from "../../store/slices/contactsSlice";
import { useNavigate, useParams } from "react-router";

function EditForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contact = useSelector((state) =>
    state.contacts.find((c) => String(c.id) === String(id))
  );

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
    dispatch(updateContact({ id, name, username, phone }));
    navigate("/");
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
          label="Username"
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
          <Buttons
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/")}
          >
            Cancel
          </Buttons>
        </Stack>
      </Stack>
    </form>
  );
}

export default EditForm;
