import Products from './pages/products/Products';
import Login from './pages/user/Login';
import SignUp from './pages/user/SignUp';
import Profile from './pages/user/Profile';
import ForgotPass from './pages/user/ForgotPass';
import Payment from './pages/payment/Payment';
import Dashboard from './pages/admin/Dashboard';
import Navbar from './pages/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/forgot-password" element={<ForgotPass />}/>
          <Route path="/payment" element={<Payment />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;