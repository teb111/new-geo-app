import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/authActions";
import Loader from "../components/Loader";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    businessName: "",
    businessAddress: "",
    businessPhone: "",
    registrationNumber: "",
    tags: "",
  });

  const register = useSelector((state) => state.register);
  const { loading, success, error, business } = register;

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { ...data };
    setData(formData);
    console.log(formData);
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (success) {
      navigate("/business-dashboard", { replace: true });
    }
  }, [success, navigate]);

  return (
    <div className="register">
      <div className="container">
        <div className="Left">
          <h1>Register Your business</h1>
        </div>
        <div className="Right">
          <p style={{ color: "red" }}>{error?.message}</p>
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="form-container"
          >
            <div className="user-details">
              <div className="form_users">
                <input
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  onChange={handleChange}
                  value={data.firstname}
                  required
                />
              </div>
              <div className="form_users">
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  onChange={handleChange}
                  value={data.lastname}
                  required
                />
              </div>
              <div className="form_users">
                <input
                  type="text"
                  placeholder="Phone number"
                  name="phone"
                  onChange={handleChange}
                  value={data.phoneNumber}
                  required
                />
              </div>
              <div className="form_users">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                />
              </div>
              <div className="form_users">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                />
              </div>
            </div>

            <div className="business-details">
              <div className="form_users">
                <input
                  type="text"
                  placeholder="Business name"
                  name="businessName"
                  onChange={handleChange}
                  value={data.businessName}
                  required
                />
              </div>
              {/* <div className="form_users">
                <input
                  type="tel"
                  placeholder="Business number"
                  name="businessNumber"
                  onChange={handleChange}
                  value={data.businessNumber}
                  maxLength={11}
                  required
                />
              </div> */}
              <div className="form_users">
                <input
                  type="text"
                  placeholder="Business address"
                  name="businessAddress"
                  onChange={handleChange}
                  value={data.businessAddress}
                  required
                />
              </div>
              <div className="form_users">
                <input
                  type="text"
                  placeholder="Registration Number"
                  name="registrationNumber"
                  onChange={handleChange}
                  value={data.regNumber}
                  required
                />
              </div>
              <div className="form_users">
                <input
                  type="text"
                  placeholder="Business Phone Number"
                  name="businessPhone"
                  onChange={handleChange}
                  value={data.regNumber}
                  required
                />
              </div>
              <div className="form_users tags">
                <input
                  type="text"
                  value={data.tags}
                  name="tags"
                  onChange={handleChange}
                  placeholder="Enter tags (e.g., shops, schools)"
                />
                {/* <ul>
                  {tagList.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul> */}
              </div>
            </div>
            {loading ? (
              <Loader />
            ) : (
              <button type="submit" className="btn">
                Sign Up
              </button>
            )}
          </form>

          <p>
            {" "}
            <Link
              to="/login"
              style={{
                display: "block",
                margin: 0,
                padding: 0,
                textAlign: "center",
                color: "#000",
                textDecoration: "none",
              }}
            >
              Already have an account? Login{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
