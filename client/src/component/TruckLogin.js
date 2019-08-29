import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const TruckLogin = () => {
  const [state, setState] = useState(false);

  const onSubmitLogin = e => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

  return (
    <div className="login-container">
      <Logo />
      <a className="title-name-header login-title">Food Truck Finder </a>
      <div className="login-page-truck-login-btn">
        <Link to="/" className="truck-login-btn">
          Hungry?
        </Link>
      </div>
      <Container>
        <Row>
          <h3 className="login-quote">
            Let your customers know where you at!!
          </h3>
          <p className="sub-title-login">Chefs for Passion</p>
        </Row>
        <Row>
          <div className="buttons-reg-log">
            <p onClick={() => setState(!state)} className="accout-toggle-btn">
              {state ? "Have an account?" : "Don't have an account?"}
            </p>
          </div>
        </Row>
        <Row>
          <Col className="col-login-cart">
            {!state ? (
              <Form onSubmit={e => onSubmitLogin(e)}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                  />
                </FormGroup>
                <Button>Login</Button>
              </Form>
            ) : (
              // REGISTER
              <form onSubmit={e => onSubmitLogin(e)} className="form-register">
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="exampleEmail"
                    placeholder="Username"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">
                    What kind of food are you serving?
                  </Label>
                  <Input
                    type="text"
                    name="img-profile"
                    id="exampleEmail"
                    placeholder="Food type"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">
                    Tell us something about yourslf..
                  </Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>{" "}
                <FormGroup>
                  <Label for="exampleEmail">Profile Image Link</Label>
                  <Input
                    type="text"
                    name="img-profile"
                    id="exampleEmail"
                    placeholder="Link for profile image"
                  />
                </FormGroup>
                <Button>Register</Button>
              </form>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TruckLogin;
