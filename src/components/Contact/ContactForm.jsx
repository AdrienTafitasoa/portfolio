const ContactForm = () => {
    return (
      <div className="contactFormWrap relative w-full">
        <form className="grid gap-[1.875rem] md:grid-cols-2 grid-cols-1">
          <div className="fieldBox w-full col-span-2">
            <label className="text-[1.2rem] text-[#232A60] font-Poppins font-bold px-[10px] md:px-[1.125rem] mb-[10px] block">
              Ecrire un Message
            </label>
            <textarea className="border-2 border-solid border-[#fff] focus:border-[#fff] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[10px] lg:rounded-[10px] w-full h-[8rem] md:h-[13.125rem] p-[1.125rem] text-white"></textarea>
          </div>
          <div className="fieldBox w-full">
            <label className="text-[1.2rem] text-[#232A60] font-Poppins font-bold px-[10px] md:px-[1.125rem] mb-[10px] block">
              Votre Nom
            </label>
            <input
              type="text"
              className="border-2 border-solid border-[#fff] focus:border-[#fff] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[10px] lg:rounded-[10px] w-full h-[2.5rem] md:h-[3.875rem] p-[10px] md:p-[1.125rem] text-white"
            ></input>
          </div>
          <div className="fieldBox w-full">
            <label className="text-[1.2rem] text-[#232A60] font-Poppins font-bold px-[10px] md:px-[1.125rem] mb-[10px] block">
              Votre Email
            </label>
            <input
              type="email"
              className="border-2 border-solid border-[#fff] focus:border-[#fff] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[10px] lg:rounded-[10px] w-full h-[2.5rem] md:h-[3.875rem] p-[10px] md:p-[1.125rem] text-white"
            ></input>
          </div>
          <div className="fieldbtn mt-0 md:mt-[1.875rem] w-full col-span-2">
            <button
              className="bg-white text-accent text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] hover:bg-accent hover:text-white text-center inline-block"
              type="submit"
            >
              Contacter
            </button>
          </div>
        </form>
        {/* Contact Form Wrap */}
      </div>
    );
  };
  
  export default ContactForm;
  