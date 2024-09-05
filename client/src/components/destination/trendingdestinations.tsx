import React, { useState } from 'react';
import A from './A';

const destinations = [
  {
    rating: '4.4',
    description: 'Nuwara Eliya, known as "Little England," is a picturesque hill station in Sri Lanka, famed for its cool climate, colonial charm, and breathtaking tea plantations.',
    name: 'Nuwara Eliya',
    image: 'imgtrending-1.jpg',
  },
  {
    rating: '4.4',
    description: 'Kandy, the cultural capital of Sri Lanka, is a historic city nestled in lush hills, renowned for the sacred Temple of the Tooth, vibrant local culture, and stunning scenery.',
    name: 'Kandy',
    image: 'imgtrending-1.jpg',
  },
  {
    rating: '4.4',
    description: 'Kandy, the cultural capital of Sri Lanka, is a historic city nestled in lush hills, renowned for the sacred Temple of the Tooth, vibrant local culture, and stunning scenery.',
    name: 'Kandy',
    image: 'imgtrending-2.jpg',
  },
  {
    rating: '4.4',
    description: 'Kandy, the cultural capital of Sri Lanka, is a historic city nestled in lush hills, renowned for the sacred Temple of the Tooth, vibrant local culture, and stunning scenery.',
    name: 'Kandy',
    image: 'imgtrending-2.jpg',
  },
];

export const Trendings = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayItems = [
    destinations[currentIndex],
    destinations[(currentIndex + 1) % destinations.length],
  ];

  const getGoogleMapsUrl = (destinationName: string) => {
    const baseUrl = 'https://www.google.com/maps/search/?api=1&query=';
    return `${baseUrl}${encodeURIComponent(destinationName)}`;
  };

  return (
    <div className="w-[1728px] h-[764px] bg-[#f7fbff] relative overflow-hidden">
      <div className="relative w-[1728px] h-[764px] -top-3 left-[40px] overflow-hidden">
        <img
          className="absolute top-14 left-[200px] w-[156px] h-[131px]"
          alt="Comma Decoration"
          src="Comma - 1.png"
        />
        <img
          className="absolute top-20 left-[1075px] w-[156px] h-[131px]"
          alt="Comma Decoration"
          src="Comma - 2.png"
        />

        <div className="absolute top-[120px] left-0 inline-flex flex-col items-center gap-16">
          <p className="relative w-[700px] h-[100px] text-[18px] font-medium text-black text-xl text-center tracking-[0] leading-[30px] [font-family:'Poppins-Medium',Helvetica]">
            Explore the diverse beauty of Sri Lanka with our curated destinations, from the misty highlands of Nuwara Eliya to the cultural treasures of Kandy. Each location offers a unique blend of natural wonders, historical landmarks, and vibrant local experiences, promising an unforgettable journey through this island paradise.
          </p>

          <div className="relative flex items-center overflow-hidden">
            <button
              className="absolute left-0 top-[50%] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
              onClick={goToPrevious}
            >
              &lt;
            </button>

            <div className="flex gap-10">
              {displayItems.map((destination, index) => (
                <div
                  key={index}
                  className="relative inline-flex h-[400px] items-center rounded-3xl shadow-lg bg-[#13294b78] p-6"  
                >
                  <div className="relative inline-flex flex-col items-start justify-center gap-6 p-10">
                    <div className="relative inline-flex flex-col items-start gap-6">
                      <p className="relative font-medium text-[#383838] text-[50px] tracking-[0] leading-[96px] whitespace-nowrap [font-family:'Poppins-Medium',Helvetica]">
                        <span className="text-[40px]">
                          {destination.rating}
                        </span>{' '}
                        <span className="text-2xl leading-9">stars</span>
                      </p>
                      <div className="relative inline-flex items-start gap-1">
                        <img
                          className="w-[21.1px] h-[20.14px]"
                          alt="Star"
                          src="star.svg"
                        />
                        <img
                          className="w-[21.1px] h-[20.14px]"
                          alt="Star"
                          src="star.svg"
                        />
                        <img
                          className="w-[21.1px] h-[20.14px]"
                          alt="Star"
                          src="star.svg"
                        />
                        <img
                          className="w-[21.1px] h-[20.14px]"
                          alt="Star"
                          src="star.svg"
                        />
                        <img
                          className="w-[21.1px] h-[20.14px]"
                          alt="Star"
                          src="star.svg"
                        />
                      </div>
                    </div>
                    <div className="relative flex flex-col gap-12">
                      <p className="relative w-[280px] font-normal text-[14px] text-[#282828] text-lg tracking-[0] leading-[22px] [font-family:'Poppins-Regular',Helvetica]">
                        {destination.description}
                      </p>
                      <div className="relative flex items-center gap-8">
                        <p className="relative font-medium text-[#252525] text-2xl tracking-[0] leading-9 whitespace-nowrap [font-family:'Poppins-Medium',Helvetica]">
                          {destination.name}
                        </p>                            
                        <A
                          text="View In Map"
                          onClick={() =>
                            window.open(getGoogleMapsUrl(destination.name), '_blank')
                          }
                          className="!h-[53px] !bg-[#087e8b] !w-[175px] !transition-colors duration-300 ease-in-out hover:!bg-[#065d6a] hover:!text-[#ffffff]"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="relative w-[300px] h-[300px] object-cover"
                    alt="Destination"
                    src={destination.image}
                  />
                </div>
              ))}
            </div>

            <button
              className="absolute right-0 top-[50%] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
              onClick={goToNext}
            >
              &gt;
            </button>
          </div>
        </div>

        <div className="absolute top-[42px] left-[460px] font-medium text-[#333333] text-[38px] tracking-[0] leading-[49.4px] whitespace-nowrap [font-family:'Poppins-Medium',Helvetica]">
          TRENDING DESTINATIONS
        </div>
      </div>
    </div>
  );
};

function TrendingDestination() {
  return (
    <div>
      <Trendings />
    </div>
  );
}

export default TrendingDestination;
