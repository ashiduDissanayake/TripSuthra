
import HeroSection from '@/components/landingpage/herosection'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import TouristFeedback from '@/components/landingpage/TouristFeedback';
import TrendingEvents from '@/components/landingpage/TrendingEvents';
import TrendingDestinations from '@/components/landingpage/TrendingDestinations';

const LandingPage = () => {
  return (
    <div>

    <HeroSection />
    <TrendingEvents />
    <TouristFeedback />
    <TrendingDestinations />
    </div>
    
  )
}

export default LandingPage