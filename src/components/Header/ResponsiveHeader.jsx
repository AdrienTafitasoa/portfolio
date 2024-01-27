import { useState, useRef, useLayoutEffect } from "react";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { headerLink } from "../../data/headerLink";
import ResponsiveMenuLinks from "./ResponsiveMenuLinks";

const ResponsiveHeader = () => {
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const showResponsiveSideMenu = () => setResponsiveMenu(!responsiveMenu);
  const refHeader = useRef();

  useLayoutEffect(() => {
    const header = document.getElementById("headerResponsive");
    let fixedTop = refHeader.current.offsetTop+50;
    const stickyHeader = () => {
      if (window.pageYOffset > fixedTop) {
        header.classList.add("stickyHeader");
        header.classList.remove("hidden");
    } else {
        header.classList.add("hidden");
        header.classList.remove("stickyHeader");
      }
    };
    window.addEventListener("scroll", stickyHeader);
  }, []);
  
  return (
    <div className="z-[9999] hidden lg:hidden w-full py-4 transition ease-in-out duration-300" ref={refHeader} id="headerResponsive">
      <div className="topbar fixed w-full z-[9999]">
        <div className="container mx-auto sm:container md:container lg:container xl:container 2xl:container">
          <div className="flex items-center justify-between w-full topbarInner ">
            <div className="logo inline-block max-w-[50%] text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase text-white">
              <a href="#adrienRobinson" title="Adrien Robinson">
                Adrien Robinson
              </a>
              {/* Logo */}
            </div>
            <span
              className="flex items-center justify-center w-10 h-10 bg-accent rounded cursor-pointer resMenuBtn hover:bg-accent2 text-white"
              onClick={showResponsiveSideMenu}
            >
              <FiMenu size="20"></FiMenu>
            </span>
          </div>
          {/* Topbar Inner */}
        </div>
        {/* Topbar */}
      </div>
      <div
        className="backdrop-blur-md fixed transition-all ease-in-out duration-300 top-0 left-0 h-screen w-screen z-[9999]"
        style={{
          opacity: responsiveMenu ? "1" : "0",
          visibility: responsiveMenu ? "visible" : "hidden",
        }}
        onClick={showResponsiveSideMenu}
      ></div>
      <div
        className="sideMenu bg-[#070815]/90 backdrop-blur-sm fixed transition-all ease-in-out duration-300 z-[9999] top-0 h-screen w-64 px-8 py-16"
        style={{ right: responsiveMenu ? "0" : "-100%" }}
      >
        <span
          className="mirror absolute right-4 top-4"
          onClick={showResponsiveSideMenu}
        >
          <CgClose
            className="text-white cursor-pointer hover:text-accent"
            size={20}
          ></CgClose>
        </span>
        <ul
          className="w-full flex flex-col gap-4"
          // responsivemenu={responsiveMenu}
        >
          {headerLink.map((item, index) => {
            return <ResponsiveMenuLinks item={item} key={index} />;
          })}
        </ul>
      </div>
      {/* Responsive Header */}
    </div>
  );
};

export default ResponsiveHeader;
