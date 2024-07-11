import { Route, Routes } from "react-router-dom";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import Register from "./register/Register";
import forgotPassword from "./forgotPassword/forgotPassword";
import BusinessDashbaord from "./dashboard/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<forgotPassword />} />
      <Route path="/business-dashboard" element={<BusinessDashbaord />} />
    </Routes>
  );
}

export default App;
