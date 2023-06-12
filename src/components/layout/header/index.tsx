import { Link, NavLink } from "react-router-dom";
import Logo from "./logo";
import AuthModal from "./auth/authModal";
import "./header.scss";
import { useState } from "react";
import {
  NavigationButton,
  OutlinedButton,
} from "../../common/material/styles/button";
import { Drawer, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuState, setMenuState] = useState(false);

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
          <OutlinedButton onClick={() => setOpen(true)} variant="text">
            Sign In
          </OutlinedButton>
          <IconButton onClick={() => setMenuState(true)} className="action">
            <Icon icon="iconamoon:menu-burger-horizontal-thin" fontSize={25} />
          </IconButton>
        </div>
      </div>
      <AuthModal open={open} setOpen={setOpen} />
      <Drawer
        anchor="right"
        open={menuState}
        onClose={() => setMenuState(false)}
        PaperProps={{
          sx: {
            width: "300px",
            padding: "0 20px",
            alignItems: "start",
          },
        }}
      >
        <div className="w-full flex items-center justify-between">
          <Logo className="my-5" size={20} />
          <IconButton onClick={() => setMenuState(false)}>
            <Icon icon="iconamoon:close" fontSize={25} />
          </IconButton>
        </div>
        {menu.map(({ name, path }) => (
          <NavLink key={name} to={path} className="w-full">
            {({ isActive, isPending }) => (
              <NavigationButton
                className={`${
                  isActive ? "!bg-[rgba(var(--primary),0.3)]" : "!bg-zinc-50"
                } !mt-1.5 !rounded-md !w-full !py-1`}
                disabled={isPending}
              >
                {name}
              </NavigationButton>
            )}
          </NavLink>
        ))}
      </Drawer>
    </>
  );
}
