import React, { useEffect, useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import axios from "axios";

function Register(props) {
  // useEffect(() => {
  //   axios.get("http://localhost:8081/api/test-api").then((data) => {
  //     console.log(data);
  //   });
  // }, []);
  const handleRegister = () => {
    let userData = {
      username: username,
      sex: sex,
      address: address,
      email: email,
      phone: phone,
      password: password,
      confirmPassword: confirmPassword,
    };
  };
  const [username, setUsername] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="register-container d-flex align-items-center">
      <div className="container">
        <div className="row px-3">
          <div className="left-content col-7 d-none d-md-block">
            <div className="brand">FACEBOOK</div>
            <div className="details">
              Facebook helps you connect and share with the people in your life.
            </div>
          </div>
          <div className="right-content col-12 col-md-5 d-flex flex-column gap-3 py-3">
            <div className="brand d-md-none">FACEBOOK</div>
            <div className="form-group d-flex flex-column gap-1">
              <label htmlFor="username" className="ps-2">
                Username:{" "}
              </label>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="sex gap-1">
              <label className="ps-2">Sex: </label>
              <div className="d-flex justify-content-between">
                <div
                  className="sex-option col-3 text-center"
                  onClick={() => setSex("male")}
                >
                  <label htmlFor="male">Male: </label>
                  <input
                    id="male"
                    type="radio"
                    name="sex"
                    value="male"
                    checked={sex === "male"}
                    onChange={(e) => setSex(e.target.value)}
                  />
                </div>
                <div
                  className="sex-option col-3 text-center"
                  onClick={() => setSex("female")}
                >
                  <label htmlFor="female">Female: </label>
                  <input
                    id="female"
                    type="radio"
                    name="sex"
                    value="female"
                    checked={sex === "female"}
                    onChange={(e) => setSex(e.target.value)}
                  />
                </div>
                <div
                  className="sex-option col-3 text-center"
                  onClick={() => setSex("other")}
                >
                  <label htmlFor="other">Other: </label>
                  <input
                    id="other"
                    type="radio"
                    name="sex"
                    value="other"
                    checked={sex === "other"}
                    onChange={(e) => setSex(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Address: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Email: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Phone number: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Re-enter password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={() => handleRegister()}
            >
              Register
            </button>
            <hr />
            <div className="text-center">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
