import { conInfo } from "../../data/conInfo";

const ContactInfo = () => {
  return (
    <div className="conInfoList grid gap-[10px] grid-cols-1 relative w-full lg:pl-[6.25rem] md:pl-0 pl-0">
      {conInfo.map(
        (item, index) =>
          index < 3 && (
            <div
              className="conInfoBox border-[1px] border-dashed border-[#fff] flex gap-[1.0625rem] items-center w-full rounded-[10px] md:rounded-[10px] lg:rounded-[10px] lg:px-10 md:px-8 px-5 py-[1.75rem]"
              key={index}
            >
              <span>{item.conIcon}</span>
              <div className="conInfoInner flex flex-col gap-1">
                <h4 className="text-[#232A60] font-Poppins font-bold text-[1.25rem] uppercase">
                  {item.conTitle}
                </h4>
                <p className="text-white text-[1rem] md:text-[1.125rem] font-NunitoSans font-semibold">
                  {item.conCap}
                </p>
              </div>
              {/* Contact Info Box */}
            </div>
          )
      )}
      {/* Contact Info List */}
    </div>
  );
};

export default ContactInfo;
