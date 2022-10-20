import React, { useEffect, useState } from "react";
import style from "../Navbar/Navbar.module.css";
import Logo from "../logoimage/NEW LOGO-03.png";
import Submenu from "./Submenu";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_IMG_BASEURL}/api/allCategories?parent=null`).then((res) => {
      setCategoryData(res.data.info)
      setLoading(false)
    }).catch((err) => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      {!loading &&
        <nav className=" navbar  navbar-expand-lg navbar-light mx-auto" style={{ maxWidth: "90% " }}>
          <Link to="/"><img src={Logo} alt="logo" className={style.logoimage} /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {categoryData?.map(({ name, uuid }) => {
                return (
                  <li className={style.navitem}>
                    <Link className="nav-link active" style={{ cursor: "pointer" }} to={`${name}?x=${uuid}`}>{name}</Link>
                  </li>
                )
              })}

              <li className={style.navitem}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className={`dropdown-menu w-100 z-index-n1  position-absolute   ${style.dropdwonbutton}`} aria-labelledby="navbarDropdown">
                  {/*==================== sub menu componets============================== */}
                  <Submenu categoryData={categoryData} />
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      }
    </>
  );
};
export default Navbar;
