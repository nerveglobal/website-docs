import React from "react";
import OriginalNavBarItem from "@theme-original/NavbarItem";
import { useLocation } from "@docusaurus/router";

export default function NavbarItem(props) {
  const { pathname } = useLocation();

  let versionDoc = "1.0.0";
  let activeNav = "V1";
  
  return (
    <>
      <OriginalNavBarItem
        {...props}
        className={props.className + " " + activeNav}
      />
    </>
  );
}
