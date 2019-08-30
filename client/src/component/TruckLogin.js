import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkUserInfo, userRegister } from "../api/api";
import { getUserInfo } from "../redux/actions";
import { withRouter } from "react-router-dom";
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

const TruckLogin = props => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const { location, history } = props;

  const onSubmitLogin = e => {
    e.preventDefault();
    let password = e.target.password.value;
    let email = e.target.email.value;

    checkUserInfo("http://localhost:8080/api/v1/foodtruck/authenticate", {
      password,
      email
    })
      .then(data => {
        if (data.authenticated) {
          dispatch(getUserInfo(data.user));
          history.push("/truckview");
        } else {
          console.log("Sorry wrong password!");
        }
      })
      .catch(error => console.error(error));
  };

  const onSubmitRegister = e => {
    e.preventDefault();
    let password = e.target.password.value;
    let email = e.target.email.value;
    let name = e.target.name.value;
    let img = e.target.img.value;

    userRegister("http://localhost:8080/api/v1/foodtruck", {
      password,
      email,
      img,
      name
    })
      .then(data => {
        dispatch(getUserInfo(data));
        history.push("/trackview");
      })
      .catch(error => console.error(error));
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
              <form
                onSubmit={e => onSubmitRegister(e)}
                className="form-register"
              >
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Username</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Username"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="subtitle">
                    What kind of food are you serving?
                  </Label>
                  <Input
                    type="text"
                    name="subtitle"
                    id="subtitle"
                    placeholder="Food type"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">
                    Tell us something about yourslf..
                  </Label>
                  <Input type="textarea" name="description" id="description" />
                </FormGroup>
                <FormGroup>
                  <Label for="img">Profile Image Link</Label>
                  <Input
                    type="text"
                    name="img"
                    id="img"
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

export default withRouter(TruckLogin);
