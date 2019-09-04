import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  Button,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import Logo from "../logo/Logo";

const Truck = props => {
  const user = useSelector(state => state.payload);
  const { history, setLocation, stops, deleteLocation } = props;

  console.log(user);

  return (
    <div className="login-container">
      <Logo />
      <Container>
        <Row>
          <h4 className="update-text-profile">Update your Truck Profile</h4>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  value={user.email}
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">New Password</Label>
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
                  value={user.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="subtitle">What kind of food are you serving?</Label>
                <Input
                  type="text"
                  name="subtitle"
                  id="subtitle"
                  placeholder="Food type"
                  value={user.subtitle}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">
                  Tell us something about yourslf..
                </Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  value={user.description}
                />
              </FormGroup>
              <FormGroup>
                <Label for="img">Profile Image Link</Label>
                <Input
                  type="text"
                  name="img"
                  id="img"
                  placeholder="Link for profile image"
                  value={user.img}
                />
              </FormGroup>
              <Button>Update</Button>
              <Button onClick={() => history.push("/trackview")}>Back</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Truck);
