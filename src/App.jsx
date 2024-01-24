import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import RealityProjects from './components/RealityProjects/RealityProjects';
import FeaturedArea from './components/FeaturedArea/FeaturedArea';
import Header from './components/Header/Header';
import Parcours from './components/Parcours/Parcours';
import Competences from './components/Competences/Competences';

function App() {

  return (
    <>
      <Header/>
      <FeaturedArea/>
      <AboutMe/>
      <Parcours/>
      <Competences/>
      <RealityProjects/>
    </>
  )
}

export default App;
