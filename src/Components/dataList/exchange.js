import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import HoverToolTip from "../HoverToolTip";

const commonTileStyle = {
  bacgroundColor: "#fff",
  fontSize: "15px",
  color: "#000",
  fontWeight: "500",
};

export const Heading = ({ currentPage, setCurrentPage, data, last }) => (
  <div
    style={{
      paddingLeft: "1%",
      paddingRight: "1%",
    }}
  >
    <div className="pages">
      <p>
        Exchange Data Source:{" "}
        <p style={{ color: "rgb(52, 152, 219)" }}>Coingecko</p>
      </p>
    </div>
    <div className="seperator"></div>
    <Row className="dataListHeading">
      <Col md={1}>#</Col>
      <Col>Exchange</Col>
      <Col>Pair</Col>
      <Col>Price</Col>
      <Col>24H Volume</Col>
      <Col>% Volume</Col>
    </Row>
    <div className="seperator" />
  </div>
);

export const Tile = ({
  index,
  exchange,
  pair,
  priceDollars,
  priceBtc,
  vol1,
  vol2,
  volume,
  url,
}) => {
  return (
    <div
      style={{
        bacgroundColor: "#fff",
      }}
    >
      <Container
        fluid
        style={{
          paddingTop: "0.5%",
          paddingBottom: "0.5%",
          backgroundColor: "#fff",
        }}
      >
        <Row className="dataListHeading">
          <Col
            md={1}
            style={{
              ...commonTileStyle,
            }}
          >
            {index}
          </Col>
          <Col style={{ ...commonTileStyle, color: "#000" }}>{exchange}</Col>
          <Col style={{ ...commonTileStyle }}>
            <a
              style={{
                ...commonTileStyle,
                color: "rgb(52, 152, 219)",
                textDecoration: "none",
              }}
              href={url}
            >
              {" "}
              {pair && pair.slice(0, 15)}...
            </a>
          </Col>
          <Col style={{ ...commonTileStyle }}>
            <div>
              <p style={{ fontSize: "16px" }}>{priceDollars}</p>
              <p style={{ fontSize: "14px" }}>{priceBtc}</p>
            </div>
          </Col>
          <Col style={{ ...commonTileStyle }}>
            <div>
              <p style={{ fontSize: "16px" }}>{vol1}</p>
              <p style={{ fontSize: "14px" }}>{vol2}</p>
            </div>
          </Col>
          <Col style={{ ...commonTileStyle }}>{volume}</Col>
        </Row>
      </Container>
      <div className="seperator" />
    </div>
  );
};
