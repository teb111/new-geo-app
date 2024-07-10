import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    password: "",
    businessName: "",
    businessNumber: "",
    businessAddress: "",
    regNumber: "",
    tags: [],
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const [tags, setTags] = useState("");
  const [tagList, setTagList] = useState([]);

  const handleInputChange = (event) => {
    setTags(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTagList = tags
      .trim()
      .split(",")
      .map((tag) => tag.trim());
    setTagList(newTagList);
    setTags("");

    const formData = { ...data, tags: newTagList };
    setData(formData);
  };

  return (
    <div className="register">
      <div className="container">
        <div className="Left">
          <h1 className="title">Register Here</h1>
        </div>
        <div className="Right">
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="form-container"
          >
            <div className="user-details">
              <div className="form_users">
                <label>Firstname</label>
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
                <label>Lastname</label>
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
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={data.phoneNumber}
                  maxLength={11}
                  required
                />
              </div>
              <div className="form_users">
                <label>Email</label>
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
                <label>Password</label>
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
                <label>Business Name</label>
                <input
                  type="text"
                  placeholder="Business name"
                  name="businessName"
                  onChange={handleChange}
                  value={data.businessName}
                  required
                />
              </div>
              <div className="form_users">
                <label>Business Number</label>
                <input
                  type="tel"
                  placeholder="Business number"
                  name="businessNumber"
                  onChange={handleChange}
                  value={data.businessNumber}
                  maxLength={11}
                  required
                />
              </div>
              <div className="form_users">
                <label>Business Address</label>
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
                <label>Registration Number</label>
                <input
                  type="text"
                  placeholder="Registration Number"
                  name="regNumber"
                  onChange={handleChange}
                  value={data.regNumber}
                  required
                />
              </div>
              <div className="form_users tags">
                <label>Tags</label>
                <input
                  type="text"
                  value={tags}
                  onChange={handleInputChange}
                  placeholder="Enter tags (e.g., shops, schools)"
                />
                <ul>
                  {tagList.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
