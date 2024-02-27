import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projectsRealty } from "../../data/projects";
import SectionTitle from "../SectionTitle/SectionTitle"
import RightDownIcon from "../../lib/icons/RightDown.svg";

const filterList = [
  {
    filterItem: "Tous",
  },
  {
    filterItem: "Desktop",
  },
  {
    filterItem: "Web",
  },
];

const RealityProjects = () => {
  const [item, setItem] = useState({ filterItem: "tous" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const ref  = useRef(null);
  const isInView = useInView(ref);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClickProject = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    // get projects based on item
    if (item.filterItem === "tous") {
      setProjects(projectsRealty);
    } else {
      const newProjects = projectsRealty.filter((project) => {
        return project.portcate.toLowerCase() === item.filterItem;
      });
      setProjects(newProjects);
    }
  }, [item, isInView]);

  const handleClick = (e, index) => {
    setItem({ filterItem: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <section id="projects" ref={ref} className="pageWrap portfolio_section pt-20 pb-[6.875rem] relative w-full">
      <div className="container sm:container md:container lg:container xl:max-w-[73.125rem] mx-auto">
      <SectionTitle
          title="Mes Projets"
          titleInner=" Réalisés"
          desc=""
        ></SectionTitle>
        <div className="pageInner grid gap-10 md:gap-20 grid-cols-1 w-full">
          <ul className="filterList flex flex-wrap justify-center items-center gap-3">
            {filterList.map(
              (item, index) =>
                (
                  <li
                    key={index}
                    className={`${
                      active === index ? "active" : ""
                    } group flex items-center justify-center font-Poppins font-semibold text-[1rem] md:text-[1.25rem] text-accent2 py-[12px] px-[1.375rem] gap-2 relative hover:bg-accent hover:text-white rounded-[5px] md:rounded-[10px] cursor-pointer transition-all ease-linear`}
                    onClick={(e) => {
                      handleClick(e, index);
                    }}
                  >
                    {item.filterItem}
                  </li>
                )
            )}
          </ul>
          <motion.div
            layout
            className="portList flex flex-wrap relative mx-[-.9375rem] mb-[-1.875rem]"
          >
            {projects.map(
              (item, index) =>(
                  <div
                    className={item.portBox}
                    key={index}
                    portcate={item.portcate}
                  >
                    <motion.div
                      layout
                      className="portBox group mb-[1.875rem] before:transition-all before:ease-in-out before:duration-500 before:bg-[#60A5FA] before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[10px] md:rounded-[10px] before:z-[1] text-center w-full"
                    >
                      <img
                        className="w-full"
                        src={item.portImg}
                        alt={item.portTitle}
                      ></img>
                      <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                        <h3 className="text-white text-[1.375rem] md:text-[1.625rem] font-Poppins font-bold">
                          <span>
                          {item.portTitle}
                          </span>
                        </h3>
                        <p className="text-white font-NunitoSans text-[1rem] md:text-[1.125rem] mt-1">
                          {item.portSubTitle}
                        </p>
                        <span
                            className="inline-flex items-center justify-center border-[2px] sm:border-[5px] border-[rgba(255,255,255,.25)] hover:border-white rounded-[10px] h-[2.5rem] w-[2.5rem] sm:h-[3.5625rem] sm:w-[3.5625rem] mt-5"
                            onClick={()=>handleClickProject(item)}
                          >
                            <img className="h-2.5 w-2.5 sm:h-4 sm:w-4 fill-white" src={RightDownIcon}/>
                          </span>
                      </div>
                    </motion.div>
                    {/* Portfolio Box */}
                  </div>
                )
            )}
            {/* Portfolio List */}
          </motion.div>
          {/* Page Inner */}
        </div>
      </div>
      {/* Modal pour afficher les détails du projet sélectionné */}
      {selectedProject && (
        <div
        className="justify-center items-center flex overflow-x-hidden bg-[#070815]/90 backdrop-blur-sm transition-all ease-in-out duration-300 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 w-full rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold text-accent">
              {selectedProject.portTitle}
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 font-Poppins text-lg leading-relaxed">
                {selectedProject.description}
              </p>
              <p className="my-4 font-Poppins text-lg leading-relaxed italic">
                {selectedProject.portSubTitle}
              </p>
              <p className="my-4 font-Poppins text-lg text-[#60A5FA] underline leading-relaxed">
                <a href={selectedProject.codeSource} target="_blank">
                  Code Source
                </a>
              </p>
            </div>
            
            {/*footer*/}
            <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
              
              <button
                className="bg-white text-accent text-[1rem] font-Poppins font-bold uppercase rounded-[3px] md:rounded-[3px] md:px-[5px] lg:px-[10px] xl:px-[10px] px-[5px] md:py-[5px] py-[14px] hover:bg-accent hover:text-white text-center inline-block"
                type="button"
                onClick={closeModal}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
      {/* Page Wrap */}
    </section>
  );
};

export default RealityProjects;
