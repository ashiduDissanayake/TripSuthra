import React from 'react';

export const Box = (): JSX.Element => {
  return (
    <div className="absolute top-[50px] left-[50px] w-[943px] h-[615px] bg-[#13294b78] rounded-[40px] shadow-[0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040]">
      <div className="absolute w-[923px] h-[170px] top-[20px] left-[20px]">
        <p className="w-[800px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#f4f6ef] text-[64px] tracking-[-1.28px] leading-[85px]">
          DISCOVER THE UNEXPLORED BEAUTY OF SRI LANKA
        </p>
      </div>
      <div className="absolute w-[882px] h-36 top-[300px] left-[20px]">
        <p className="w-[882px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-[32px] leading-[48px]">
          Embark on a journey with us to explore the breathtaking landscapes, rich history, and vibrant culture of this island paradise.
        </p>
      </div>
      <div className="absolute w-[214px] h-[60px] top-[500px] left-[20px]">
        <div className="w-[214px] h-[60px] bg-[#087e8b] rounded-[20px] flex items-center justify-center">
          <p className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-2xl text-center tracking-[0] leading-[normal]">
            Explore more
          </p>
        </div>
      </div>
      
    </div>
  );
};

export const Image = (): JSX.Element => {
  return (
    <div className="relative w-[1729px] h-[881px]">
      <img
        className="w-[1728px] h-[881px] object-cover block"
        alt="Weligama beach best"
        src="new1.jpg" // Adjust path as necessary
      />
    </div>
  );
};

function HeroSlider() {
  return (
    <div className="relative">
      <Image />
      <Box />
    </div>
  );
}

export default HeroSlider;
