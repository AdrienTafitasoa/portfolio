import ContactForm from "./ContactForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { useEffect, useRef } from "react";
import { useInView} from "framer-motion";

const Contact = ()=>{
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(()=>{
    if(isInView){
    }
  },[isInView]);
    return(
        <section id="contact" ref={ref} className="contactUsWrap portfolio_section py-[4.5rem] md:py-[5.5rem] lg:py-[2rem] xl:py-[2rem] relative w-full">
      <div
        className="fixedBg bg-center bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-90 before:bg-[#60A5FA] bgGrident1 bg-blend-hard-light overflow-hidden"
      ></div>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <SectionTitle
          title="Contacter"
          titleInner="Moi"
          desc="Votre adresse email n'est jamais publiée. Tous les champs sont obligatoires *"
        ></SectionTitle>
        <div className="contactUs grid gap-[1.875rem] lg:grid-cols-2 md:grid-cols-1 grid-cols-1 relative w-full">
          <div>
            <ContactForm></ContactForm>
          </div>
          <div className="flex flex-col gap-[1.875rem] md:gap-[2.5rem] lg:gap-[3.4375rem]">
            <ContactInfo></ContactInfo>
            <ContactSocial></ContactSocial>
          </div>
          {/* Contact Us */}
        </div>
      </div>
      {/* Contact Us Wrap */}
    </section>
    );
}

export default Contact;