import GuideReview01 from "@/assets/guide-review01.jfif";

const review = () => {
  return (
    <div className="h-[94px] w-[821px] flex">
      <div className="w-[34px] mr-[16px] ">
        <img src={GuideReview01} alt="" />
      </div>
      <div className="w-[741px]">
        <div className="w-[67px] h-[21px] text-[#087E8B] font-montserrat text-[16px] font-bold">
          Yang Mi
        </div>
        <div className="h-[15px] text-[rgba(27,27,27,0.4)] font-montserrat text-[10px] font-normal">
          2 weeks ago
        </div>
        <div className="h-[54px] text-[rgba(27,27,27,0.60)] font-montserrat text-[14px] font-normal">
          "Aruna's depth of knowledge about the art and culture of Sri Lanka was
          impressive. He took us on a journey through the country's rich
          history, providing fascinating anecdotes and hidden gems along the
          way. Highly recommend!"
        </div>
      </div>
    </div>
  );
};

export default review;
