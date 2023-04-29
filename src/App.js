import Header from "./components/Header";
import GlobalStyle from "styles";
import About from "components/About/About";
import Skills from "components/Skills/Skills";
import Projects from "components/Projects/Projects";
import Github from "components/Github/Github";
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
   <Projects/>
   <Github/>
   <Contact/> 
   <Footer/> 
   </>
  );
}

export default App;
