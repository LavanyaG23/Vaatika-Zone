import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';
import AdminDashboard from '../components/AdminDashboard';
import AdminProducts from '../components/AdminProducts';
import AdminRetailers from '../components/AdminRetailers';
import AdminFarmers from '../components/AdminFarmers';
import AdminNewProduct from '../components/AdminNewProduct';

const AdminLayout = () => {
  return (
    <div className='App'>
      <SideBar/>
      <div className='content'>
        {/* Nested routes for admin section */}
        <Routes>
          <Route path="/adminlayout/adminlayout" element={<AdminDashboard />} />
          <Route path="/adminlayout/products" element={<AdminProducts />} />
          <Route path="/adminlayout/retailerdata" element={<AdminRetailers />} />
          <Route path="/adminlayout/farmerdata" element={<AdminFarmers />} />
          <Route path="/adminlayout/addproduct" element={<AdminNewProduct />} />
        </Routes>
        <Outlet/>
        <div className="dashboard-container">
        {/* First flexbox container */}
        <div className="dashboard-item">
          <h3>Total Products</h3>
          <p>245</p>
        </div>
        
        {/* Second flexbox container */}
        <div className="dashboard-item">
          <h3>Total Retailers</h3>
          <p>233</p>
        </div>
        
        {/* Third flexbox container */}
        <div className="dashboard-item">
          <h3>Total Farmers</h3>
          <p>87</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AdminLayout;
