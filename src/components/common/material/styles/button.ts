import { Button, ButtonProps, styled } from "@mui/material";
import { amber, grey } from "@mui/material/colors";

const PrimaryButton = styled(Button)<ButtonProps>(() => ({
  boxShadow: "none",
  fontWeight: 500,
  textTransform: "inherit",
  borderRadius: "10px",
  backgroundColor: amber[100],
  color: "rgba(0, 0, 0, 0.8)",
  "&:hover": {
    boxShadow: "none",
    backgroundColor: amber[100],
    color: "black",
  },
}));

const OutlinedButton = styled(Button)<ButtonProps>(() => ({
  color: grey[900],
  fontWeight: 500,
  border: `1px solid ${grey[100]}`,
  textTransform: "inherit",
  borderRadius: "10px",
  padding: "0.5rem 2rem",
  "&:hover": {
    backgroundColor: grey[200],
  },
}));

const NavigationButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  textTransform: "inherit",
  padding: "0.1rem 1rem",
  "&:hover": {
    backgroundColor: grey[200],
  },
}));

export { PrimaryButton, OutlinedButton, NavigationButton };
