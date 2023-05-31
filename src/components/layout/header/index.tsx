import { Link, NavLink } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Button, IconButton, ButtonProps } from "@mui/material";
import { Button as ButtonMUI } from "@mui/material-next";
import { Icon } from "@iconify/react";
import Logo from "./logo";
import AuthModal from "./auth/authModal";
import "./header.scss";
import { useState } from "react";
import { grey } from '@mui/material/colors';

export default function Header() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "My Recipe", path: "/myRecipe" },
    { name: "My Ingridients", path: "/myIngridients" },
  ];

  const AuthButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    border:  `1px solid ${grey[100]}`,
    textTransform: "inherit",
    borderRadius: '10px',
    padding: '0.5rem 1rem',
    '&:hover': {
      backgroundColor: grey[200],
    },
  }));

  return (
    <>
      <div className="header">
        <div className="navigate">
          <Link to="/" className="logo-link">
            <Logo />
          </Link>
          <div className="links">
            {menu.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                <ButtonMUI
                  size="small"
                  color="primary"
                  variant="text"
                  className="link"
                >
                  {name}
                </ButtonMUI>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="actions">
          <IconButton className="action">
            <Icon icon="iconamoon:search-light" fontSize={25} />
          </IconButton>
          <IconButton className="action">
            <Icon icon="iconamoon:shopping-bag-light" fontSize={25} />
          </IconButton>
          <AuthButton onClick={() => setOpen(true)} variant="text">
            Sign In
          </AuthButton>
        </div>
      </div>
      <AuthModal open={open} setOpen={setOpen} />
    </>
  );
}
