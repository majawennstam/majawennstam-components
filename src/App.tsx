import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import About from './pagess/About';
import Home from "./pagess/Home";
import Contact from "./pagess/Contact";



const App = ()=> {
  return (
    <>
       <BrowserRouter>
       
       <nav>
          <ul style={{display:'flex',gap:'20px'}}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <Breadcrumbs />
      <Routes>
      <Route path="/"element={<Home />}></Route>
       <Route path="/about"element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      
    </BrowserRouter> 
   
    </>
  );
  
}


export default App;
