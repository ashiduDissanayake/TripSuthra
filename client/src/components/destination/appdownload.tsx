import React from "react";

export const DownloadApp = (): JSX.Element => {
  return (
    
    <div className="relative w-[1648px] h-[835px] bg-[#ffffff] overflow-hidden">
      <div className="absolute w-[743px] h-[835px] top-0 left-0 bg-[url(/rating-bg.svg)] bg-[50%_50%]">
        <div className="inline-flex flex-col items-start gap-10 relative top-[239px] left-40">
          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-2 px-8 py-4 relative flex-[0_0_auto] bg-[#1572d31a] rounded-lg">
              <div className="relative w-fit mt-[-1.00px] font-medium text-primary text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                DOWNLOAD & CONNECT WITH TripSuthra
              </div>
            </div>
            <p className="relative w-[480px] font-semibold text-transparent text-5xl tracking-[0] leading-[57.6px]">
              <span className="text-[#282828]">Download TripSuthra App for </span>
              <span className="text-[#1572d3]">FREE</span>
            </p>
          </div>
          <p className="relative w-fit font-normal text-[#3d3d3d] text-base tracking-[0] leading-6 whitespace-nowrap">
            For faster, easier booking and exclusive deals.
          </p>
          <div className="inline-flex items-start gap-[16.26px] relative flex-[0_0_auto]">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img className="relative w-[174.87px] h-[51.74px]" alt="Google Play Store" src="applestore.png" />
            </a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img className="relative w-[174.87px] h-[51.74px]" alt="Apple App Store" src="applestore.png" />
            </a>
            </div>
        </div>
      </div>
      <p className="absolute top-[-1330px] left-[-881px] font-normal text-[#6d6d6d] text-base tracking-[0] leading-6">
        Find a lower price? We’ll refund you 100% <br /> of the difference.
      </p>
      <div className="absolute w-[520px] h-[1054px] top-[72px] left-[960px]">
        <div className="relative h-[832px]">
          <img className="absolute w-[520px] h-[763px] top-0 left-0 object-cover" alt="Shadow" src="iphone.png" />
          <img className="absolute w-[520px] h-[763px] top-0 left-0 object-cover" alt="Main" src="iphone.png" />
          <img className="absolute w-[469px] h-[742px] top-[21px] left-[26px] object-cover" alt="Iphone pro space" src="iphone.png" />
          <img className="absolute w-[434px] h-[245px] top-[174px] left-[43px] object-cover" alt="Images" src="destinationcategory img-2.jpeg" />
          <div className="inline-flex h-[413px] items-center absolute top-[419px] left-[43px] bg-[#ffffff] rounded-3xl shadow-drop-shadow-card">
            <div className="inline-flex flex-col items-start justify-center gap-12 p-10 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-medium text-[#383838] text-[64px] tracking-[0] leading-[96px] whitespace-nowrap">
                  <span className="font-medium text-[#383838] text-[64px] tracking-[0] leading-[96px]">4.4</span>
                  <span className="text-2xl leading-9"> stars</span>
                </p>
                <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                  <img className="relative w-[21.1px] h-[20.14px]" alt="Star" src="star.svg" />
                  <img className="relative w-[21.1px] h-[20.14px]" alt="Star" src="star.svg" />
                  <img className="relative w-[21.1px] h-[20.14px]" alt="Star" src="star.svg" />
                  <img className="relative w-[21.1px] h-[20.14px]" alt="Star" src="star.svg" />
                  <img className="relative w-[21.1px] h-[20.14px]" alt="Star" src="star.svg" />
                </div>
              </div>
              <div className="inline-flex flex-col items-start gap-20 relative flex-[0_0_auto]">
                <p className="relative w-[317px] mt-[-1.00px] font-normal text-[#282828] text-lg tracking-[0] leading-[27px]">
                  Kandy, the cultural capital of Sri Lanka, is a historic city nestled in lush hills, renowned for the sacred Temple of the Tooth, vibrant ”
                </p>
                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-medium text-[#252525] text-2xl tracking-[0] leading-9 whitespace-nowrap">
                    Kandy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function App() {
  return (
    <div className="relative">
      <DownloadApp />
    </div>
  );
}

export default App;
