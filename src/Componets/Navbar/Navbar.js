import React from 'react'
import style from '../Navbar/Navbar.module.css'
import Logo from '../logoimage/NEW LOGO-03.png'
import Submenu from './Submenu'



export const Navbar = () => {
  return (
  
       
       

       
        <nav className=" navbar  navbar-expand-lg navbar-light   mx-5 ">
   
   <img src={Logo} alt="logo" className={style.logoimage}/>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mr-5  " id="navbarSupportedContent">
      <ul className="navbar-nav ml-5 mx-auto ">
     
        <li className={style.navitem} >
       
          
          <a className="nav-link active" aria-current="page" href="/Tech">Tech</a>
         
        </li>

        <li className={style.navitem} >
        
          <a className="nav-link active" aria-current="page" href="/money">Money</a>
          
        
        </li>
        <li className={style.navitem}   >
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className={style.navitem}  >
          <a className="nav-link active" aria-current="page" href="#">Wellness</a>
        </li>
        <li className={style.navitem}   >
          <a className="nav-link active" aria-current="page" href="#">Cars</a>
        </li>
        <li className={style.navitem}   >
          <a className="nav-link active" aria-current="page" href="#">News & Culture</a>
        </li>
       
        <li className= {style.navitem} >
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
            
          <ul className={`dropdown-menu w-100 z-index-n1  position-absolute   ${style.dropdwonbutton}`} aria-labelledby="navbarDropdown">

         {/*==================== sub menu componets============================== */} 
                        
            <Submenu/>
			           
          </ul>
         
        </li>
        </ul>
     
      
     
    </div>
   
</nav>


  
  )
}
export default Navbar
