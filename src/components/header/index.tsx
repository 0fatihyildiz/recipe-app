import { Button } from "@mui/material-next";
import Logo from "./logo";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Button color="tertiary" disabled={false} variant="outlined">
        Sign In
      </Button>
    </div>
  );
}
