
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componets/Navbar/Navbar';

import {
  
  BrowserRouter as Router,
  Routes,
  Route,
 
  
} from 'react-router-dom';
import Homeblog from './Componets/Pages/Homeblog/Homeblog';

import Footer from './Componets/Footer/Footer';
import TechBlog from './Componets/Pages/Tech/TechBlog';
import Moneyblog from './Componets/Pages/Money/Moneyblog';
import Mobile from './Componets/Pages/Tech/Subcategary/Mobile';

function App() {
  return (


    <div className="App">
      <Navbar />
      <Router>

        <Routes>

          <Route path="/" element={<Homeblog />} />
          <Route path="/Tech" element={<TechBlog/>} />
          <Route path='/money' element={<Moneyblog/>}/>
          <Route path='/mobile' element={<Mobile/>}/>
         
          {/* <Route path="/" element={<Navigate replace to="/" />} />*/}
        </Routes>
      </Router>
      <Footer />
    </div>



  );
}

export default App;
