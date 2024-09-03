import DefaultLayout from '@/layouts/default'
import { title } from "@/components/primitives";
import React from 'react'
import Hero from '@/components/landingpage/hero';
import HeroSection from '@/components/landingpage/herosection';
import TrendingEvents from '@/components/landingpage/TrendingEvents';
import TouristFeedback from '@/components/landingpage/TouristFeedback';
import TrendingDestinations from '@/components/landingpage/TrendingDestinations';
import Services from './services';
import ContactUs from '@/components/landingpage/ContactUs';
import GetInTouch from '@/components/landingpage/GetInTouch';
import ServicesCard from '@/components/landingpage/ServicesCard';

const LandingPage = () => {
  return (
    <DefaultLayout>
   
    <HeroSection />
    <ServicesCard />
    <TrendingEvents />
    <TouristFeedback />
    <TrendingDestinations />
    <ContactUs />
    <GetInTouch />


  </DefaultLayout>
  )
}

export default LandingPage