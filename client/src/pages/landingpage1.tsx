import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import React, { useEffect, useState } from "react";
import Hero from "@/components/landingpage/hero";
import HeroSection from "@/components/landingpage/herosection";
import TrendingEvents from "@/components/landingpage/TrendingEvents";
import TouristFeedback from "@/components/landingpage/TouristFeedback";
import TrendingDestinations from "@/components/landingpage/TrendingDestinations";
import Services from "./services";
import ContactUs from "@/components/landingpage/ContactUs";
import GetInTouch from "@/components/landingpage/GetInTouch";
import ServicesCard from "@/components/landingpage/ServicesCard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/redux/features/userSlice";
import PublicLayout from "@/layouts/publicLayout";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  // Get User Data
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found");
      }
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.data));
      } else {
        localStorage.clear();
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    } else {
      setLoading(false);
    }
  }, [user]);

  return (
    <>
      {user ? (
        <DefaultLayout>
          <HeroSection />
          <ServicesCard />
          <TrendingEvents />
          <TouristFeedback />
          <TrendingDestinations />
          <ContactUs />
          <GetInTouch />
        </DefaultLayout>
      ) : (
        <PublicLayout>
          <HeroSection />
          <ServicesCard />
          <TrendingEvents />
          <TouristFeedback />
          <TrendingDestinations />
          <ContactUs />
          <GetInTouch />
        </PublicLayout>
      )}
    </>
  );
};

export default LandingPage;
