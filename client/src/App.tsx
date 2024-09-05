import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import LandingPage from "./pages/landingpage1";
import Destination from "./pages/destination";
import LogIn from "./pages/login";
import Admin from "./pages/admin";
import Services from "./pages/services";
import News from "./pages/news";
import Events from "./components/landingpage/events";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventDetailModal from "./components/landingpage/EventDetailModal";
import Guide from "./pages/guide";
import SignIn from "./pages/signin";
import HomePage from "./Debug/homepage";
import SignupMenu from "./pages/signupmenu";
import TravelerSignup from "./pages/travelerSignup";
import DriverSignup from "./pages/driverSignup";
import GuideSignup from "./pages/guideSignup";
import Dashboard from "./pages/dashboard";
import SignUp2 from "./pages/travelerSignup1";
import DriverSignUp2 from "./pages/driverSignup2";
import GuideSignUp2 from "./pages/guideSignup2";

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<Destination />} path="/destination" />
      <Route element={<LogIn />} path="/login" />
      <Route element={<Admin />} path="/admin" />
      <Route element={<Services />} path="/services" />
      <Route element={<News />} path="/news" />
      <Route element={<Events />} path="/test" />
      <Route element={<Guide />} path="/guide" />
      <Route element={<SignIn />} path="/signin" />
      <Route element={<SignupMenu />} path="/signup" />
      <Route element={<TravelerSignup />} path="/signup/traveler" />
      <Route element={<DriverSignup />} path="/signup/driver" />
      <Route element={<GuideSignup />} path="/signup/guide" />
      <Route element={<HomePage />} path="/home" />
      <Route element={<Dashboard />} path="/dashboard" />
      <Route element={<SignUp2/>} path="/signup2"/>
      <Route element={<DriverSignUp2/>} path="/drivesignup2"/>
      <Route element={<GuideSignUp2/>} path="guidesignup2"/>
    </Routes>
  );
}

export default App;
