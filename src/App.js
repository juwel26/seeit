// import logo from './logo.svg';
import { Navigate, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import '../src/index.css';
import Navbar from "./pages/Navbar";
import Fotter from "./pages/Fotter";
import About from "./pages/About";
import Blog from "./pages/Blog";




function App() {
  return (

    <> 
    <div className=' max-w-screen-md mx-auto pt-20'> 
       < Navbar />
       <Routes>
        
         <Route path="/" element={ <Navigate to='/Home/ '/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />

      </Routes>
      
       </div>
       <div>
         <Fotter />
       </div>
       
    </>
       
      
  
     
   
  

  
  );
}

export default App;
