import React from "react";
import { Card, Form } from "react-bootstrap";

export default function () {
  return (
    <div>
      <p className="blah3">Read Contract Information</p>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            1. name
          </a>
        </Card.Header>
        <Card.Body>
          Oikos Network Token <cite title="Source Title">string</cite>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          {" "}
          <a className="readCardHead " href="#">
            2. totalSupply
          </a>
        </Card.Header>
        <Card.Body>
          <a className="readCardLink" href="#">
            190075445544103879098076865{" "}
          </a>{" "}
          <cite title="Source Title">uint256</cite>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            3. decimals
          </a>
        </Card.Header>
        <Card.Body>
          18 <cite title="Source Title">uint 8</cite>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            4. nominatedOwner
          </a>
        </Card.Header>
        <Card.Body>
          <a className="readCardLink" href="#">
            0x0000000000000000000000000000000000000000
          </a>{" "}
          <cite title="Source Title">address</cite>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            5. balanceOf
          </a>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>account (address)</Form.Label>
            <Form.Control type="password" placeholder="account (address)" />
          </Form.Group>{" "}
          <button className="readButton">Query</button>
          <div className="blah">
            <cite title="Source Title">- uint 256</cite>
          </div>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            6. owner
          </a>
        </Card.Header>
        <Card.Body>
          <a className="readCardLink" href="#">
            0xa4fa6487f91641e846f1748770f3574375a8c41d
          </a>{" "}
          <cite title="Source Title">address</cite>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            7. useDELEGATECALL
          </a>
        </Card.Header>
        <Card.Body>
          False <cite title="Source Title">bool</cite>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            8. symbol
          </a>
        </Card.Header>
        <Card.Body>
          OKS <cite title="Source Title">string</cite>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            9. target
          </a>
        </Card.Header>
        <Card.Body>
          <a className="readCardLink" href="#">
            0x2cf82ec748753ad5d07e70b4e73a0a7935995d91
          </a>{" "}
          <cite title="Source Title">address</cite>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            10. allowance
          </a>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>owner (address)</Form.Label>
            <Form.Control type="password" placeholder="owner (address)" />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>spender (address)</Form.Label>
            <Form.Control type="password" placeholder="spender (address)" />
          </Form.Group>{" "}
          <button className="readButton">Query</button>
          <div className="blah">
            <cite title="Source Title">- uinst 256</cite>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
