
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
import TopCategory from './Componets/Pages/Tech/TopCategory';
import SubCategory from './Componets/Pages/Tech/Subcategary/SubCategory';
import DetailedBlog from './Componets/Pages/detailedblog/DetailedBlog';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homeblog />} />
            <Route path="/:catName" element={<TopCategory />} />
            <Route path="/:mainCatName/:subCatName" element={<SubCategory />} />
            <Route path="/blog" element={<DetailedBlog />} />
            {/* <Route path='/money' element={<Moneyblog />} /> */}
            {/* <Route path='/mobile' element={<Mobile />} />
            <Route path='/:mainCat/:subCat' element={<Mobile />} /> */}
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
