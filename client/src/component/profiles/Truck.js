import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateTruckProfile } from "../../api/api";

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
  const { history } = props;
  const [form, setForm] = useState();
  // const dispatch = useDispatch();

  useEffect(() => {
    setForm(user);
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    updateTruckProfile(
      `http://localhost:8080//api/v1/foodtruck/${user.id}`,
      form
    ).then(res => {
      // dispatch(getUserInfo(res));
      history.push("/truckview");
      localStorage.setItem("user", JSON.stringify(res));
    });
  };

  return (
    <div className="login-container">
      <Logo />
      <Container>
        <Row>
          <h4 className="update-text-profile">Update your Truck Profile</h4>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <form onSubmit={e => onSubmitForm(e)}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  value={form && form.email}
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">New Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={form && form.password}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Username</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Username"
                  value={form && form.name}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="subtitle">What kind of food are you serving?</Label>
                <Input
                  type="text"
                  name="subtitle"
                  id="subtitle"
                  placeholder="Food type"
                  value={form && form.subtitle}
                  onChange={handleInputChange}
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
                  value={form && form.description}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="img">Profile Image Link</Label>
                <Input
                  type="text"
                  name="img"
                  id="img"
                  placeholder="Link for profile image"
                  value={form && form.img}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <Button>Update</Button>
              <Button onClick={() => history.push("/truckview")}>Back</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Truck);
