import React, { useEffect, useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../services/userService";

function Register(props) {
  useEffect(() => {
    // axios.get("http://localhost:8081/api/test-api").then((data) => {
    //   console.log(data);
    // });
  }, []);

  //controlled component
  const [username, setUsername] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const defaultValidInput = {
    isValidUsername: true,
    isValidSex: true,
    isValidAddress: true,
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  };
  const [CheckInput, setCheckInput] = useState(defaultValidInput);

  //check valid
  const isValid = () => {
    setCheckInput(defaultValidInput);
    toast.dismiss();
    if (!username) {
      toast.warning("Please enter your username");
      setCheckInput({ ...defaultValidInput, isValidUsername: false });
      return false;
    }
    if (!sex) {
      toast.warning("Please choose your sex");
      setCheckInput({ ...defaultValidInput, isValidSex: false });
      return false;
    }
    if (!address) {
      toast.warning("Please enter your address");
      setCheckInput({ ...defaultValidInput, isValidAddress: false });
      return false;
    }
    if (!email) {
      toast.warning("Please enter your email");
      setCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }
    var re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      toast.warning("Please enter a valid email");
      setCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }
    if (!phone) {
      toast.warning("Please enter your phone number");
      setCheckInput({ ...defaultValidInput, isValidPhone: false });
      return false;
    }
    if (!password) {
      toast.warning("Please enter your password");
      setCheckInput({ ...defaultValidInput, isValidPassword: false });
      return false;
    }
    if (password.length < 7) {
      toast.warning("Password must be at least 7 characters long");
      setCheckInput({ ...defaultValidInput, isValidPassword: false });
      return false;
    }
    if (!confirmPassword) {
      toast.warning("Please confirm your password");
      setCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });
    }
    if (password !== confirmPassword) {
      toast.warning("Passwords do not match");
      setCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });
      return false;
    }
    return true;
  };

  //register button
  const handleRegister = async () => {
    let check = isValid();
    if (check === true) {
      let response = await registerUser(username, sex, address, email, phone, password, confirmPassword);
      let sr = response.data;
      console.log(response);
      if (+sr.EC === 0) {
        toast.success(sr.EM);
        navigate("/login");
      } else {
        if (+sr.DT === 1) {
          setCheckInput({ ...defaultValidInput, isValidEmail: false });
          toast.error(sr.EM);
        }
        if (+sr.DT === 2) {
          setCheckInput({ ...defaultValidInput, isValidPhone: false });
          toast.error(sr.EM);
        }
      }
    }
  };

  //navigate
  const navigate = useNavigate();

  return (
    <div className="register-container d-flex align-items-center">
      <div className="container">
        <div className="row px-3">
          <div className="left-content col-7 d-none d-md-block">
            <div className="brand">FACEBOOK</div>
            <div className="details">Facebook helps you connect and share with the people in your life.</div>
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
                className={CheckInput.isValidUsername ? "form-control" : "form-control is-invalid"}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={CheckInput.isValidSex ? "sex gap-1" : "sex gap-1 checkValid"}>
              <label className="ps-2">Sex: </label>
              <div className="d-flex justify-content-between">
                <div className="sex-option col-3 text-center" onClick={() => setSex("male")}>
                  <label htmlFor="male">Male:&nbsp; </label>
                  <input id="male" type="radio" name="sex" value="male" checked={sex === "male"} onChange={(e) => setSex(e.target.value)} />
                </div>
                <div className="sex-option col-3 text-center" onClick={() => setSex("female")}>
                  <label htmlFor="female">Female:&nbsp; </label>
                  <input id="female" type="radio" name="sex" value="female" checked={sex === "female"} onChange={(e) => setSex(e.target.value)} />
                </div>
                <div className="sex-option col-3 text-center" onClick={() => setSex("other")}>
                  <label htmlFor="other">Other:&nbsp; </label>
                  <input id="other" type="radio" name="sex" value="other" checked={sex === "other"} onChange={(e) => setSex(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Address: </label>
              <input
                type="text"
                className={CheckInput.isValidAddress ? "form-control" : "form-control is-invalid"}
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Email: </label>
              <input
                type="text"
                className={CheckInput.isValidEmail ? "form-control" : "form-control is-invalid"}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Phone number: </label>
              <input
                type="text"
                className={CheckInput.isValidPhone ? "form-control" : "form-control is-invalid"}
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Password: </label>
              <input
                type="password"
                className={CheckInput.isValidPassword ? "form-control" : "form-control is-invalid"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group d-flex flex-column gap-1 ">
              <label className="ps-2">Re-enter password: </label>
              <input
                type="password"
                className={CheckInput.isValidConfirmPassword ? "form-control" : "form-control is-invalid"}
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={() => handleRegister()}>
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
