import React, { useState, useEffect } from 'react';

const TrendingDestinations = () => {
  const destinations = [
    {
      title: "Nuwara Eliya",
      rating: "5.0",
      reviews: "168 Reviews",
      description:
        'Nuwara Eliya, known as "Little England," is a picturesque hill station in Sri Lanka, famed for its cool climate, colonial charm, and breathtaking tea plantations.',
      imageUrl: "imgtrending-1.jpg",
      mapUrl: "https://www.google.com/maps/place/Nuwara+Eliya",
    },
    {
      title: "Kandy",
      rating: "4.4",
      reviews: "250 Reviews",
      description:
        "Kandy, the cultural capital of Sri Lanka, is a historic city nestled in lush hills, renowned for the sacred Temple of the Tooth and relic kandy.",
      imageUrl: "imgtrending-2.jpg",
      mapUrl: "https://www.google.com/maps/place/Kandy",
    },
    {
      title: "Galle",
      rating: "4.7",
      reviews: "350 Reviews",
      description:
        "Galle is a historic city on the southwestern tip of Sri Lanka, famous for its well-preserved colonial architecture and beautiful coastal scenery.",
      imageUrl: "imgtrending-3.jpeg",
      mapUrl: "https://www.google.com/maps/place/Galle",
    },
    {
      title: "Sigiriya",
      rating: "4.8",
      reviews: "300 Reviews",
      description:
        "Sigiriya is an ancient rock fortress located in the central Matale District, known for its magnificent architecture and breathtaking views.",
      imageUrl: "imgtrending-4.jpeg",
      mapUrl: "https://www.google.com/maps/place/Sigiriya",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= destinations.length - 2 ? 0 : prevSlide + 2
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? destinations.length - 2 : prevSlide - 2
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide(); 
      } else if (e.key === 'ArrowLeft') {
        prevSlide(); 
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const firstDestination = destinations[currentSlide];
  const secondDestination = destinations[currentSlide + 1];

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">TRENDING DESTINATIONS</h2>
          <p className="text-gray-600">
            Explore the diverse beauty of Sri Lanka with our curated destinations, from the misty highlands of Nuwara Eliya to the cultural treasures of Kandy, Galle, and Sigiriya. Each location offers unique natural wonders, historical landmarks, and vibrant local experiences.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="text-2xl px-4 py-2 bg-gray-200 rounded-full mr-4"
            onClick={prevSlide}
          >
            &#8592;
          </button>

          <div className="w-full max-w-lg p-4 bg-white shadow-lg rounded-lg">
            <div className="text-left mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold">{firstDestination.rating}</span>
                <span className="ml-2 text-gray-500">{firstDestination.reviews}</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="text-yellow-500">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
              </div>
              <p className="text-gray-700 mb-4">{firstDestination.description}</p>
              <div className="text-lg font-bold">{firstDestination.title}</div>
            </div>
            <a
              href={firstDestination.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white px-4 py-2 rounded-lg inline-block transition-colors duration-300 hover:bg-teal-600 hover:text-gray-200"
            >
              View In Map
            </a>
          </div>

          <div className="w-full max-w-lg p-4">
            <img
              src={firstDestination.imageUrl}
              alt={firstDestination.title}
              className="w-[550px] h-[300px] rounded-lg object-cover"
            />
          </div>

          <div className="w-full max-w-lg p-4 bg-white shadow-lg rounded-lg">
            <div className="text-left mb-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold">{secondDestination.rating}</span>
                <span className="ml-2 text-gray-500">{secondDestination.reviews}</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="text-yellow-500">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
              </div>
              <p className="text-gray-700 mb-4">{secondDestination.description}</p>
              <div className="text-lg font-bold">{secondDestination.title}</div>
            </div>
            <a
              href={secondDestination.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 text-white px-4 py-2 rounded-lg inline-block transition-colors duration-300 hover:bg-teal-600 hover:text-gray-200"
            >
              View In Map
            </a>
          </div>

          <div className="w-full max-w-lg p-4">
            <img
              src={secondDestination.imageUrl}
              alt={secondDestination.title}
              className="w-[550px] h-[300px] rounded-lg object-cover"
            />
          </div>

          <button
            className="text-2xl px-4 py-2 bg-gray-200 rounded-full ml-4"
            onClick={nextSlide}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
