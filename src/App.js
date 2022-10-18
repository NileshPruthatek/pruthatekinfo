
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
    <>
      <Navbar />
      <div className="App" style={{ maxWidth: "80%", margin: "0 auto" }}>
        <Router>

          <Routes>

            <Route path="/" element={<Homeblog />} />
            <Route path="/Tech" element={<TechBlog />} />
            <Route path='/money' element={<Moneyblog />} />
            <Route path='/mobile' element={<Mobile />} />

            {/* <Route path="/" element={<Navigate replace to="/" />} />*/}
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
