import { Icon } from "@iconify/react";
import { PrimaryButton } from "../../common/material/styles/button";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React, { useRef, useState } from "react";

interface Props {
  title: string;
  itemCount?: number;
}

const options = ["New Recipes", "Popular Recipes", "Latest Recipes"];

function FilterButton() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);

  // const handleClick = () => {
  //   console.info(`You clicked ${options[selectedIndex]}`);
  // };

  function handleMenuItemClick(_event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number) {
    setSelectedIndex(index);
    setOpen(false);
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <PrimaryButton
        aria-controls={open ? "split-button-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-label="filter"
        aria-haspopup="menu"
        onClick={handleToggle}
        ref={anchorRef}
      >
        Filter <Icon className="ml-6" icon="iconamoon:apps-thin" />
      </PrimaryButton>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-end"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center bottom" : "center top",
            }}
          >
            <Paper
              sx={{
                width: "100%",
                marginTop: ".2rem",
                boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="filter-button" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}>
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default function Title({ title, itemCount }: Props) {
  return (
    <div className="my-12 lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1 space-y-2">
        <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
          {title}
        </h2>
        {itemCount && (
          <div className="mt-2 flex flex-col text-zinc-500 sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            {itemCount} recipes found
          </div>
        )}
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <FilterButton />
      </div>
    </div>
  );
}
