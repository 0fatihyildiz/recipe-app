import { Link } from "react-router-dom";
import { Button } from "@mui/material-next";
import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import Logo from "./logo";
import "./header.scss";

export default function Header() {
  const menu = [
    { name: "My Recipe", path: "/myRecipe" },
    { name: "My Ingridients", path: "/myIngridients" },
  ];

  return (
    <div className="header">
      <div className="navigate">
        <Link to="/" className="logo-link">
          <Logo />
        </Link>
        <div className="links">
          {menu.map(({ name, path }) => (
            <Button
              key={name}
              size="small"
              color="primary"
              variant="text"
              className="link"
            >
              {name}
            </Button>
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
        <Button color="tertiary" disabled={false} variant="outlined">
          Sign In
        </Button>
      </div>
    </div>
  );
}
