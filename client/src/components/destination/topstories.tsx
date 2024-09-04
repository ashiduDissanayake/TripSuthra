import React from "react";

export const Box = (): JSX.Element => {
  return (
    <div className="relative w-[1611px] h-[889px]">
      <div className="w-[1613px] h-[889px] top-0 left-0">
        <div className="absolute w-[362px] top-0 left-[21px] font-[Montaga-Regular, Helvetica] font-normal text-black text-[64px] tracking-[-0.01em] leading-normal">
          Top stories
        </div>
        <div className="absolute w-[831px] h-[724px] top-[165px] left-0 opacity-90 bg-[url('/download-6-1.png')] bg-cover bg-center">
          <p className="absolute w-[508px] top-[546px] left-[55px] font-[Montagu_Slab-Bold, Helvetica] font-bold text-[#ffffff] text-5xl tracking-[-0.01em] leading-normal">
            <span className="font-[Montagu_Slab-Bold, Helvetica] font-bold text-[#ffffff] text-5xl tracking-[-0.01em]">
              Lotus Tower
              <br />
            </span>
            <span className="text-[40px]">Colombo</span>
          </p>
        </div>
        <div className="absolute w-[726px] h-[211px] top-[165px] left-[885px] bg-[#ffffff] opacity-90">
          <img
            className="absolute w-[249px] h-[211px] top-0 left-0 object-cover"
            alt="Sigiriya"
            src="destinationcategory-5-bg.jpeg"
          />
          <p className="absolute w-[453px] top-[29px] left-[273px] font-[Montaga-Regular, Helvetica] font-normal text-black text-[40px] tracking-[-0.01em] leading-normal">
            <span className="font-[Montaga-Regular, Helvetica] font-normal text-black text-[40px] tracking-[-0.01em]">
              Sigiriya
              <br />
            </span>
            <span className="text-[32px]">Historical place</span>
            <br />
            <br />
            <span className="text-[25px]">Mar 22, 2024. 7 min read</span>
          </p>
        </div>
        <div className="absolute w-[726px] h-[211px] top-[408px] left-[885px] bg-[#ffffff] opacity-90">
          <img
            className="absolute w-[249px] h-[197px] top-0 left-0 object-cover"
            alt="Koggala"
            src="destinationcategory-5-bg.jpeg"
          />
          <p className="absolute w-[453px] -top-px left-[273px] font-[Montaga-Regular, Helvetica] font-normal text-black text-4xl tracking-[-0.01em] leading-normal">
            <span className="font-[Montaga-Regular, Helvetica] font-normal text-black text-4xl tracking-[-0.01em]">
              Koggala
              <br />
            </span>
            <span className="text-[32px]">Ritipanna fishing</span>
            <br />
            <br />
            <span className="text-[28px]">Mar 22, 2024. 5 min read</span>
          </p>
        </div>
        <div className="absolute w-[726px] h-[211px] top-[653px] left-[885px] bg-[#ffffff] opacity-90">
          <img
            className="absolute w-[259px] h-[211px] top-0 left-0 object-cover"
            alt="Port City"
            src="destinationcategory-5-bg.jpeg"
          />
          <p className="absolute w-[453px] top-5 left-[273px] font-[Montaga-Regular, Helvetica] font-normal text-black text-4xl tracking-[-0.01em] leading-normal">
            <span className="font-[Montaga-Regular, Helvetica] font-normal text-black text-4xl tracking-[-0.01em]">
              Port City
              <br />
            </span>
            <span className="text-[32px]">Commercial city</span>
            <br />
            <br />
            <span className="text-[28px]">Mar 22, 2024. 3 min read</span>
          </p>
        </div>
      </div>
    </div>
  );
};


function TopStories() {
  return (
    <div className="relative">
      <Box />
    </div>
  );
}

export default TopStories;
