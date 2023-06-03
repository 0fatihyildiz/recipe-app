import { Link, NavLink } from "react-router-dom";
import Logo from "./logo";
import AuthModal from "./auth/authModal";
import "./header.scss";
import { useState } from "react";
import { NavigationButton, OutlinedButton } from "../../common/material/styles/button";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "My Recipe", path: "/myRecipe" },
    { name: "My Ingridients", path: "/myIngridients" },
  ];



  return (
    <>
      <div className="header">
        <div className="navigate">
          <Link to="/" className="logo-link">
            <Logo />
          </Link>
          <div className="links">
            {menu.map(({ name, path }) => (
              <NavLink key={name} to={path}>
                {({ isActive, isPending }) => (
                  <NavigationButton
                    className={`${isActive ? "active" : ""} link`}
                    disabled={isPending}
                  >
                    {name}
                  </NavigationButton>
                )}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="actions">
          {/* <IconButton className="action">
            <Icon icon="iconamoon:search-light" fontSize={25} />
          </IconButton> */}
          <OutlinedButton onClick={() => setOpen(true)} variant="text">
            Sign In
          </OutlinedButton>
        </div>
      </div>
      <AuthModal open={open} setOpen={setOpen} />
    </>
  );
}
