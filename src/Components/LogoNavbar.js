import React, { useContext } from "react";
import { ThemeContext } from "../Context/theme";
import logo from "./logo.svg";
import logoDark from "./logodark.svg";

export default function LogoNavbar() {
  const [{isDark}] = useContext(ThemeContext);
  return (
    <div id="bscscan_logo" class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src={isDark ? logoDark : logo}
          alt=""
          width="210"
          height="40"
          class="d-inline-block align-text-top"
        />
      </a>
    </div>
  );
}
