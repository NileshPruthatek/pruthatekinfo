import React from 'react'


import style from '../Navbar/Navbar.module.css'
export const Submenu = () => {
  return (
    <div className={`container   ${style.containersubmenu}`}>
      
    <div className="row">
    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <div className="list-group list-group-flush">
            
                <li className={style.Title}>Tech
                </li><li className={style.submenu}>Home Enterainment</li>
              
                <li className={style.submenu}  >Mobile</li> 
              
                <li className={style.submenu}>Computing</li>
                <li className={style.submenu}>Services & Software</li>
                <li className={style.submenu}>Gaming</li>

  
  
 


                      
            </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <div className="list-group list-group-flush">
                <li className={style.Title}>Money</li>
                <li className={style.submenu}>Credit Cards</li>
                <li className={style.submenu}>Mortgages</li>
                <li className={style.submenu}>Insurance</li>
                <li className={style.submenu}>Loans</li>
                <li className={style.submenu}>Cryptocurrency</li>
                <li className={style.submenu}>Banking</li>
                <li className={style.submenu}>Investing</li>
                <li className={style.submenu}>Taxes</li>
                

                      
            </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <div className="list-group list-group-flush">
                <li className={style.Title}>Home</li>
                <li className={style.submenu}>Home Internet</li>
                <li className={style.submenu}>Home Security</li>
                <li className={style.submenu}>Kitchen & Household</li>
                <li className={style.submenu}>Smart Home</li>
                <li className={style.submenu}>Energy & Utilities</li>
                <li className={style.submenu}>Yard & Outdoors</li>
               
                

                      
            </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <div className="list-group list-group-flush">
                <li className={style.Title}>Wellness</li>
                <li className={style.submenu}>Sleep</li>
                <li className={style.submenu}>Nutrition</li>
                <li className={style.submenu}>Fitness</li>
                <li className={style.submenu}>Personal Care</li>
                <li className={style.submenu}>Parenting</li>
                <li className={style.submenu}>Medical</li>
                <li className={style.submenu}>Mental Health</li>
                

                      
            </div>
            </div>

        </div>

    </div>
  )
}
export default Submenu