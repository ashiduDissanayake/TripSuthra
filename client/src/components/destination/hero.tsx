import React from 'react';

export const Box = (): JSX.Element => {
  return (
    <div className="absolute top-[50px] left-[50px] w-[800px] h-[450px] bg-[#13294b78] rounded-[40px] shadow-[0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040,0px_4px_4px_#00000040]">
      <div className="absolute w-[923px] h-[170px] top-[40px] left-[20px]">
        <p className="w-[750px] [font-family:'Poppins-Medium',Helvetica] font-bold text-[#f4f6ef] text-[50px] tracking-[-1.28px] leading-[68px]">
          DISCOVER THE UNEXPLORED BEAUTY OF SRI LANKA
        </p>
      </div>
      <div className="absolute w-[882px] h-36 top-[200px] left-[20px]">
        <p className="w-[750px] [font-family:'Poppins-Regular',Helvetica] font-light text-[#ffffff] text-[20px] leading-[28px]">
        Embark on a journey with us to explore the breathtaking landscapes, rich history, and vibrant culture of this island paradise. From the lush, emerald tea plantations of the highlands to the pristine, golden beaches along the coast, Sri Lanka offers a diverse array of experiences.
        </p>
      </div>
      <div className="absolute w-[200px] h-[55px] top-[350px] left-[20px]">
  <div className="w-full h-full bg-[#087e8b] rounded-[20px] flex items-center justify-center">
    <a href="#news" className="w-full h-full flex items-center justify-center">
      <button className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-[20px] text-center tracking-[0] leading-[normal] w-full h-full bg-[#087e8b] hover:bg-[#065d6a] rounded-[20px] transition-colors duration-300 ease-in-out">
        Explore more
      </button>
    </a>
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
