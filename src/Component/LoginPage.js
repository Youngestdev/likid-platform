import React from "react";
import {
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
  Container,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles.css";

export default function LoginPage() {
  return (
    <Container className="App" fluid>
      <br />
      <Card>
        <CardHeader align="center"> Login </CardHeader>
        <CardBody>
          <Row form>
            <Col sm="6" md={{ size: 6, offset: 3 }}>
              <Form>
                <Col>
                  <FormGroup>
                    <Label for="emailaddr">Email:</Label>
                    <Input
                      type="Email"
                      name="email"
                      id="mail"
                      placeholder="Email Address"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="password">Password:</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                  </FormGroup>
                </Col>
                <Button color="primary">Submit </Button>
              </Form>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Nav>
        <NavItem>
          <NavLink href="/join">Don't have an account ? Join Likid </NavLink>
        </NavItem>
      </Nav>
    </Container>
  );
}
