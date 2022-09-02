import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bnb from "../Assests/bnb.png";
import { ThemeContext } from "../Context/theme";
import { FiSun ,FiMoon } from 'react-icons/fi';
export default function Footer() {
  const [{theme,isDark},toggleTheme] = useContext(ThemeContext)

  return (
    <footer>
      <Container fluid className="footer_container">
        <Row>
          <Col className="footer_col " lg={4}>
            <div className="main_container_text2">
              <img
                src={bnb}
                width="25"
                height="25"
                hspace="10"
                style={{ marginBottom: "10px", marginLeft: "25px" }}
              ></img>
              <p className="footer_header">Powered by Binance Chain</p>
              <p onClick={toggleTheme} style={{cursor:"pointer"}} className="text-light px-2 py-1 border rounded-circle ms-3">
                {isDark ? <FiSun/> : <FiMoon/>}
              </p>              
            </div>
            <div className="footer_text">
              <p>
                BscScan is a Block Explorer and Analytics Platform for <br />{" "}
                Binance Smart Chain
              </p>
            </div>
          </Col>
          <Col className="footer_col footer_col2">
            <p className="footer_header2">Company</p>
            <a className="footer_body" href="#">
              Advertise
            </a>
            <a className="footer_body" href="#">
              Delegate to BscScan
            </a>
            <a className="footer_body" href="#">
              Contact Us
            </a>
            <a className="footer_body" href="#">
              Brand Assests
            </a>
            <a className="footer_body" href="#">
              Terms of Service
            </a>
          </Col>
          <Col className="footer_col footer_col2">
            <p className="footer_header2">Community</p>
            <a className="footer_body" href="#">
              Developer APIs
            </a>
            <a className="footer_body" href="#">
              Knowledge Base
            </a>
            <a className="footer_body" href="#">
              Network Status
            </a>
            <a className="footer_body" href="#">
              Learn BSC
            </a>
          </Col>
          <Col className="footer_col footer_col2">
            <p className="footer_header2">Products</p>
            <a className="footer_body" href="#">
              Etherscan
            </a>
            <a className="footer_body" href="#">
              Blockscan
            </a>
            <a className="footer_body" href="#">
              DiemScan
            </a>
            <a className="footer_body" href="#">
              Polygonscan
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
