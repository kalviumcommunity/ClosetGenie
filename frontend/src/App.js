import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './home';
import About from './aboutus';
import Contact from './contactus';
import Main from './homeMain';
// import NavBar from './navbar';
// import NavBar from './navbar';
function App() {
  return (
    <div>

        <Router>
           <Routes>
            <Route path='/homeMain' element={<Main/>}/>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
       </Router>
    
    </div>
  
  );
}

export default App;
