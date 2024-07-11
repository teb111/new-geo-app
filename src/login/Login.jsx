import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/authActions";
import Loader from "../components/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");

  const login = useSelector((state) => state.login);
  const { loading, success, error, userInfo } = login;

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      setFormError("Please fill all fields");
      return;
    } else {
      setFormError("");
      dispatch(loginUser(data.email, data.password));
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (success) {
      navigate("/business-dashboard", { replace: true });
    }
  }, [success, navigate]);

  return (
    <div className="login">
      <div className="login_container">
        <div id="left">
          <h1>New User ?</h1>
          <Link to="/register">
            <button className="control">Sign Up</button>
          </Link>
        </div>
        <div id="right">
          <form className="form_container" onSubmit={handleSubmit}>
            <p style={{ color: "red" }}>{formError || error?.message}</p>
            <div className="email">
              <input
                type="email"
                placeholder="please enter your email address"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="details"
              />
            </div>
            <br />
            <div className="password">
              <div id="container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="please enter your password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className="details"
                />
                <IconButton onClick={handleToggle} className="passwordtoggle">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
            </div>
            <br />
            {/* <div className="forgotpassword">
              <Link to="/reset">
                <p className="forgot">Forgot password?</p>
              </Link>
            </div> */}
            {loading ? (
              <Loader />
            ) : (
              <button type="submit" className="control right">
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
