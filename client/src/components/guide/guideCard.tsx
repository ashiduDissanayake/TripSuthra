import Guide01 from "@/assets/guide01.png";
import Star from "@/assets/rating-star.svg";

export default function GuideCard() {
  return (
    <>
      <div className="w-[777px] h-[378px] flex justify-center items-center rounded-[20px] bg-[#F4F6EF]">
        <div className="flex-row items-center justify-center w-457 h-308">
          <div className="mb-[17.53px] w-[456px] h-[47.984px] text-[#000] font-montserrat text-[32px] font-bold leading-[42px]">
            Aruna Fernando
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[137px] h-[27.794px] flex-shrink-0 text-[rgba(27,27,27,0.9)] font-montserrat text-[16px] font-normal leading-[24px]">
              Local Guide
            </div>
            <div className="w-[191px] flex items-center">
              <img src={Star} className="w-29.984" />
              <div className="w-[35px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-black">
                4.8
              </div>
              <div className="w-[130px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#1b1b1b99] text-sm">
                (1,812 ratings)
              </div>
            </div>
          </div>
          <div className="w-[449px]">
            <p>
              -{">"}Member since 2013
              <br />-{">"}Based on Galle, Colombo and Kandy
              <br />-{">"}Proficient Languages : English, Chinese, German
              <br />-{">"}Licensed tour guide accredited by the National Tourism
              Board
              <br />-{">"}Specializes in leading cultural and historical tours
              <br />-{">"}Daily rate - USD 100
            </p>
          </div>
        </div>
        <div className="w-[242px] h-[264px]">
          <img src={Guide01} alt="" />
        </div>
      </div>
    </>
  );
}
