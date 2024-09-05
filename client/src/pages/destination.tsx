import React from 'react';
import Hero from '@/components/destination/hero';
import Trendingdestination from '@/components/destination/trendingdestinations';
import DestinationCategory from '@/components/destination/destinationcategory';
import Explore from '@/components/destination/explore';
import App from '@/components/destination/appdownload';



const Destination = (): JSX.Element => {
  return (
    <div>
      <Hero />
      <Trendingdestination />
      <DestinationCategory />
      <Explore />
      <App />

    </div>
  );
}

export default Destination;
