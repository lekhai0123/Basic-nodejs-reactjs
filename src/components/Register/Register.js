import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
function Register(props) {
  // const navigate = useNavigate();
  // const handleLogin = () => {
  //   navigate("/login");
  // };

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
              <label className="ps-2">Username: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="sex gap-1">
              <label className="ps-2">Sex: </label>
              <div className="d-flex justify-content-between">
                <div className="sex-option col-3 text-center">
                  <span>Male: </span>
                  <input type="radio" name="sex" value="male" />
                </div>
                <div className="sex-option col-3 text-center">
                  <span>Female: </span>
                  <input type="radio" name="sex" value="female" />
                </div>
                <div className="sex-option col-3 text-center">
                  <span>Other: </span>
                  <input type="radio" name="sex" value="other" />
                </div>
              </div>
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Address: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Email: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Email address"
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Phone number: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Re-enter password: </label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter password"
              />
            </div>
            <button className="btn btn-primary">Register</button>
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
