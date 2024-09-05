import React from "react";
import Hero from "@/components/destination/hero";
import Trendingdestination from "@/components/destination/trendingdestinations";
import DestinationCategory from "@/components/destination/destinationcategory";
import Explore from "@/components/destination/explore";
import App from "@/components/destination/appdownload";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

Footer;
Navbar;
const Destination = (): JSX.Element => {
  return (
    <div>
      <div className="pb-1">
        <Navbar />
      </div>
      <Hero />
      <Trendingdestination />
      <DestinationCategory />
      <Explore />
      <App />
      <div className="pt-1">
        <Footer />
      </div>
    </div>
  );
};

export default Destination;
