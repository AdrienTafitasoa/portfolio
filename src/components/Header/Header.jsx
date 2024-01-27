import React, { useLayoutEffect, useRef } from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import MenuLinks from "./MenuLinks";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  const refHeader = useRef();

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    let fixedTop = refHeader.current.offsetTop;
    const stickyHeader = () => {
      if (window.pageYOffset > fixedTop) {
        header.classList.add("stickyHeader");
      } else {
        header.classList.remove("stickyHeader");
      }
    };
    window.addEventListener("scroll", stickyHeader);
  }, []);

  return (
    <React.Fragment>
      <header className="z-[9999] hidden lg:block" ref={refHeader} id="header">
        <div className="topbar fixed md:top-[1.875rem] lg:top-[4rem] xl:top-[5rem] top-[1.25rem] left-0 w-full z-[9999]">
          <div className="container mx-auto sm:container md:container lg:container xl:container 2xl:container">
            <div className="flex items-center justify-between w-full topbarInner">
              <div className="logo inline-block max-w-[50%]">
              </div>
              <div className="hidden menuWrapper">
                <MenuLinks/>
              </div>
            </div>
            {/* Topbar Inner */}
          </div>
          {/* Topbar */}
        </div>
        <div className="menuWrap hidden lg:flex flex-col items-center justify-between fixed left-[3.4375rem] top-[5.625rem] bottom-[5.625rem] border-2 border-solid border-accent rounded-full z-[9999] w-[6.25rem] px-5 py-[3.125rem]">
          <div className="flex flex-col items-center justify-center gap-8 menuInner">
            <SocialLinks/>
            <span className="h-[2.5rem] sm:h-[3rem] md:h-[5.625rem] bg-accent w-[1px]"></span>
            <h5
              className="uppercase text-white font-Poppins font-bold text-[1rem]"
              style={{
                textOrientation: "mixed",
                writingMode: "vertical-rl",
                transform: "matrix(-1, 0, 0, -1, 0, 0)",
              }}
            >
              Trouver moi
            </h5>
          </div>
          {/* Menu Wrap */}
        </div>
        {/* Header */}
      </header>
      <ResponsiveHeader/>
    </React.Fragment>
  );
};

export default Header;
