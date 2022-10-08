
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componets/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Homeblog from './Componets/Pages/Homeblog/Homeblog';

import Footer from './Componets/Footer/Footer';
import TechBlog from './Componets/Pages/Tech/TechBlog';

function App() {
  return (


    <div className="App">
      <Navbar />
      <Router>

        <Routes>

          <Route path="/" element={<Homeblog />} />
          <Route path="/Tech" element={<TechBlog/>} />
          {/* <Route path="/" element={<Navigate replace to="/" />} />*/}
        </Routes>
      </Router>
      <Footer />
    </div>



  );
}

export default App;
