import { useEffect } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";
import FeaturedArea from "../../components/FeaturedArea/FeaturedArea";
import Header from "../../components/Header/Header";
import Educations from "../../components/Educations/Educations";
import RealityProjects from "../../components/RealityProjects/RealityProjects";
import { scrollNav } from "../../components/Header/scroll";

const Portfolio = ()=>{
    useEffect(()=>{
        window.addEventListener("scroll", scrollNav);
    },[]);
    return(
        <>
            <Header/>
            <FeaturedArea/>
            <AboutMe/>
            <Educations/>
            <Skills/>
            <RealityProjects/>
            <Contact/>
        </>
    );
}

export default Portfolio;