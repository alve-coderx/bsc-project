import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import {
  Tile as TransfersTile,
  Heading as TransfersHeading,
} from "./dataList/transfers.js";
import {
  Tile as HoldersTile,
  Heading as HoldersHeading,
} from "./dataList/holders.js";
import { Container as InfoData } from "./dataList/info.js";
import {
  Tile as ExchangeTile,
  Heading as ExchangeHeading,
} from "./dataList/exchange.js";
import ReadData from "./dataList/read.js";
import WriteData from "./dataList/write.js";
import {
  Tile as DexTradesTile,
  Heading as DexTradesHeading,
} from "./dataList/dexTrades.js";
import CommentsData from "./dataList/comments.js";

export default function BscDataList({ selected }) {
  const [data, setData] = useState(
    selected !== "info" &&
      selected !== "read" &&
      selected !== "write" &&
      selected !== "comments" &&
      selected !== "analytics"
      ? require(`../Assests/${selected}.json`)
      : []
  );
  const last = data.length / 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState(data.slice(0, 10));
  useEffect(() => {
    const _data =
      selected !== "info" &&
      selected !== "read" &&
      selected !== "write" &&
      selected !== "comments" &&
      selected !== "analytics"
        ? require(`../Assests/${selected}.json`)
        : [];
    setData(_data);
    setCurrentPage(1);
    setPaginatedData(_data && _data.slice(0, 10));
  }, [selected]);

  useEffect(() => {
    setPaginatedData(
      data && data.slice(10 * (currentPage - 1), 10 * currentPage)
    );
  }, [currentPage]);

  const dataCheck = () => {
    switch (selected) {
      case "transfers":
        return renderTransfers();
      case "holders":
        return renderHolders();
      case "info":
        return renderInfo();
      case "exchange":
        return renderExchange();
      case "dexTrades":
        return renderDexTrades();
      case "read":
        return renderRead();
      case "write":
        return renderWrite();
      case "comments":
        return renderComments();
      case "analytics":
        return renderAnalytics();
      default:
        return <></>;
    }
  };

  const renderAnalytics = () => <></>;

  const renderComments = () => <CommentsData />;

  const renderDexTrades = () => (
    <>
      <DexTradesHeading
        data={data}
        last={last}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="seperator"></div>
      {paginatedData.map((item, index) => (
        <DexTradesTile {...item} key={index} />
      ))}
      <Footer data={data} last={last} />
    </>
  );

  const renderRead = () => <ReadData />;
  const renderWrite = () => <WriteData />;

  const renderExchange = () => (
    <>
      <ExchangeHeading
        data={data && data.length ? data : []}
        last={last}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="seperator"></div>
      {paginatedData &&
        paginatedData.map((item, index) => (
          <ExchangeTile {...item} index={index} key={index} />
        ))}
    </>
  );

  const renderInfo = () => <InfoData />;

  const renderHolders = () => (
    <>
      <HoldersHeading
        data={data && data.length ? data : []}
        last={last}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="seperator"></div>
      {paginatedData &&
        paginatedData.map((item, index) => (
          <HoldersTile {...item} index={index} key={index} />
        ))}
      <Footer data={data} last={last} />
    </>
  );

  const renderTransfers = () => (
    <>
      <TransfersHeading
        data={data}
        last={last}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="seperator"></div>
      {paginatedData.map((item, index) => (
        <TransfersTile {...item} key={index} />
      ))}
      <Footer data={data} last={last} />
    </>
  );

  return (
    <Container fluid style={{ alignItems: "center" }}>
      {dataCheck()}
    </Container>
  );
}

const Footer = ({ setCurrentPage, currentPage, data, last }) => (
  <div className="pagesNavigation2">
    <button className="pageNavigationButton" onClick={() => setCurrentPage(1)}>
      First
    </button>
    <button
      className="pageNavigationButton"
      onClick={() => setCurrentPage((prev) => prev - 1)}
    >{`<`}</button>
    <button className="pageNavigationButton">
      Page {currentPage} of {data.length / 10}
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
);
