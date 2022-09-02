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

export const Tile = ({
  index,
  balance,
  pendingBalanceUpdate,
  holderAddress,
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
          <Col style={{ ...commonTileStyle, color: "rgb(52, 152, 219)" }}>
            {holderAddress && holderAddress.slice(0, 15)}...
          </Col>
          <Col style={{ ...commonTileStyle }}>{balance}</Col>
          <Col style={{ ...commonTileStyle, color: "rgb(52, 152, 219)" }}>
            {/* {from && from.slice(0, 15)}... */}
          </Col>
          <Col style={{ ...commonTileStyle, color: "rgb(52, 152, 219)" }}>
            {/* {to && to.slice(0, 15)}... */}
          </Col>
          <Col style={{ ...commonTileStyle }}>{pendingBalanceUpdate}</Col>
        </Row>
      </Container>
      <div className="seperator" />
    </div>
  );
};

export const Heading = ({ currentPage, setCurrentPage, data, last }) => (
  <div
    style={{
      paddingLeft: "1%",
      paddingRight: "1%",
    }}
  >
    <div className="pages">
      <p>Top {data.length} holders</p>
      <div className="pagesNavigation">
        <button
          className="pageNavigationButton"
          onClick={() => setCurrentPage(1)}
        >
          First
        </button>
        <button
          className="pageNavigationButton"
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >{`<`}</button>
        <button className="pageNavigationButton">
          Page {currentPage} of {parseInt(data.length / 10)}
        </button>
        <button
          className="pageNavigationButton"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          {">"}
        </button>
        <button
          className="pageNavigationButton"
          onClick={() => setCurrentPage(last)}
        >
          Last
        </button>
      </div>
    </div>
    <div className="seperator"></div>
    <Row className="dataListHeading">
      <Col md={1}>Rank</Col>
      <Col>Address</Col>
      <Col>Quantity</Col>
      <Col>From</Col>
      <Col>To</Col>
      <Col>Quantity</Col>
    </Row>
    <div className="seperator" />
  </div>
);
