import ContactList from "./Components/ContactList";
import Header from "./Components/Header";
import ContactForm from "./Components/ContactForm";
import EditForm from "./Components/EditForm";
import ErrorBoundary from "./Components/ErrorBoundary";

import AddIcon from "@mui/icons-material/Add";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

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
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={NavLink} to="/">
            Contacts <PermContactCalendarIcon />
          </Button>
          <Button color="inherit" component={NavLink} to="/addContact">
            Add Contact <AddIcon />
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
                  <ContactList />
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
                  onCancel={() => navigate("/")}
                  onReturnToList={() => navigate("/")}
                />
              </>
            }
          />
          <Route path="/editContact/:id" element={<EditForm />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
