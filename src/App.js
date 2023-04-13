import Header from "./components/Header";
import GlobalStyle from "styles";
import About from "components/About/About";
import Github from"components/Github/Github";
import Contact from "components/Contact/Contact";

function App() {
  return ( 
   <>
   <GlobalStyle/>
   <Header/>
   <About/>
   <Github/>
   <Contact/> 
   
   </>
  );
}

export default App;
