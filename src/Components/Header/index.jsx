import { Typography } from "@mui/material";

function Header({ title }) {
  return (
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
  );
}

export default Header;
