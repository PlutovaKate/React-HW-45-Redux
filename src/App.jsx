import { useState } from "react";

import ContactList from "./Components/ContactList";
import Header from "./Components/Header";
import ContactForm from "./Components/ContactForm";
import EditForm from "./Components/EditForm";
import ErrorBoundary from "./Components/ErrorBoundary";

import AddIcon from "@mui/icons-material/Add";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

import data from "./data.json";
import { v4 as uuidv4 } from "uuid";

import {
  Toolbar,
  AppBar,
  Container,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { NavLink, Route, Routes, useNavigate } from "react-router";

const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
  },
});

function App() {
  const [contacts, setContacts] = useState(data);
  const navigate = useNavigate();

  function deleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  function addContact(newContact) {
    setContacts([...contacts, { ...newContact, id: uuidv4() }]);
  }

  function updateContact(updatedContact) {
    setContacts(
      contacts.map((contact) =>
        String(contact.id) === String(updatedContact.id)
          ? updatedContact
          : contact
      )
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={NavLink} to="/">
              Contacts
              <PermContactCalendarIcon />
            </Button>
            <Button color="inherit" component={NavLink} to="/addContact">
              Add Contact
              <AddIcon />
            </Button>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header title="Contacts" />
                  <ErrorBoundary>
                    <ContactList contacts={contacts} onDelete={deleteContact} />
                  </ErrorBoundary>
                </>
              }
            />
            <Route
              path="/addContact"
              element={
                <>
                  <Header title="Contact Form" />
                  <ContactForm
                    onSave={addContact}
                    onCancel={() => {
                      navigate("/");
                    }}
                    onReturnToList={() => {
                      navigate("/");
                    }}
                  />
                </>
              }
            />

            <Route
              path="/editContact/:id"
              element={
                <EditForm
                  contacts={contacts}
                  onCancel={() => {
                    navigate("/");
                  }}
                  onSave={updateContact}
                />
              }
            />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
