import React, { Fragment } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Navbar,
  NavbarBrand
} from "reactstrap";

import axios from "axios";

export default function Registration() {
  // Perhaps use hooks.

  const BASE_URL =
    "https://brokers-api.huntrecht-live.eu-gb.containers.appdomain.cloud/";

  function submit(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let data = new FormData(form);
    var body = {};
    for (var pair of data.entries()) body[pair[0]] = pair[1];
    console.log(body);
    return axios
      .post(BASE_URL, {
        properties: {
          body
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err.message));
  }

  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand> Join Likid </NavbarBrand>
      </Navbar>
      <Container className="App" fluid>
        <br />
        <Form onSubmit={submit}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="text"
              name="firstname"
              id="likidFirstName"
              placeholder="John"
            />
          </FormGroup>
          <FormGroup>
            <Label for="firstName">Last Name</Label>
            <Input
              type="text"
              name="lastname"
              id="likidLastName"
              placeholder="Doe"
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="likidEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="likidEmail"
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="likidPassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="likidPassword"
                  placeholder=""
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="likidAddress">Address</Label>
            <Input
              type="text"
              name="address"
              id="likidAddress"
              placeholder="1234 Main St"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Country</Label>
            <Input type="select" name="country" id="likidCountry">
              <option>Nigeria</option>
              <option>Ghana</option>
            </Input>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" />
              </FormGroup>
            </Col>
          </Row>
          <Button>Sign in</Button>
        </Form>
        <br />
      </Container>
    </Fragment>
  );
}
