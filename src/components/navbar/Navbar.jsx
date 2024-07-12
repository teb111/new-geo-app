import React, { useState, useRef } from "react";
import Modal from "react-modal";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./Navbar.css";

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/40");
    const fileInputRef = useRef(null);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="search">
          <input type="text" placeholder="search" id="text" />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            <FullscreenOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon className="icon" />
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div>
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
              onClick={openModal}
            />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Profile Options"
              className="modal"
              overlayClassName="overlay"
            >
              <h2>Profile Options</h2>
              <button className="button1" 
                onClick={handleUploadClick}>
                Upload Image
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
              <button className="button1">Settings</button>
              <button className="button1" onClick={handleLogout}>Logout</button>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
