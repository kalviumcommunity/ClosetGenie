import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './home';
import About from './components/aboutus';
import Contact from './components/contactus';
import Main from './homeMain';
import End from './components/end';
function App() {
  return (
    <div>

        <Router>
           <Routes>
            <Route path='/homeMain' element={<Main/>}/>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/outcome" element={<End/>}/>
          </Routes>
       </Router>
    
    </div>
  
  );
}

export default App;
