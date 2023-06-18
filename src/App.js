import Header from "./components/Header";
import GlobalStyle from "styles";
import About from "components/About/About";
import Skills from "components/Skills/Skills";
import Projects from "components/Projects/Projects";
import Github from "components/Github/Github";
import Likes from "components/Likes/Likes";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";

function App() {
  return ( 
   <>
   <GlobalStyle/>
   <Header/>
   <About/>
   <Skills/>
   <Projects/>
   <Github/>
   <Likes/>
   <Contact/> 
   <Footer/> 
   </>
  );
}

export default App;
