import React, { useContext } from "react";
import BscHeading from "./BscHeading";
import BscMain from "./BscMain";
import BscMain2 from "./BscMain2";
import {ThemeContext} from "../Context/theme"

export default function BscBody() {
  const [{theme}] = useContext(ThemeContext)
  return (
    <div id="bodybsc" style={{color: theme.color,backgroundColor : theme.mainbg }}>
      <BscHeading />
      <div className="seperator seperator-big"></div>
      <BscMain />
      <BscMain2 />
    </div>
  );
}
