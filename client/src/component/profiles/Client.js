import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateClientProfile } from "../../api/api";

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

const Client = props => {
  const user = useSelector(state => state.payload);
  const { history } = props;
  const [form, setForm] = useState();
  useEffect(() => {
    setForm(user);
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    updateClientProfile(
      `http://localhost:8080//api/v1/users/${user.id}`,
      form
    ).then(res => {
      // dispatch(getUserInfo(res));
      history.push("/userview");
      localStorage.setItem("client", JSON.stringify(res));
    });
    console.log(form);
  };

  return (
    <div className="login-container">
      <Logo />
      <Container>
        <Row>
          <h4 className="update-text-profile">Update your Profile</h4>
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
              <Button onClick={() => history.push("/userview")}>Back</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(Client);
