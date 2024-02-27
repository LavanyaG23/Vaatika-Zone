import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar'; // Import the SideBar component
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './components/AdminProducts';
import AdminRetailers from './components/AdminRetailers';
import AdminFarmers from './components/AdminFarmers';
import AdminNewProduct from './components/AdminNewProduct';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AdminLoginPage from './pages/AdminLoginPage';
import Home from './pages/Home';

const App = () => (
  <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden">
      <Routes>
        {/* Public routes (without SideBar) */}
        <Route path="/" element={<Home />} />
        <Route path="/signinpage" element={<SignInPage />} />
        <Route path="/signuppage" element={<SignUpPage />} />
        <Route path="/adminloginpage" element={<AdminLoginPage />} />

        {/* Admin routes (with SideBar) */}
        <Route path="/adminlayout" element={<AdminLayout />}>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/retailerdata" element={<AdminRetailers />} />
          <Route path="/farmerdata" element={<AdminFarmers />} />
          <Route path="/addproduct" element={<AdminNewProduct />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

const AdminLayout = ({ children }) => (
  <div className='App'>
    <SideBar />
    <div>{children}</div>
  </div>
);

export default App;
