import React from "react";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import "./Widget.css";

const Widget = ({ type }) => {
  let data;

  const amount = 500;
//   const diff = 30;
  switch (type) {
    case "customer":
      data = {
        title: "CUSTOMERS",
        isMoney: false,
        link: "See details",
        icon: <PersonOutlineOutlinedIcon
        className="Icon" 
        style={{ color:"crimson", backgroundColor: "#ff000033" }}
        />,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all Orders",
        icon: <ShoppingCartOutlinedIcon 
        className="Icon" 
        style={{ color:"goldenrod", backgroundColor: "#daa52033" }}
        />,
      };
      break;
    case "earnings":
      data = {
        title: "TOTAL EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon
        className="icon" 
        style={{ color:"green", backgroundColor: "#00800033" }}
        />,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "Withdraw money",
        icon: <AccountBalanceWalletOutlinedIcon 
        className="Icon" 
        style={{ color:"purple", backgroundColor: "#80008033" }}
        />,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="lside">
        <span className="titled">{data.title}</span>
        <span className="count">
          {data.isMoney && "$"} {amount}
          </span>
      </div>
      <div className="rside">
        <span className="link">{data.link}</span>
        {/* <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
