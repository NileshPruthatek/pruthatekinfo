import React from "react";
import { Link } from "react-router-dom";

import style from "../Navbar/Navbar.module.css";
export const Submenu = ({ categoryData }) => {
  return (
    <div className="px-5">
      <div className="d-flex justify-content-around">
        {categoryData.slice(0, categoryData.length / 2)?.map((category) => {
          return (
            <div className="mb-3 mb-lg-0">
              <div className="list-group list-group-flush">
                <li className={`${style.Title} fw-bold`}><Link to={`/${category.slug}`} className="text-decoration-none text-dark">{category.name}</Link></li>
                {category?.sub_category?.map((subCat) => {
                  return <li className={style.submenu}><Link to={`/${category.slug}/${subCat.slug}`} className="text-decoration-none text-dark">{subCat.name}</Link></li>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-around">
        {categoryData.slice(categoryData.length / 2)?.map((category) => {
          return (
            <div className="mb-3 mb-lg-0">
              <div className="list-group list-group-flush">
                <li className={`${style.Title} fw-bold`}><Link to={`/${category.slug}`} className="text-decoration-none text-dark">{category.name}</Link></li>
                {category?.sub_category?.map((subCat) => {
                  return <li className={style.submenu}><Link to={`/${category.slug}/${subCat.slug}`} className="text-decoration-none text-dark">{subCat.name}</Link></li>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
