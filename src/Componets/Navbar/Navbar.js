import React, { useEffect, useState } from "react";
import style from "../Navbar/Navbar.module.css";
import Logo from "../logoimage/NEW LOGO-03.png";
import Submenu from "./Submenu";
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  const showSmallScreenList = () => {
    const element = document.getElementById("smallScreenList");
    if (element.classList.contains('d-none')) {
      element.classList.remove("d-none")
    } else {
      element.classList.add("d-none")
    }
  }

  return (
    <>
      {!loading &&
        <>
          <nav className={`navbar navbar-expand-lg justify-content-between navbar-light mx-auto ${style.nav}`}>
            <Link to="/"><img src={Logo} alt="logo" className={style.logoimage} /></Link>
            <button
              onClick={showSmallScreenList}
              className={` ${style.myclass} py-2 px-3 rounded-3 border border-dark`}
              type="button"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse justify-content-end ${style.listitems}`} id="navbarSupportedContent">
              <ul className="navbar-nav">
                {categoryData?.map(({ name, uuid }) => {
                  return (
                    <li className={style.navitem}>
                      <Link className="nav-link active" style={{ cursor: "pointer" }} to={`${name.replace(" ", "-").toLowerCase()}?x=${uuid}`}>{name}</Link>
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
          {/* The below div will only show up in small screen when toggle is active. */}
          <div className={`${style.smallScreenListItems} d-none`} id="smallScreenList">
            <ul className="navbar-nav">
              {categoryData?.map(({ name, uuid }) => {
                return (
                  <li className={style.navitem}>
                    <Link className="nav-link active" style={{ cursor: "pointer" }} to={`${name.replace(" ", "-").toLowerCase()}?x=${uuid}`}>{name}</Link>
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
        </>
      }
    </>
  );
};
export default Navbar;
