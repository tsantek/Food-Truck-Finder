import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container
} from "reactstrap";
import Logo from "./logo/Logo";

const Login = () => {
  return (
    <div className="login-container">
      <Logo />
      <h3 className="title-name-header login-page-title">Food Truck Finder </h3>
      <Container>
        <Row>
          <h3 className="login-quote">
            Nobody wants to kiss when they are hungry*.
          </h3>
          <p className="sub-title-login">
            Hunger - The worst possible torture someone could go through.
          </p>
        </Row>
        <Row>
          <div className="buttons-reg-log">
            <div>Hungry?</div>
          </div>
        </Row>
        <Row>
          <div className="buttons-reg-log">
            <p>Don't have an account?</p>
            <p>Register</p>
          </div>
        </Row>
        <Row>
          <Col className="col-login-cart">
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
