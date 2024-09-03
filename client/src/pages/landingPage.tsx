import DefaultLayout from '@/layouts/default'
import { title } from "@/components/primitives";
import React from 'react'
import Hero from '@/components/landingpage/hero';
import HeroSection from '@/components/landingpage/herosection';
import TrendingEvents from '@/components/landingpage/TrendingEvents';
import TouristFeedback from '@/components/landingpage/TouristFeedback';
import TrendingDestinations from '@/components/landingpage/TrendingDestinations';
<<<<<<< Updated upstream
import Services from './services';
import ContactUs from '@/components/landingpage/ContactUs';
import GetInTouch from '@/components/landingpage/GetInTouch';
import ServicesCard from '@/components/landingpage/ServicesCard';
=======
import ContactUs from '@/components/landingpage/ContactUs';
import GetInTouch from '@/components/landingpage/GetInTouch';
import Services from '@/components/landingpage/Services';
import HeroSearchBar from '@/components/landingpage/HeroSearchBar';
>>>>>>> Stashed changes

const LandingPage = () => {
  return (
    <DefaultLayout>
   
    <HeroSection />
<<<<<<< Updated upstream
    <ServicesCard />
=======
    <Services />
>>>>>>> Stashed changes
    <TrendingEvents />
    <TouristFeedback />
    <TrendingDestinations />
    <ContactUs />
    <GetInTouch />
<<<<<<< Updated upstream


  </DefaultLayout>
=======
    </div>
    
>>>>>>> Stashed changes
  )
}

export default LandingPage