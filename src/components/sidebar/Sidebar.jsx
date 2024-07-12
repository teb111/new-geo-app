import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import './Sidebar.css';

const Sidebar = () => {
  return <div className='sidebar'>
    <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">Mantis Hub</span>
      </Link>
    </div>
    <hr />
    <div className="bottom">
      <ul>
        <li>
          <DashboardIcon className='icon'/>
          <span>Dashboard</span>
        </li>

        <Link to="/users" style={{ textDecoration: "none" }}>
          <li>
            <Person3OutlinedIcon className='icon'/>
            <span>Users</span>
          </li>
        </Link>
        <Link to="/product" style={{textDecoration: "none" }}>
          <li>
            <LocalGroceryStoreOutlinedIcon className='icon'/>
            <span>Products</span>
          </li>
        </Link>
        <li>
          <CreditCardOutlinedIcon className='icon'/>
          <span>Orders</span>
        </li>

        <li>
          <InsertChartOutlinedSharpIcon className='icon'/>
          <span>Stats</span>
        </li>

        <li>
          <SettingsOutlinedIcon className='icon'/>
          <span>Settings</span>
        </li>

      </ul>
    </div>
  </div>;
}

export default Sidebar;