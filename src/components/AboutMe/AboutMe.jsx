import PatternImg from "../../assets/images/ressources/patternImg.jpg";
import PatternImg2 from "../../assets/images/ressources/patternImg2.jpg";
import AboutUsBg from "../../assets/images/ressources/secBg.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";
import AboutImg from "../../assets/images/ressources/IMG_3062.jpg";
import { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true});
  const mainControls = useAnimation();
  useEffect(()=>{
    console.log(isInView)
    if(isInView){
      mainControls.start("visible")
    }
  },[isInView]);
  return (
    <section id="apropos" className="aboutUsWrap py-[4.5rem] md:py-[5.5rem] lg:py-[2rem] xl:py-[2rem] relative w-full">
      <div
        className="fixedBg bg-left-top bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${PatternImg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <SectionTitle
          title="A propos de"
          titleInner="Moi"
          desc=""
        ></SectionTitle>
        <div ref={ref} className="aboutUs relative w-full p-[1.25rem] lg:p-[1.875rem] mt-[5.9375rem]">
          <div
            className="aboutUsBg before:absolute before:inset-0 before:bg-gray before:rounded-[7px] before:sm:rounded-[7px] before:md:rounded-[7px] before:opacity-70 before:z-[1] bg-gray bg-blend-multiply absolute rounded-[7px] sm:rounded-[7px] md:rounded-[7px] inset-0 left-0 lg:left-[10.9375rem] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${AboutUsBg})` }}
          ></div>
          <div className="grid gap-[1.875rem] lg:grid-cols-2 grid-cols-1">
            <motion.div
              variants={{
                hidden:{x:-150, zIndex:2},
                visible:{x:[-150,5,-5, 0]}
              }}
              initial="hidden"
              animate={mainControls}
              transition={{duration:0.55, delay:0.25}}
            >
              <div className="aboutImg relative mt-[-5.625rem] ml-0 lg:ml-[-1.875rem]">
                <img
                  className="rounded-[7px] sm:rounded-[7px] md:rounded-[7px] relative z-[1] w-full"
                  src={AboutImg}
                  alt=""
                ></img>
                {/* About Image */}
              </div>
            </motion.div>
            <div>
              <div className="aboutCapWrap w-full">
                <motion.div className="aboutCap relative rounded-[10px] sm:rounded-[7px] md:rounded-[7px] overflow-hidden z-[1] lg:py-12 xl:pt-[4.6875rem] xl:pb-[4.375rem] p-5 md:p-10 lg:px-[3.5rem] xl:px-20"
                variants={{
                  hidden:{x:150, zIndex:2},
                  visible:{x:[150,-5,5,0]}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.55, delay:0.25}}
                >
                  <div
                    className="aboutCapBg bg-white opacity-90 opc8 absolute rounded-in sm:rounded-[7px] md:rounded-[7px] inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
                    style={{ backgroundImage: `url(${PatternImg2})` }}
                  ></div>
                  <h3 className="text-accent2 font-light text-[1.5rem] md:text-[1.875rem] leading-tight font-Poppins">
                    
                  </h3>
                  <h4 className="text-accent2 font-light text-[1.325rem] md:text-[1.5rem] leading-normal font-Poppins">
                    Je m'appelle{" "}
                    <span className="text-accent font-bold text-[1.5rem] md:text-[1.875rem]">
                      Adrien Robinson
                    </span>
                  </h4>
                  <ul className="grid grid-cols-1 gap-5 mt-6">
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Age:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        24
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Tel:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        <span
                          className="text-desc2 font-semibold font-NunitoSans "
                          
                        >
                          +261 34 02 215 44
                        </span>
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Email:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        <a
                          className="text-desc2 font-semibold font-NunitoSans hover:text-accent"
                          href="mailto:adrientafitasoa@gmail.com"
                          title=""
                        >
                          adrientafitasoa@gmail.com
                        </a>
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Adresse:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        Lot III R Tsarafaritra Tsimbazaza
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Langage Prefere:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2  flex items-center">
                        JavaScript
                      </span>
                    </li>
                  </ul>
                </motion.div>
                {/* About Cap Wrap */}
              </div>
            </div>
          </div>
          {/* About Us */}
        </div>
      </div>
      {/* About Us Wrap */}
    </section>
  );
};

export default AboutMe;
