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


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<LandingPage />} path="/landing" />
      <Route element={<Destination />} path="/destination" />
      <Route element={<LogIn />} path="/login" />
      <Route element={<Admin />} path="/admin" />
      <Route element={<Services />} path="/services" />
      <Route element={<News />} path="/news" />
      <Route element={<Events />} path="/test" />
    </Routes>
  );
}

export default App;