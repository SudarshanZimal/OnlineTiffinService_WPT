import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarCode from "./Components/Navbar";
import CarouselFun from "./Components/Carsouelimg";
import Signinpage from "./Components/SignIn";
import SignUpCode from "./Components/SignUp";
import MealPlans from "./Components/MealPlanSection";
import OrderForm from "./Components/OrderDetails";
import { CustomerRequestList } from "./Components/CustomerRequestList";
import TopFoodVlog from "./Components/Gallery"; 
import LoginPage from "./Components/Login";
import RegistrationForm from "./Components/Registration";
import About from "./Components/About";
import { TopHeadlines } from "./Components/TopHeadlines";
import { AllNews } from "./Components/AllNews";
function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<NavbarCode />}></Route>
          <Route path="/top-headlines" element={<TopHeadlines/>}></Route>
        <Route path="/all-news" element={<AllNews/>}></Route>
          <Route path="/SignIn" element={<Signinpage />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
          <Route path="/Registration" element={<RegistrationForm />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/SignUp" element={<SignUpCode />}></Route>
          <Route path="/MealPlanSection" element={<MealPlans />}></Route>
          <Route path="/OrderDetails" element={<OrderForm />}></Route>
          <Route path="/CustomerRequestList" element={<CustomerRequestList />}></Route>


        </Routes>
       
        <CarouselFun />
      </div>
    </BrowserRouter>








  );
}

export default App;
