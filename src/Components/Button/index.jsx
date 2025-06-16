import { Button } from "@mui/material";

function Buttons({ type = "button", children, onClick, ...rest }) {
  return (
    <Button type={type} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}

export default Buttons;
