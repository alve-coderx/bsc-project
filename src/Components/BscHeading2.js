import React, { useContext, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../Context/theme";

export default function BscHeading2({ selected, setSelected }) {
  const changeSelected = (val) => setSelected(val);
  const containerStyle = {
    padding: "10px",
    fontWeight: "500",
    marginTop: "20px",
  };

  const textStyle = (val) => ({
    color: selected === val ? "rgb(52, 152, 219)" : "rgb(110, 115, 120)",
    textDecoration: "none",
    fontSize: "1.1em",
    fontWeight: "700",
  });
  const [{theme}] = useContext(ThemeContext)

  return (
    <Container fluid id="navbar_second" style={{backgroundColor:theme.backgroundColor}}>
      <div style={containerStyle}>
        <a
          style={textStyle("transfers")}
          onClick={() => changeSelected("transfers")}
          className="modifiedNavLink"
          href="#transfers"
        >
          Transfers
        </a>
      </div>
      <div style={containerStyle}>
        <a
          style={textStyle("holders")}
          onClick={() => changeSelected("holders")}
          className="modifiedNavLink"
          href="#holders"
        >
          Holders
        </a>
      </div>
      <div style={containerStyle}>
        <a
          style={textStyle("info")}
          onClick={() => changeSelected("info")}
          className="modifiedNavLink"
          href="#info"
        >
          Info
        </a>
      </div>
      <div style={containerStyle}>
        <a
          style={textStyle("exchange")}
          onClick={() => changeSelected("exchange")}
          className="modifiedNavLink"
          href="#exchange"
        >
          Exchange
        </a>
      </div>
      <div style={containerStyle}>
        <a
          style={textStyle("dexTrades")}
          onClick={() => changeSelected("dexTrades")}
          className="modifiedNavLink"
          href="#dex_trades"
        >
          DEX Trades
        </a>
      </div>
      <div style={containerStyle}>
        <a
          style={textStyle("read")}
          onClick={() => changeSelected("read")}
          className="modifiedNavLink"
          href="#read"
        >
          Read Contract
        </a>
      </div>
      <div style={containerStyle}>
        <a
          style={textStyle("write")}
          onClick={() => changeSelected("write")}
          className="modifiedNavLink"
          href="#write"
        >
          Write Contract
        </a>
      </div>
      <div style={containerStyle}>
        <a
          style={textStyle("analytics")}
          onClick={() => changeSelected("analytics")}
          className="modifiedNavLink"
          href="#analytics"
        >
          Analytics
        </a>
      </div>
      <div style={containerStyle}>
        <a
          style={textStyle("comments")}
          onClick={() => changeSelected("comments")}
          className="modifiedNavLink"
          href="#comments"
        >
          Comments
        </a>
      </div>
      <button class="btn rounded-1" type="submit">
        <i class="fa fa-search color:white"></i>
      </button>
    </Container>
  );
}
