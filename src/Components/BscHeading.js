import React, { useContext } from "react";
import token from "../Assests/token.png";
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import HoverToolTip from "./HoverToolTip";
import BsxSearch from './BsxSearchBar'
import { ThemeContext } from "../Context/theme";

export default function BscHeading() {
  const [{isDark}] = useContext(ThemeContext);
  return (
    <div className="container2" style={{height:'25vh'}}>
      <Row className="align-items-center">
          <Col className="col-lg-7">
            <h2 className="text-warning">
              BNB Smart Chain Explorer
            </h2>
            <BsxSearch/>
            <p className='fw-bold link-secondary'>Sponsored: <img style={{width:"20px"}} src="https://bscscan.com/images/gen/binance_20.png"/>  Binance - Join the world's largest crypto exchange. <span className="text-primary">Sign Up Now</span>.</p>
          </Col>
      </Row>
    </div>
  );
}
