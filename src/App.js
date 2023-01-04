
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
import Error from './Componets/Pages/error/Error';
import favicon from "./assets/images/favicon.png";

function App() {

  function setFavicons(favImg) {
    let headTitle = document.querySelector('head');

    let favIcons = [
      { rel: 'icon' },
      { rel: 'apple-touch-icon' },
      { rel: 'apple-touch-startup-image' },
      { rel: 'shortcut icon' }
    ]

    favIcons.forEach(function (favIcon) {
      let setFavicon = document.createElement('link');
      setFavicon.setAttribute('rel', favIcon.rel);
      setFavicon.setAttribute('href', favImg);
      headTitle.appendChild(setFavicon);
    });
  }
  setFavicons(favicon);

  return (
    <>
      <div className="App" style={{ width: "100%" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homeblog />} />
            <Route path="/:catName" element={<TopCategory />} />
            <Route path="/:mainCatName/:subCatName" element={<SubCategory />} />
            <Route path="/blog" element={<DetailedBlog />} />
            <Route path="/error" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
