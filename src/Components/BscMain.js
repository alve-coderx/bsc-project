import React, { useContext, useState } from "react";
import { Col, Container, Row, Toast } from "react-bootstrap";
import { config } from "@fortawesome/fontawesome-svg-core";
import HoverToolTip from "./HoverToolTip";
import { ThemeContext } from "../Context/theme";

console.log(config.autoA11y); // true

export default function BscMain() {
  const [{theme}] = useContext(ThemeContext);
  const [showCirculatingCap, setShowCirculatingCap] = useState(false);

  const handleToggleCirculatingCap = () =>
    setShowCirculatingCap(!showCirculatingCap);

  return (
    <Container fluid className="rounded shadow mb-5" style={{backgroundColor : theme.backgroundColor}}>
      <Row className="">
        <Col className="col-lg-4 col-md-12 col-sm-12 col-12 p-3">
          <div className="d-flex">
            <img style={{width:"20px"}} src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3"/>
            <p className="ms-3">
              BNB PRICE <br/>
              $276.33 @ 0.013869 BTC (-3.30%)</p>
          </div>
            <hr/>
          <div className="d-flex">
            <img style={{width:"20px"}} src="https://bscscan.com/images/svg/icons/icon-8.svg"/>
            <p className="ms-3">
              BNB PRICE <br/>
              $276.33 @ 0.013869 BTC (-3.30%)</p>
          </div>
        </Col>
        <Col className="col-lg-4 col-md-12 col-sm-12 col-12 p-3">
          <div className="d-flex">
            <img style={{width:"20px"}} src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3"/>
            <p className="ms-3">
              BNB PRICE <br/>
              $276.33 @ 0.013869 BTC (-3.30%)</p>
          </div>
            <hr/>
          <div className="d-flex">
            <img style={{width:"20px"}} src="https://bscscan.com/images/svg/icons/icon-8.svg"/>
            <p className="ms-3">
              BNB PRICE <br/>
              $276.33 @ 0.013869 BTC (-3.30%)</p>
          </div>
        </Col>
          <Col className="col-lg-4 col-md-12 col-sm-12 col-12 p-3">
            <div className="d-flex">
              <img style={{width:"20px"}} src="https://bscscan.com/images/svg/brands/bnb-1.svg?v=1.3"/>
              <p className="ms-3">
                BNB PRICE <br/>
                $276.33 @ 0.013869 BTC (-3.30%)</p>
            </div>
              <hr/>
            <div className="d-flex">
              <img style={{width:"20px"}} src="https://bscscan.com/images/svg/icons/icon-8.svg"/>
              <p className="ms-3">
                BNB PRICE <br/>
                $276.33 @ 0.013869 BTC (-3.30%)</p>
            </div>
          </Col>
      </Row>
    </Container>
  );
}
