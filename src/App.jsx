import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import styles from './style';
//import Navbar from './components/Navbar';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AdminLoginPage from './pages/AdminLoginPage';
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard';
import AdminProducts from './components/AdminProducts';
import AdminRetailers from './components/AdminRetailers';
import AdminFarmers from './components/AdminFarmers';
import AdminNewProduct from './components/AdminNewProduct';
import AdminTransactions from './components/AdminTransactions';


// const Home = () => (
//   <div>
//     <Hero />
//     <Stats />
//     <Business />
//     {/* Add other components specific to the home page */}
//     <CTA />
//     <Footer />
//   </div>
// );

const App = () => (
  <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden">
      {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div> */}

      {/* Use Routes here */}
      <Routes>
        <Route exact path="/" element={<Home />} /> {/* Home route */}
        <Route path="/signinpage" element={<SignInPage />} /> {/* Route for SignInPage */}
        <Route path="/signuppage" element={<SignUpPage />} /> {/* Route for SignUpPage */}
        <Route path="/adminloginpage" element={<AdminLoginPage />} /> {/* Route for AdminLoginPage */}
        <Route path="/admindashboard" element={<AdminDashboard />} /> Route for AdminDashboard
        <Route path="/products" component={AdminProducts} />
        <Route path="/retailerdata" component={AdminRetailers} />
        <Route path="/farmerdata" component={AdminFarmers} />
        <Route path="/addproduct" component={AdminNewProduct} />
        <Route path="/transactions" component={AdminTransactions} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;



// import styles from "./style";
// import { Business, CTA, Footer, Navbar, Stats, Hero} from "./components";

// const App = () => (
//   <div className="bg-primary w-full overflow-hidden">
//     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Navbar />
//       </div>
//     </div>

//     <div className={`bg-primary ${styles.flexStart}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Hero />
//       </div>
//     </div>
    
//     <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Stats />
//         <Business />
//         {/* <Billing /> */}
//         {/* <CardDeal /> */}
//         {/* <Clients /> */}
//         {/* <Testimonials/> */}
//         {/* <Route path="/signin" component={SignInPage} /> */}
//         <CTA />
//         <Footer />
//       </div>
//     </div>
//   </div>
// );

// export default App; 