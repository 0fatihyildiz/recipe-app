import React from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  target: string;
}

const Portal = ({ children, target }: Props) => {
  const portalRoot = document.querySelector(target) as HTMLElement;

  return createPortal(children, portalRoot);
};

export default Portal;
