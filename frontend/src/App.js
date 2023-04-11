import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './home';
import About from './components/aboutus';
import Contact from './components/contactus';
import Main from './homeMain';
import End from './components/end';
import TopBar from './components/TopBar';
import Wishlist from './components/wishlist';
// import Wishlist from './components/wishlist';

function App() {
  return (
    <div>

        <Router>
           <Routes>
            
            <Route path="/" element={<Home />}/>
            {/* <Route  element={<TopBar/>}> */}
              <Route path='homeMain' element={<Main/>}/>
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="outcome" element={<End/>}/>
              <Route path="Wishlist" element={<Wishlist/>}/>
              

            {/* </Route> */}
            <Route path="*" element={<About />} />
            
          </Routes>
       </Router>
    
    </div>
  
  );
}

export default App;
