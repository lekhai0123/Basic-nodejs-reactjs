import React from "react";
import "./Login.scss";
function Login(props) {
  return (
    <div className="login-container d-flex align-items-center">
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
            <input
              type="text"
              className="form-control"
              placeholder="Email address or username"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <button className="btn btn-primary">Login</button>
            <span className="text-center">
              <a href="/#" className="forgot-password">
                Forgot your password?
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button className="btn btn-success">Create new account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
