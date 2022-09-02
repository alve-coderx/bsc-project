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
  txHash,
  from,
  to,
  timeStamp,
  dateTime,
  quantity,
  method,
}) => {
  return (
    <div
      style={{
        bacgroundColor: "#fff",
        paddingLeft: "10px",
        paddingRight: "10px",
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
            style={{
              ...commonTileStyle,
              color: "rgb(52, 152, 219)",
            }}
          >
            {txHash && txHash.slice(0, 15)}...
          </Col>
          <HoverToolTip placement="top" text={`${method}`}>
            <Col style={{ ...commonTileStyle }}>
              <div
                style={{
                  backgroundColor: "rgb(210,237,247)",
                  maxWidth: "150px",
                  padding: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  borderRadius: "10px",
                }}
              >
                {method}
              </div>
            </Col>
          </HoverToolTip>
          <HoverToolTip
            placement="top"
            text={`${dateTime && moment(`${dateTime}`).fromNow()}`}
          >
            <Col style={{ ...commonTileStyle }}>
              {dateTime && moment(`${dateTime}`).fromNow()}
            </Col>
          </HoverToolTip>
          <HoverToolTip
            placement="top"
            text={`${from && from.slice(0, 15)}...`}
          >
            <Col style={{ ...commonTileStyle, color: "rgb(52, 152, 219)" }}>
              {from && from.slice(0, 15)}...
            </Col>
          </HoverToolTip>
          <HoverToolTip placement="top" text={`${to && to.slice(0, 15)}...`}>
            <Col style={{ ...commonTileStyle, color: "rgb(52, 152, 219)" }}>
              {to && to.slice(0, 15)}...
            </Col>
          </HoverToolTip>
          <Col style={{ ...commonTileStyle }}>
            {quantity && parseFloat(quantity).toFixed(10)}
          </Col>
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
      <p>A total of {data.length} transactions found</p>
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
      <Col>Txn Hash</Col>
      <Col>
        Method{"  "}
        <HoverToolTip
          placement="top"
          text="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
        >
          <i class="fa fa-info-circle"></i>
        </HoverToolTip>
      </Col>
      <Col>Age</Col>
      <Col>From</Col>
      <Col>To</Col>
      <Col>Quantity</Col>
    </Row>
    <div className="seperator" />
  </div>
);
