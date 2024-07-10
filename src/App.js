import { Route, Routes } from 'react-router-dom'
import Signup from './signup/Signup';
import Login from './login/Login';
import Register from './register/Register';
import forgotPassword from './forgotPassword/forgotPassword';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/reset" element={<forgotPassword />} />
      </Routes>
  );
}

export default App;
