import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './home';
import About from './components/aboutus';
import Contact from './components/contactus';
import Main from './homeMain';
import End from './components/end';
import Wishlist from './components/wishlist';
import Menint from './components/Menint';
import Womenint from './components/Womenint';

function App() {
  return (
    <div>

        <Router>
           <Routes>
            
            <Route path="/" element={<Home />}/>
              <Route path='homeMain' element={<Main/>}/>
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="outcome" element={<End/>}/>
              <Route path="Wishlist" element={<Wishlist/>}/>
              <Route path="/mendata" element={<Menint/>}/>
              <Route path="/womendata" element={<Womenint/>}/>
            <Route path="*" element={<About />} />
            
          </Routes>
       </Router>
    
    </div>
  
  );
}

export default App;
