import React from "react";
import Hero from "@/components/destination/hero";
import Trendingdestination from "@/components/destination/trendingdestinations";
import DestinationCategory from "@/components/destination/destinationcategory";
import Explore from "@/components/destination/explore";
import App from "@/components/destination/appdownload";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import DefaultLayout from "@/layouts/default";

Footer;
Navbar;
const Destination = (): JSX.Element => {
  return (
    <>
      <DefaultLayout>
        <Hero />
        <Trendingdestination />
        <DestinationCategory />
        <Explore />
        <App />
      </DefaultLayout>
    </>
  );
};

export default Destination;
