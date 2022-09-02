import React from "react";
import { Card, Button, Form } from "react-bootstrap";

export default function () {
  return (
    <div>
      <div className="blah3">
        <div>
          {" "}
          <a className="readCardLink" href="#">
            Connect to web3
          </a>
        </div>
        <div>
          <a className="readCardLink" href="#">
            [Reset]
          </a>
        </div>
      </div>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            1. approve
          </a>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>spender (address)</Form.Label>
            <Form.Control type="password" placeholder="spender (address)" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>value (uint256)</Form.Label>
            <Form.Control type="password" placeholder="value (uint256)" />
          </Form.Group>
          <button className="readButton2">Write</button>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          {" "}
          <a className="readCardHead " href="#">
            2. nominateNewOwner
          </a>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>_owner (address)</Form.Label>
            <Form.Control type="password" placeholder="_owner (address)" />
          </Form.Group>{" "}
          <button className="readButton2">Write</button>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            3. transferForm
          </a>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>from (address)</Form.Label>
            <Form.Control type="password" placeholder="from (address)" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>to (address)</Form.Label>
            <Form.Control type="password" placeholder="to (address)" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>value (uint256)</Form.Label>
            <Form.Control type="password" placeholder="value (uint256)" />
          </Form.Group>
          <button className="readButton2">Write</button>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            4. setTarget
          </a>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>_target (address)</Form.Label>
            <Form.Control type="password" placeholder="_target (address)" />
          </Form.Group>{" "}
          <button className="readButton2">Write</button>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            5. acceptOwnership
          </a>
        </Card.Header>
        <Card.Body>
          <button className="readButton2">Write</button>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            6. _emit
          </a>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>callData (bytes)</Form.Label>
            <Form.Control type="password" placeholder="callData (bytes)" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>numTopics (uint256)</Form.Label>
            <Form.Control type="password" placeholder="numTopics (uint256)" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>topic1 (bytes32)</Form.Label>
            <Form.Control type="password" placeholder="topic1 (bytes32)" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>topic2 (bytes32)</Form.Label>
            <Form.Control type="password" placeholder="topic2 (bytes32)" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>topic3 (bytes32)</Form.Label>
            <Form.Control type="password" placeholder="topic3 (bytes32)" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>topic4 (bytes32)</Form.Label>
            <Form.Control type="password" placeholder="topic4 (bytes32)" />
          </Form.Group>
          <button className="readButton2">Write</button>
        </Card.Body>
      </Card>

      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            7. transfer
          </a>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>to (address)</Form.Label>
            <Form.Control type="password" placeholder="to (address)" />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>value (uint256)</Form.Label>
            <Form.Control type="password" placeholder="value (uint256)" />
          </Form.Group>
          <button className="readButton2">Write</button>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            8. setUseDELEGATECALL
          </a>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>value (bool)</Form.Label>
            <Form.Control type="password" placeholder="value (bool)" />
          </Form.Group>{" "}
          <button className="readButton2">Write</button>
        </Card.Body>
      </Card>
      <div className="blah2">
        <a className="readCardLink" href="#">
          source code
        </a>
        Browse
      </div>
    </div>
  );
}
