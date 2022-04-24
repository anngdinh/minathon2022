import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  margin: 150px auto;
  width: 400px;
`;
const Register = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    name: "",
    phone: "",
  });
  const { username, password, name, phone } = data;
  const onChangeField = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    axios.post("http://localhost:5000/user", formData).then((res) => {
      console.log(res.data.user);
      if (res.data.user !== null) {
        console.log("??????");
        localStorage.setItem("userId", res.data.user._id);
      }
    });
    navigate("../", { replace: true });
    alert("Resgiter done");
  };
  return (
    <Container>
      <form>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={onChangeField}
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChangeField}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            value={name}
            name="name"
            onChange={onChangeField}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="phone"
            value={phone}
            name="phone"
            onChange={onChangeField}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        {/* <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={(e) => handleRegister(e)}
        >
          Register
        </button>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
    </Container>
  );
};

export default Register;
