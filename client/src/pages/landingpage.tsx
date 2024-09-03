import HeroSection from '@/components/landingpage/herosection'

import React from 'react'

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