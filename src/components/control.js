import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  CardGroup,
  Carousel,
  ListGroup
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "./template/head";
import Footer from "./template/foot";

function Control(props) {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
        height: "100vh",
        backgroundSize: "cover",
        padding: "0",
      }}
    >
      <Head />

      <Container
        style={{
          height: "100%",
        }}
      >
        <Row
          xs={1}
          md={1}
          className="g-4"
          style={{
            backgroundColor: "rgba(55,55,55,0.1)",
            color: "rgb(230,230,230)",
          }}
        >
          <Col className="my-5">
            <h1 className="display-4 mx-1 ">
              Protecting Students,
              <br /> Nurturing Peace of Mind!
            </h1>
            <p className="lead mx-1">
              Protecting students is our passion.
              <br /> With tailored insurance solutions, we offer peace of mind
              throughout your educational journey.
              <br /> Join us and experience the security of having a dedicated
              ally by your side.
            </p>
            <Button variant="dark" className="mx-1">
              Submit an application
            </Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <h3 className="display-3">
          HAVE THE{" "}
          <span
            style={{
              paddingRight: "3vh",
              backgroundColor: "rgba(20,100,20,0.3)",
              borderRadius: "100px",
            }}
          >
            LATEST
          </span>{" "}
          <br />
          AND{" "}
          <span
            style={{
              paddingRight: "5vh",
              backgroundColor: "rgba(210,90,20,0.3)",
              borderRadius: "100px",
            }}
          >
            GREATEST?
          </span>{" "}
          <br />
          COVER IT WITH US.
        </h3>
        <CardGroup>
        <Card className="mx-2 my-3" style={{border: "none"}}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <Card.Body>
            <Card.Title>ULTRA PROTECTION</Card.Title>
            <Card.Text>
              <p className="lead">
                We are committed to safeguarding students' well-being and
                securing their future with comprehensive insurance coverage
              </p>
            </Card.Text>
            <Button variant="dark">Learn more</Button>
          </Card.Body>
        </Card>

        <Card className="mx-2 my-3" style={{border: "none"}}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1549045105-bb8e7539a736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          />
          <Card.Body>
            <Card.Title>RELIABLE</Card.Title>
            <Card.Text>
              <p className="lead">
                Rest assured, we are here to provide steadfast insurance
                protection for students, ensuring their peace of mind.
              </p>
            </Card.Text>
            <Button variant="dark">Register device</Button>
          </Card.Body>
        </Card>

        <Card className="mx-2 my-3" style={{border: "none"}}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1500067803284-4304564c8655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <Card.Body>
            <Card.Title>SAFE PLUS</Card.Title>
            <Card.Text>
              <p className="lead">
                Experience a worry-free journey as we prioritize your safety
                with robust insurance solutions designed exclusively for
                students.
              </p>
            </Card.Text>
            <Button variant="dark">Insure now</Button>
          </Card.Body>
        </Card>
        </CardGroup>
      </Container>

      <Container className="my-5">
        <h3 className="display-3">
          Get{" "}
          <span
            style={{
              paddingRight: "3vh",
              backgroundColor: "rgba(120,10,90,0.2)",
              borderRadius: "100px",
            }}
          >
            Insurance
          </span>{" "}
          and{" "}
          <span
            style={{
              paddingRight: "3vh",
              backgroundColor: "rgba(10,160,140,0.2)",
              borderRadius: "100px",
            }}
          >
            free add-ons
          </span>{" "}
          on us
        </h3>
        <Carousel fade controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1618393649915-df0a256fdd30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3
                className="display-3"
                style={{
                  padding: "2vh",
                  borderRadius: "15px",
                  backgroundColor: "rgba(40,40,40,0.5)",
                }}
              >
                Get a free premuim phone case on us.
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1633194883650-df448a10d554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=676&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3
                className="display-3"
                style={{
                  padding: "2vh",
                  borderRadius: "15px",
                  backgroundColor: "rgba(40,40,40,0.5)",
                }}
              >
                A years worth of mobile security and anit-malware.
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1593298204880-46a17ccad7b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3
                className="display-3"
                style={{
                  padding: "2vh",
                  borderRadius: "15px",
                  backgroundColor: "rgba(40,40,40,0.5)",
                }}
              >
                get a free water bottle from us.
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container>
        <h1>Boarding House Bundles</h1>
        <p>
          Get protection for you and your room-mates, register as a group
          (house) and get 15% off your first 3 months.
          <br />{" "}
          <span className="text-muted" style={{ fontSize: "10px" }}>
            T's & C's Apply
          </span>
        </p>
        <Button variant="outline-dark" className="my-3">
          Get a quote
        </Button>
      </Container>

      <CardGroup className="text-center">
        <Card className="mx-2">
          <Card.Body>
            <Card.Title>Monthly</Card.Title>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Register up to 3 devices</ListGroup.Item>
                <ListGroup.Item>Nhima Cover</ListGroup.Item>
                <ListGroup.Item>24/7 customer support</ListGroup.Item>
                <ListGroup.Item>Binary Account</ListGroup.Item>
                <ListGroup.Item>{" "}</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Basic</small>
          </Card.Footer>
        </Card>
        <Card className="mx-2">
          <Card.Body>
            <Card.Title>Quarterly</Card.Title>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Register up to 5 devices Plus free Phone Case</ListGroup.Item>
                <ListGroup.Item>Nhima Cover</ListGroup.Item>
                <ListGroup.Item>24/7 customer support</ListGroup.Item>
                <ListGroup.Item>Binary Account</ListGroup.Item>
                <ListGroup.Item>Faster processing and priority handling</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Pro</small>
          </Card.Footer>
        </Card>
        <Card className="mx-2">
          <Card.Body>
            <Card.Title>Yearly</Card.Title>
            <Card.Text>
            <ListGroup variant="flush">
                <ListGroup.Item>Register up to 7 devices Plus free Apple Watch</ListGroup.Item>
                <ListGroup.Item>Nhima Cover</ListGroup.Item>
                <ListGroup.Item>24/7 customer support</ListGroup.Item>
                <ListGroup.Item>Binary Account</ListGroup.Item>
                <ListGroup.Item>Faster processing and priority handling</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Ultra</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Footer />
    </Container>
  );
}

export default Control;
