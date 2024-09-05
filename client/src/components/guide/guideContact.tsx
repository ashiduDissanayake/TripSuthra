import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import Search from "@/assets/search.svg";

const guideContact = () => {
  return (
    <div className="w-[657px] h-[559px] flex-row items-center justify-center">
      <div className="h-[37px] rounded-[5px] flex justify-between">
        <div className="w-[397px] h-[37px] flex">
          <input
            className="w-[373px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#1b1b1b99]"
            placeholder="Search for Guide"
            type="text"
          />
          <div className="w-[24px] h-[37px] flex items-center">
            <img
              className="w-[24px] h-[24px] hover:cursor-pointer"
              alt="Icon action search"
              src={Search}
            />
          </div>
        </div>
        <div className="w-[190px] h-[37px] flex items-center">
          <Button color="success" className="h-[41px] w-[190px]">
            <input
              className="p-[15px_40px] text-[#FFF] font-montserrat text-[14px] font-bold"
              type="submit"
              value="Register as a Guide"
            />
          </Button>
        </div>
      </div>
      <div className="h-[81px] flex-row mb-[20px]">
        <p className="h-[24px] text-center text-[rgba(37,43,66,1)] font-montserrat text-[16px] font-bold">
          Contact Us
        </p>
        <p className="h-[57px] text-center text-[rgba(37,43,66,1)] font-montserrat text-[40px] font-bold">
          Make an Appointment
        </p>
      </div>
      <div className="w-[657px] h-[378px] flex justify-center">
        <form className="w-[537px]" action="" method="">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-[20px] mb-[10px]">
            <Input type="text" label="Full Name*" />
            <Input type="email" label="Email*" />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-[20px] mb-[10px]">
            <Select label="Please Select" className="max-w-xs"></Select>
            <Select label="4:00 Available" className="max-w-xs"></Select>
          </div>
          <textarea
            className="w-[537px] h-[140px] rounded-[15px] bg-[#F4F4F6] mb-[10px]"
            placeholder="Message"
          ></textarea>
          <div className="w-[537px] flex justify-center">
            <Button color="success">
              <input
                className="w-[218px] h-[58px] p-[15px_40px] text-[#FFF] font-montserrat text-[14px] font-bold"
                type="submit"
                value="Book Appointment"
              />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default guideContact;
