import Review from "./review";

const guideReviews = () => {
  return (
    <>
      <div className="w-[825px] h-[581px]">
        <div className="h-[27px] text-[#000] font-montserrat text-[16px] font-bold mb-[10px]">
          Reviews
        </div>
        <Review />
        <Review />
        <Review />
        <Review />
        <div className="h-[40px] flex justify-center items-center">
          <button className="w-[150px] h-[40px] rounded-[3px] border border-[rgba(27,27,27,0.90)] text-[rgba(27,27,27,0.90)] font-montserrat text-[12px] font-bold">
            Load more review
          </button>
        </div>
      </div>
    </>
  );
};

export default guideReviews;
