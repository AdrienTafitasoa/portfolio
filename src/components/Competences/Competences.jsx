import { skills } from "../../data/skills";
import SectionTitleIcon from "./SectionTitleIcon";
import PatternImg from "../../assets/images/ressources/patternImg.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { scrollBar } from "../Header/scroll";

const Competences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    // console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
      scrollBar("competences")
    }
  }, [isInView]);
  return (
    <section id="competences" ref={ref} className="servicesWrap py-[4.5rem] md:pt-[5.5rem] lg:py-[2rem] xl:py-[2rem] pb-[4.5rem] md:pb-[5.5rem] lg:pb-[6.25rem] relative w-full">
      <div
        className="fixedBg bg-left-top bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${PatternImg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:max-w-[75rem] mx-auto">
        <div className="skillsWrap relative w-full">
          <SectionTitle
            title="Mes"
            titleInner="Compétences"
            desc=""
          ></SectionTitle>
          {/* <SectionTitleIcon title="Skills"></SectionTitleIcon> */}
          <div ref={ref} className="skillsList grid grid-cols-1 sm:grid-cols-2 relative w-full">
            {skills.map((item, index) => (
              <div className={item.skillBox} key={index}>
                <motion.span
                  className="bg-white rounded-[10px] h-[4.375rem] w-[4.375rem] inline-flex items-center justify-center"
                  whileHover={{ scale: 1.3 }}
                >
                  {item.skillIcon}
                </motion.span>
                <div className="skillInfo flex items-center justify-between w-full mt-[1.375rem]">
                  <h3 className="text-accent2 text-[1.375rem] font-Poppins font-bold">
                    {item.skillTitle}
                  </h3>
                  <span className="bg-[#d4e4f0] text-accent rounded-[10px] font-Poppins font-semibold text-[.9375rem] py-[3.75px] px-3">
                    {item.skillPercent}
                  </span>
                </div>
                <div className="w-full bg-[#d4e4f0] h-[7px] mt-4 rounded-[2px]">
                  <motion.div
                    variants={{
                        hidden:{width:0},
                        visible:{width: item.skillPercent}
                      }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ delay: 0.25, duration: 0.75 }}
                    className="bg-accent h-[7px] rounded-[2px]"
                    style={{ width: `${item.skillPercent}` }}
                  ></motion.div>
                </div>
                {/* Skill Box */}
              </div>
            ))}
            {/* Skills List */}
          </div>
          {/* Skills Wrap */}
        </div>
      </div>
    </section>
  );
};

export default Competences;
