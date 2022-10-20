import React from "react";

import style from "../Navbar/Navbar.module.css";
export const Submenu = ({ categoryData }) => {
  return (
    <div className="px-5">
      <div className="d-flex justify-content-around">
        {categoryData?.map((category) => {
          return (
            <div className="mb-3 mb-lg-0">
              <div className="list-group list-group-flush">
                <li className={style.Title}>{category.name}</li>
                {category?.sub_category?.map((subCat) => {
                  return <li className={style.submenu}>{subCat.name}</li>
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};
export default Submenu;
