const SectionTitle = ({title,titleInner, desc}) => {
    return (
      <div className="secTitleWrap flex justify-center text-center w-full mb-[2.1875rem]">
        <div className="secTitle max-w-[100%] md:max-w-[90%] lg:max-w-[55%]">
          <h2 className="text-accent2 text-[1.875rem] md:text-[3.125rem] font-Poppins font-bold relative">
            <i className="h-[3.5rem] w-[3.5rem] md:h-[5.625rem] md:w-[5.625rem] rounded-[10px] md:rounded-[1.25rem] absolute ml-[-1.75rem] md:ml-[-2.8125rem] left-1/2 bg-shapBg z-[-1] top-[-12%] md:top-[-15%]"></i>
            {title} <span className="text-accent text-[1.875rem] md:text-[3.125rem] font-Poppins font-bold relative">
              {titleInner}
            </span>
          </h2>
          <p className="text-white text-[1rem] md:text-[1.25rem] sm:text-[1.225rem] mt-1">
            {desc}
          </p>
          {/* Section Title */}
        </div>
        {/* Section Title Wrap */}
      </div>
    );
  };
  
  export default SectionTitle;
  