import AboutMe from "../../components/AboutMe/AboutMe";
import Competences from "../../components/Competences/Competences";
import Contact from "../../components/Contact/Contact";
import FeaturedArea from "../../components/FeaturedArea/FeaturedArea";
import Header from "../../components/Header/Header";
import Parcours from "../../components/Parcours/Parcours";
import RealityProjects from "../../components/RealityProjects/RealityProjects";

const Portfolio = ()=>{
    return(
        <>
            <Header/>
            <FeaturedArea/>
            <AboutMe/>
            <Parcours/>
            <Competences/>
            <RealityProjects/>
            <Contact/>
        </>
    );
}

export default Portfolio;