import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HoverToolTip from "../HoverToolTip";

const commonTileStyle = {
  bacgroundColor: "#fff",
  fontSize: "15px",
  color: "#000",
  fontWeight: "500",
};

export const Tile = ({
  txHash,
  age,
  maker1,
  maker2,
  taker1,
  taker2,
  price,
  tokenUrl,
  maker2Url,
  taker2Url,
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
          <Col>
            <a
              style={{
                ...commonTileStyle,
                color: "rgb(52, 152, 219)",
                textDecoration: "none",
              }}
              href={tokenUrl}
            >
              {txHash && txHash.slice(0, 15)}...
            </a>
          </Col>
          <Col style={{ ...commonTileStyle }}>{age}</Col>
          <Col>
            <p style={{ ...commonTileStyle }}>
              {maker1 + "   "}
              <a
                style={{
                  ...commonTileStyle,
                  color: "rgb(52, 152, 219)",
                  textDecoration: "none",
                }}
                href={maker2Url}
              >
                {maker2}
              </a>
            </p>
          </Col>
          <Col>
            <p style={{ ...commonTileStyle }}>
              {taker1 + "   "}
              <a
                style={{
                  ...commonTileStyle,
                  color: "rgb(52, 152, 219)",
                  textDecoration: "none",
                }}
                href={taker2Url}
              >
                {taker2}
              </a>
            </p>
          </Col>
          <Col style={{ ...commonTileStyle }}>{price}</Col>
          <Col style={{ ...commonTileStyle }} md={1}>
            <img
              src="https://bscscan.com/images/dex/pancake_32.png"
              style={{ width: "30px", height: "30px" }}
            />
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
      <Col>Time</Col>
      <Col>Maker</Col>
      <Col>Taker</Col>
      <Col>Price</Col>
      <Col md={1}>DEX</Col>
    </Row>
    <div className="seperator" />
  </div>
);
