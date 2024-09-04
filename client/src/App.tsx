import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import LandingPage from "./pages/landingPage";
import Destination from "./pages/destination";
import Admin from "./pages/admin";
import Services from "./pages/services";
import News from "./pages/news";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<LandingPage />} path="/landing" />
      <Route element={<Destination />} path="/destination" />
      <Route element={<Admin />} path="/admin" />
      <Route element={<News />} path="/news" />
    </Routes>
  );
}

export default App;
