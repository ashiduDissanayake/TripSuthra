import React from 'react';

export const Frame = (): JSX.Element => {
  return (
    <div className="relative w-[1600px] h-[2000px] bg-[rgba(255,255,255,1.0)] [background:linear-gradient(180deg,rgb(8,126,139)_0%,rgb(255,255,255)_65%,rgb(8,126,139)_100%)]">
      <p className="absolute w-[762px] top-[145px] left-[448px] [font-family:'Poppins-ExtraBold',Helvetica] font-extrabold text-[#ffffff] text-xl text-center tracking-[0] leading-[30px]">
        Wherever your heart leads, let the journey begin—each destination in Sri Lanka tells a story waiting to be discovered.
      </p>
      <div className="absolute top-16 left-[578px] [font-family:'Poppins-ExtraBold',Helvetica] font-extrabold text-[#ffffff] text-[38px] tracking-[0] leading-[49.4px] whitespace-nowrap">
        DESTINATION CATEGORY
      </div>
      <div className="absolute top-[270px] left-[76px] group w-[600px] h-[400px] rounded-[20px] bg-[url(/destinationcategory-1-bg.jpeg)] bg-cover bg-[50%_50%] transition-opacity duration-300 hover:opacity-70">
        <div className="relative w-[437px] h-[131px] top-40 left-[80px] bg-[#087e8b] rounded-[80px]">
          <div className="absolute w-[388px] h-[54px] top-[39px] left-[25px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-4xl text-center tracking-[0] leading-[normal]">
            Tourist destination
          </div>
        </div>
      </div>
      <div className="absolute top-[270px] left-[850px] group w-[600px] h-[400px] rounded-[20px] bg-[url(/destinationcategory-2-bg.jpeg)] bg-cover bg-[50%_50%] transition-opacity duration-300 hover:opacity-70">
        <div className="top-40 left-[100px] bg-[#13294b] relative w-[437px] h-[131px] rounded-[80px]">
          <div className="absolute w-[388px] h-[54px] top-[39px] left-[25px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-4xl text-center tracking-[0] leading-[normal]">
            Camping
          </div>
        </div>
      </div>
      <div className="absolute top-[859px] left-[76px] group w-[600px] h-[400px] rounded-[20px] bg-[url(/destinationcategory-3-bg.jpeg)] bg-cover bg-[50%_50%] transition-opacity duration-300 hover:opacity-70">
        <div className="top-40 left-[80px] bg-[#087e8b] relative w-[437px] h-[131px] rounded-[80px]">
          <div className="absolute w-[388px] h-[54px] top-[39px] left-[25px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-4xl text-center tracking-[0] leading-[normal]">
            Adventure travel
          </div>
        </div>
      </div>
      <div className="absolute top-[859px] left-[850px] group w-[600px] h-[400px] rounded-[20px] bg-[url(/destinationcategory-4-bg.jpeg)] bg-cover bg-[50%_50%] transition-opacity duration-300 hover:opacity-70">
        <div className="top-40 left-[100px] bg-[#087e8b] relative w-[437px] h-[131px] rounded-[80px]">
          <div className="absolute w-[388px] h-[54px] top-[39px] left-[25px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-4xl text-center tracking-[0] leading-[normal]">
            Pilgrimage sites
          </div>
        </div>
      </div>
      <div className="absolute top-[1448px] left-[76px] group w-[600px] h-[400px] rounded-[20px] bg-[url(/destinationcategory-5-bg.jpeg)] bg-cover bg-[50%_50%] transition-opacity duration-300 hover:opacity-70">
        <div className="top-40 left-[80px] bg-[#13294b] relative w-[437px] h-[131px] rounded-[80px]">
          <div className="absolute w-[388px] h-[54px] top-[39px] left-[25px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-4xl text-center tracking-[0] leading-[normal]">
            Road trips
          </div>
        </div>
      </div>
      <div className="absolute top-[1448px] left-[850px] group w-[600px] h-[400px] rounded-[20px] bg-[url(/destinationcategory-6-bg.jpeg)] bg-cover bg-[50%_50%] transition-opacity duration-300 hover:opacity-70">
        <div className="top-40 left-[100px] bg-[#087e8b] relative w-[437px] h-[131px] rounded-[80px]">
          <div className="absolute w-[388px] h-[54px] top-[39px] left-[25px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#ffffff] text-4xl text-center tracking-[0] leading-[normal]">
            Beach side
          </div>
        </div>
      </div>
    </div>
  );
};

function DestinationCategory() {
  return (
    <div className="relative">
      <Frame />
    </div>
  );
}

export default DestinationCategory;
