import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function () {
  return (
    <>
      <Heading />
      <Body />
    </>
  );
}

const Body = () => {
  const textStyle = {
    color: "rgb(110, 115, 120)",
    fontSize: "1em",
    fontWeight: "700",
    textDecoration: "none",
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#fff",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <MainHeader />
      <Content />
      <Container
        style={{
          backgroundColor: "#fff",
          color: "rgb(110, 115, 120)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
        fluid
      >
        Be the first to comment.
      </Container>
      <Footer />
    </Container>
  );
};

const Footer = () => (
  <Container fluid>
    <Row>
      <Col>Subscribe</Col>
    </Row>
  </Container>
);

const Content = () => (
  <Container style={{ marginTop: "30px", marginBottom: "30px" }} fluid>
    <Row>
      <Col md={1}>
        <img
          src="https://a.disquscdn.com/1631056800/images/noavatar92.png"
          style={{ height: "50px", width: "50px" }}
        />
      </Col>
      <Col fluid>
        <input
          placeholder="Start the discussion..."
          style={{
            width: "100%",
            height: "50px",
            color: "rgb(110, 115, 120)",
            paddingLeft: "15px",
            borderColor: "rgb(110, 115, 120)",
            fontSize: "1.2em",
          }}
        />
      </Col>
    </Row>
    <Row>
      <Col md={1}></Col>
      <Col md={3} style={{ marginTop: "20px" }}>
        <div
          style={{
            color: "rgb(110, 115, 120)",
            fontSize: "0.8em",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          LOG IN WITH
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              backgroundColor: "#3DA8FB",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              D
            </div>
          </div>
          <div
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              backgroundColor: "#4267B2",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            <i
              class="fa fa-facebook"
              style={{ color: "white", marginLeft: "-2px", fontSize: "24px" }}
            ></i>
          </div>
          <div
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              backgroundColor: "#1DA1F2",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            <i
              class="fa fa-twitter"
              style={{ color: "white", marginLeft: "-2px", fontSize: "24px" }}
            ></i>
          </div>
          <div
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              backgroundColor: "#db4a39",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            <i
              class="fa fa-google"
              style={{ color: "white", marginLeft: "-2px", fontSize: "24px" }}
            ></i>
          </div>
        </div>
      </Col>
      <Col fluid style={{ marginTop: "20px" }}>
        <div
          style={{
            color: "rgb(110, 115, 120)",
            fontSize: "0.8em",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          OR SIGN UP WITH DISQUS
        </div>
        <input
          placeholder="Name"
          style={{
            width: "100%",
            height: "40px",
            color: "rgb(110, 115, 120)",
            paddingLeft: "15px",
            borderColor: "rgb(110, 115, 120)",
            fontSize: "1.1em",
            marginTop: "10px",
          }}
        />
      </Col>
    </Row>
  </Container>
);

const MainHeader = () => {
  const textStyle = {
    color: "rgb(110, 115, 120)",
    fontSize: "0.75em",
    fontWeight: "700",
    textDecoration: "none",
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              ...textStyle,
            }}
            className="modifiedNavLink"
          >
            <i class="fa fa-heart color:red"></i>
            <div style={{ marginLeft: "5px" }}>{"   "} Recommended</div>
          </div>
        </Col>
        <Col md={4}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <a
              href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fdisq.us%2Ft%2F3vmg8mh&text=0x18acf236eb40c0d4824fb8f2582ebbecd325ef6a%20Token"
              target="_blank"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: "24px",
                  backgroundColor: "#1DA1F2",
                  borderRadius: "5px",
                  marginRight: "2px",
                }}
              >
                <i
                  class="fa fa-twitter"
                  style={{ color: "white", marginTop: "2px" }}
                ></i>
                <div
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    marginLeft: "5px",
                  }}
                >
                  Tweet
                </div>
              </div>
            </a>
            <a
              href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Fdisq.us%2Ft%2F3vmg8mh"
              target="_blank"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100px",
                  height: "24px",
                  backgroundColor: "#4267B2",
                  borderRadius: "5px",
                  marginLeft: "2px",
                }}
              >
                <i
                  class="fa fa-facebook"
                  style={{ color: "white", marginTop: "2px" }}
                ></i>
                <div
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    marginLeft: "5px",
                  }}
                >
                  Share
                </div>
              </div>
            </a>
          </div>
        </Col>
        <Col
          fluid
          style={{
            display: "flex",
            justifyContent: "flex-end",
            ...textStyle,
          }}
        >
          <div>
            Sort by Best{"   "}{" "}
            <i class="fa fa-sort-down color:rgb(110, 115, 120)"></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const Heading = () => {
  const containerStyle = {
    padding: "10px",
    fontWeight: "500",
    marginTop: "20px",
  };

  const textStyle = {
    color: "rgb(110, 115, 120)",
    fontSize: "1.1em",
    fontWeight: "700",
    textDecoration: "none",
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#fff",
        borderBottomWidth: 2,
        borderBottomColor: "#E7E9EF",
      }}
    >
      <Row>
        <Col md={2} style={containerStyle}>
          <a
            style={{ ...textStyle, color: "#000" }}
            className="modifiedNavLink"
            href="#comments"
          >
            0 Comments
          </a>
        </Col>
        <Col md={2} style={containerStyle}>
          <a
            style={{ ...textStyle }}
            className="modifiedNavLink"
            href="#bscscan"
          >
            BscScan
          </a>
        </Col>
        <Col md={3} style={containerStyle}>
          <a
            style={{ ...textStyle }}
            className="modifiedNavLink"
            href="https://help.disqus.com/customer/portal/articles/466259-privacy-policy"
            target="_blank"
          >
            <i class="fa fa-lock color:rgb(110, 115, 120)"></i>
            {"  "} Privacy Policy
          </a>
        </Col>
        <Col
          fluid
          style={{
            ...containerStyle,
            display: "flex",
            justifyContent: "flex-end",

            ...textStyle,
          }}
        >
          <div>
            Login{"    "}
            <i
              class="fa fa-sort-down color:rgb(110, 115, 120)"
              style={{ marginTop: "-5px" }}
            ></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
