import React from 'react'
import { NavLink } from 'react-router-dom'
import homecss from '../Homeblog/Homeblog.module.css'


import image2 from '../../../assets/images/image2.jpeg'
import image4 from '../../../assets/images/image4.jpg'
import image7 from '../../../assets/images/image7.jpeg'
import image9 from '../../../assets/images/image9.jpeg'
import image3 from '../../../assets/images/image3.jpeg'
import image5 from '../../../assets/images/image5.jpeg'



export const Homeblog = () => {
  return (
    <>
    <div className={`container my-5  ${homecss.cardindex}`}>
    <div className="row">
      <div className="col-md-5 ">
      <NavLink to="#" className={homecss.navdecoration}>
        <div className= {`card  ${homecss.myCard}`}  >

      
          <img src={image2} className={homecss.cardimgtop} alt="img1" />
        
          <div className="card-body">
         
            <p className={`card-text font-weight-bold  ${homecss.cardtext}`} >9 Best Free  Wordpress  Hosting  Services That  Does't  Suck </p>
           
            <p className="card-text"><small class="text-muted">Nilesh Padhiyar-Last updated: February 2,2021</small></p>
          </div>
      
        </div>
        </NavLink>
      </div>

      <div className="col-md-5 ">
      <NavLink to="#" className={homecss.navdecoration}>
        <div className= {`card  ${homecss.myCard}`}  >

      
          <img src={image3} className={homecss.cardimgtop} alt="img1" />
        
          <div className="card-body">
         
            <p className={`card-text font-weight-bold  ${homecss.cardtext}`} >Fix Wifi Connected  But No Internet  Access on Windows</p>
           
            <p className="card-text"><small class="text-muted">Nilesh Padhiyar-Last updated: February 10,2021</small></p>
          </div>
      
        </div>
        </NavLink>
      </div>

      {/* 

      <div className="col-md-5">
      <NavLink to="#"  className={homecss.navdecoration}>
        <div className= {`card  ${homecss.myCard}`}>
       
          <img src={image4} className={homecss.cardimgtop} alt="img2" />
       
          <div className="card-body">
         
            <p className={`card-text font-weight-bold  ${homecss.cardtext}`}>Fix Wifi Connected  But No Internet  Access on Windows </p>
       
            <p className="card-text"><small class="text-muted">Nilesh Padhiyar-Last updated: February 10,2021</small></p>

          </div>
       
        </div>
        </NavLink>
      </div>

*/}
    </div>

  </div>
  
  
  
  {/*Top List */}
   <div className={homecss.heading}>

   <h5>Top List</h5>
   
   </div>



   <div className="container">
        <div className="row">
          <div className="col-md-5  mb-3" >
          <NavLink to="#" className={homecss.navdecoration}>
            <div className= {`card  ${homecss.myCard}`}  >
           
              <img src={image2} class="card-img-top" alt="bestfree" />
              <div className="card-body">
            
                <h5 className={`card-text font-weight-bold  ${homecss.cardtext}`} >9 Best Free Wordpress Hosting Services That Doesn't Suck </h5>
         
                
               <p className="card-text"><small class="text-muted">N.R.P-Last updated: February 12,2021</small></p>
              </div>
              
            </div>
            </NavLink>
          </div>


          <div className="col-md-5 mb-3 ">

            <div className= {`card  ${homecss.myCard}`} >
            <NavLink to="#" className={homecss.navdecoration}>
              <img src={image2} className="card-img-top" alt="..." />
              <div className="card-body">
            
                <h5 className={`card-text font-weight-bold  ${homecss.cardtext}`} > 17 Cool interesting  Website  to Have Fun Anytime  </h5>
              
                
                  <p className="card-text"><small class="text-muted">N.R.P-Last updated: February 10,2021</small></p>
              </div>
              </NavLink>
            </div>

          </div>
        </div>

      </div>

            {/*======================Four card ================================ */}

            <div className="container">

        <div className="row">
          <div className="col-md-6 col-lg-3 mb-3    ">
          <NavLink to="#" className={homecss.navdecoration}>
            <div className={`card  ${homecss.fourcard}`} >
              <img src={image4} className={homecss.cardImage} alt="..." />
              <div className="card-body">
            
                <h5 className= {`card-text font-weight-bold  ${homecss.CardTitle}`}  >11 Best facebook Alternative to protect Your Privacy </h5>
               
                <p className= {`ml-2  ${homecss.Update}`} >N.R.P-Lats Update:january 22,2021</p>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="col-md-6 col-lg-3 mb-3   ">
          <NavLink to="/#" className={homecss.navdecoration}>
            <div className={`card  ${homecss.fourcard}`} >
              <img src={image4}  className={homecss.cardImage} alt="..."  />
              <div className="card-body">
              
                <h5 className= {`card-text font-weight-bold  ${homecss.CardTitle}`} >8 Best video Editing software for Youtub  </h5>
          
                <p className= {`ml-2  ${homecss.Update}`} >N.R.P-Lats Update: january 29,2021</p>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="col-md-6 col-lg-3 mb-3   ">
            <div className={`card  ${homecss.fourcard}`} >
              <img src={image4}  className={homecss.cardImage} alt="cardimage" />
              <div className="card-body">
              <NavLink to="#" className={homecss.navdecoration} >
                <h5 className= {`card-text font-weight-bold  ${homecss.CardTitle}`} > 11 Best Twitter  Unfollow  Tools to Unfollow Non Followers </h5>
                </NavLink>
                <p className= {`ml-2  ${homecss.Update}`} >N.R.P-Lats Update january 21,2021</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3   ">
          <NavLink to="#" className={homecss.navdecoration}>
            <div className={`card  ${homecss.fourcard}`} >
              <img src={image4}  className={homecss.cardImage} alt="imagecard" />
              <div className="card-body">
           
                <h5 className= {`card-text font-weight-bold  ${homecss.CardTitle}`}>9 Manga  video Apps for Android  and iphone  </h5>
            
                <p className= {`ml-2  ${homecss.Update}`}>N-R-P-Lats Update january 17,2021</p>
              </div>
            </div>
            </NavLink>
          </div>
        </div>
      </div>

      {/*===========================HOW-TO GUIDES============================== */}

      <div className={homecss.heading}>

          <h5>HOW-TO GUIDES</h5>

        </div>

       
        <div className="container">
          <div className="row">
            <div className="col-md-5 ">
              <div className={`card  ${homecss.howtocard}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <img src={image7} className={homecss.bigimage} alt="..."  />
                <div className="card-body p-3">
               
                  <h5 className={`card-text font-weight-bold    ${homecss.howlargetitle}`} >Fix Wifi Connected But No internet Access on Window</h5>
               
                </div>
                <div className="card-info p-3">
                  <p className="ml-3" style={{fontSize:"15px"}}>Mehul patel: Last Updated: january 30,2021</p>
                  <p className="ml-3" style={{fontSize:"15px"}}>A lot of us are now working remodly , and  connectively plays a key
                                     rolw in that Benging Connected to the internet is just another</p>
                </div>
                 </NavLink>  
              </div>
            </div>
            <div className="col-6  ">
              <div className={`card mb-3  my-2  ${homecss.howtocardright}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <div className="row no-gutters">
                  <div className="col-4  image1 ">
                    <img src={image7} alt="..." className={homecss.rightsideimage} />
                  </div>
                  <div className="col-8 ">
                    <div className="card-body  p-0 pl-3">
                   
                      <p className={`card-text font-weight-bold    ${homecss.howtitlesmallres}`} >How to use Whatsapp Web ? Every thing You Need to Know</p>
                   
                      <p className={`card-text    ${homecss.howupdate}`} ><small className="text-muted">Last updated: january 15,2021</small></p>
                    </div>
                  </div>
                </div>
                </NavLink>
              </div>
              {/* */}
              <div className={`card mb-3    ${homecss.howtocardright}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <div className="row no-gutters">
                  <div className="col-4  image1 ">
                    <img src={image9} alt="..." className={homecss.rightsideimage} />
                  </div>
                  <div className="col-8 ">
                    <div className="card-body  p-0 pl-3">
                   
                      <p className={`card-text font-weight-bold    ${homecss.howtitlesmallres}`} >How to Remove Microsoft Account From Windows 10 PC</p>
                   
                      <p className={`card-text    ${homecss.howupdate}`}><small className="text-muted">Last updated: january 15,2021</small></p>
                    </div>
                  </div>
                </div>
                </NavLink>
              </div>

              <div className={`card mb-3    ${homecss.howtocardright}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <div className="row no-gutters">
                  <div className="col-4  image1 ">
                    <img src={image5} alt="..." className={homecss.rightsideimage} />
                  </div>
                  <div className="col-8 ">
                    <div className="card-body  p-0 pl-3">
                   
                      <p className={`card-text font-weight-bold    ${homecss.howtitlesmallres}`} >How to Open HEIC  Files on Windows</p>
                    
                      <p className={`card-text    ${homecss.howupdate}`} ><small className="text-muted">Last updated: january 15,2021</small></p>
                    </div>
                  </div>
                </div>
                </NavLink>
              </div>

              <div className={`card mb-3    ${homecss.howtocardright}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <div className="row no-gutters">
                  <div className="col-4  image1 ">
                    <img src={image4} alt="..." className={homecss.rightsideimage} />
                  </div>
                  <div className="col-8 ">
                    <div className="card-body  p-0 pl-3">
                   
                      <p className={`card-text font-weight-bold    ${homecss.howtitlesmallres}`} >Best Pokemon Go Hacks, Cheats, Tips, and Tricks</p>
                   
                      <p className={`card-text    ${homecss.howupdate}`} ><small className="text-muted">Last updated: january 15,2021</small></p>
                    </div>
                  </div>
                </div>
                </NavLink>
              </div>

              {/* */}

             
            </div>

          </div>
        </div>

        {/*==============================REVIEWS================================= */}
        <div className={homecss.heading}>

<h4>REVIEWS</h4>

</div>



<div className="container">
          <div className="row">
            <div className="col-md-5 ">
              <div className={`card  ${homecss.howtocard}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <img src={image7} className={homecss.bigimage} alt="..."  />
                <div className="card-body p-3">
               
                  <h5 className={`card-text font-weight-bold    ${homecss.howlargetitle}`} >Is G2A Legit and Safe Place to Games ?</h5>
               
                </div>
                <div className="card-info p-3">
                  <p className="ml-3" style={{fontSize:"15px"}}>Mehul patel: Last Updated: january 21,2021</p>
                  <p className="ml-3" style={{fontSize:"15px"}}>While Serching for games to play this holiday  season , we came across G2A
                            -a  website where you can get games and other software...</p>
                </div>
                 </NavLink>  
              </div>
            </div>
            <div className="col-6  ">
              <div className={`card mb-3    ${homecss.howtocardright}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <div className="row no-gutters">
                  <div className="col-4  image1 ">
                    <img src={image3} alt="..." className={homecss.rightsideimage} />
                  </div>
                  <div className="col-8 ">
                    <div className="card-body  p-0 pl-3">
                   
                      <p className={`card-text font-weight-bold    ${homecss.howtitlesmallres}`} >iTubeGo Youtub Downloader Review:
                Save Online Video Any Format </p>
                   
                      <p className={`card-text    ${homecss.howupdate}`} ><small className="text-muted">Last updated: january 5,2021</small></p>
                    </div>
                  </div>
                </div>
                </NavLink>
              </div>
              {/* */}
              <div className={`card mb-3    ${homecss.howtocardright}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <div className="row no-gutters">
                  <div className="col-4  image1 ">
                    <img src={image5}  alt="..." className={homecss.rightsideimage} />
                  </div>
                  <div className="col-8 ">
                    <div className="card-body  p-0 pl-3">
                   
                      <p className={`card-text font-weight-bold    ${homecss.howtitlesmallres}`} >Boom 3D Review: Best Equalizer App right Now ?</p>
                   
                      <p className={`card-text    ${homecss.howupdate}`}><small className="text-muted">Last updated: january 15,2021</small></p>
                    </div>
                  </div>
                </div>
                </NavLink>
              </div>

              <div className={`card mb-3    ${homecss.howtocardright}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <div className="row no-gutters">
                  <div className="col-4  image1 ">
                    <img src={image3} alt="..." className={homecss.rightsideimage} />
                  </div>
                  <div className="col-8 ">
                    <div className="card-body  p-0 pl-3">
                   
                      <p className={`card-text font-weight-bold    ${homecss.howtitlesmallres}`} >Wondershare Filmara  X  Review:Best DIY Video Editor?</p>
                    
                      <p className={`card-text    ${homecss.howupdate}`} ><small className="text-muted">Last updated: january 15,2021</small></p>
                    </div>
                  </div>
                </div>
                </NavLink>
              </div>

              <div className={`card mb-3    ${homecss.howtocardright}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <div className="row no-gutters">
                  <div className="col-4  image1 ">
                    <img src={image5} alt="..." className={homecss.rightsideimage} />
                  </div>
                  <div className="col-8 ">
                    <div className="card-body  p-0 pl-3">
                   
                      <p className={`card-text font-weight-bold    ${homecss.howtitlesmallres}`} >Wondershare Filmora X Review: Best DIY Video Editor?</p>
                   
                      <p className={`card-text    ${homecss.howupdate}`} ><small className="text-muted">Last Updated: December 18, 2020</small></p>
                    </div>
                  </div>
                </div>
                </NavLink>
              </div>

              {/* */}

             
            </div>

          </div>
        </div>


{/*   ==================================Knowlege Base========================== */}

<div className={` mr-4 ml-4   ${homecss.heading4}`}>

<h3>KNOWLEDGE BASE </h3>

</div>

<div className="container py-5">
<div className="row">
  <div className="col-md-4 ">

    <div className={`card     ${homecss.CardKnowlage}`}>
      <img src={image5} className={homecss.knowlebigimage} alt="..."  />
      <div className="card-body">
      <NavLink to="#" className={homecss.navdecoration}>
        <h5 className="card-text  font-weight-bold" style={{fontSize:"19px"}}>How To Smartphone Have Revolutionized Online Gaming ?</h5>
      </NavLink>
        <p className="card-text"><small class="text-muted">Last updated: December 18,2022</small></p>

      </div>
    </div>




  </div>
  <div className="col-md-4 ">
  <NavLink to="#" className={homecss.navdecoration}>
    <div className={`card     ${homecss.CardKnowlage}`}>
      <img src={image3} className={homecss.knowlebigimage}  alt="..."  />
      <div className="card-body">
      
        <h5 className="card-text  font-weight-bold " style={{fontSize:"19px"}}>Decrypting Economic Calender for Use When Trading</h5>
     
        <p className="card-text"><small className="text-muted">Last updated: December 18,2022</small></p>
      </div>
    </div>

    </NavLink>

  </div>
  <div className="col-md-4  ">
  <NavLink to="#" className={homecss.navdecoration}>
    <div className={`card     ${homecss.CardKnowlage}`}>
      <img src={image9} className={homecss.knowlebigimage} alt="..."/>
      <div className="card-body">
     
        <h5 className="card-text  font-weight-bold" style={{fontSize:"19px"}}>How To Smartphone Have Revolutionized Online Gaming ?</h5>
     
        <p className="card-text"><small className="text-muted">Last updated: December 18,2022</small></p>

      </div>
    </div>


    </NavLink>

  </div>
</div>
</div>

<div className="container">
<div className="row">
  <div className="col  col-small">
    <div className="col-12 ">
    <NavLink to="#" className={homecss.navdecoration}>
      <div className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}>
        <div className="row no-gutters">
          <div className="col-4  image1 ">
            <img src={image7} alt="..." className={homecss.knowleSmallimage}/>
          </div>
          <div className="col-8  ">
            <div className="card-body  p-0 pl-3">
          
              <p className={`card-text font-weight-bold    ${homecss.knowlegesmalltitle}`}>The Complete Guide to Slot Machines</p>
          
              <p className={`card-text    ${homecss.knowupdate}`}><small className="text-muted">Last updated: November 12,2020</small></p>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>
  </div>

  <div className="col col-small ">

    <div className="col-12 ">
    <NavLink to="#" className={homecss.navdecoration}>
      <div className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}>
        <div className="row no-gutters">
          <div className="col-4  image1 ">
            <img src={image4} alt="..." className={homecss.knowleSmallimage}/>
          </div>
          <div className="col-8  ">
            <div className="card-body p-0 pl-3">
          
              <p className={`card-text font-weight-bold    ${homecss.knowlegesmalltitle}`}>How Successful Has the 5G Lunch Been in Ireland </p>
           
              <p className={`card-text    ${homecss.knowupdate}`}><small className="text-muted">Last updated: October 27,2020</small></p>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>



  </div>

  
  <div className="col col-small">

    <div className="col-12  ">
    <NavLink to="#" className={homecss.navdecoration}>
      <div className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}>
        <div className="row no-gutters">
          <div className="col-4 image1 ">
            <img src={image2} alt="..." className={homecss.knowleSmallimage}/>
          </div>
          <div className="col-8  ">
            <div className="card-body p-0 pl-3">
           
              <p className={`card-text font-weight-bold    ${homecss.knowlegesmalltitle}`}>Are Gaming Microtransaction Here to Stay?</p>
         
              <p className={`card-text    ${homecss.knowupdate}`}><small className="text-muted">Last updated: December 23,2020</small></p>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>



  </div>

  
</div>
</div>



{/*======================================BUSINES======================== */}
  <div className={homecss.heading}>

<h3> BUSINES</h3>

</div>


<div className="container">
          <div className="row">
            <div className="col-md-5">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className= {`card  ${homecss.myCard}`}  >
                <img src={image4} className={homecss.cardimgtop}  alt="..." />
                <div className="card-body">

                  <h5 className={`card-text font-weight-bold .d-none ${homecss.cardtext}`}>Top 11 Best Video Sharing Sites You Should Use</h5>
                  <p className="card-text" ><small className="text-muted">Last updated: Auguest 26,2020</small></p>

                 

                </div>
              </div>
              </NavLink>

            </div>
            <div class="col-md-5 ">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className= {`card  ${homecss.myCard}`}  >
                <img src={image3} className={homecss.cardimgtop} alt="..."  />
                <div className="card-body">
                  
                  <h5 className={`card-text font-weight-bold .d-none ${homecss.cardtext}`}>9 Best Free Wordpress Hosting Services That Doesn't Suck </h5>
                  <p className="card-text"><small className="text-muted"> Last Updated: February 1, 2021</small></p>
                 

                </div>
              </div>
              </NavLink>
            </div>

          </div>
        </div>

        <div className="container my-5">
<div className="row">
  <div className="col  col-small">
    <div className="col-12 ">
    <NavLink to="#" className={homecss.navdecoration}>
      <div className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}>
        <div className="row no-gutters">
          <div className="col-4  image1 ">
            <img src={image4} alt="..." className={homecss.knowleSmallimage}/>
          </div>
          <div className="col-8  ">
            <div className="card-body  p-0 pl-3">
          
              <p className={`card-text font-weight-bold    ${homecss.knowlegesmalltitle}`}>10 Best Keyword Research Tools for SEO</p>
          
              <p className={`card-text    ${homecss.knowupdate}`}><small className="text-muted">Last updated: November 12,2020</small></p>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>
  </div>

  <div className="col col-small ">

    <div className="col-12 ">
    <NavLink to="#" className={homecss.navdecoration}>
      <div className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}>
        <div className="row no-gutters">
          <div className="col-4  image1 ">
            <img src={image7} alt="..." className={homecss.knowleSmallimage}/>
          </div>
          <div className="col-8  ">
            <div className="card-body p-0 pl-3">
          
              <p className={`card-text font-weight-bold    ${homecss.knowlegesmalltitle}`}>9 Benefits  of Digital Signage Solution for Your Business  </p>
           
              <p className={`card-text    ${homecss.knowupdate}`}><small className="text-muted">Last updated: October 27,2020</small></p>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>



  </div>

  
  <div className="col col-small">

    <div className="col-12  ">
    <NavLink to="#" className={homecss.navdecoration}>
      <div className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}>
        <div className="row no-gutters">
          <div className="col-4 image1 ">
            <img src={image5} alt="..." className={homecss.knowleSmallimage}/>
          </div>
          <div className="col-8  ">
            <div className="card-body p-0 pl-3">
           
              <p className={`card-text font-weight-bold    ${homecss.knowlegesmalltitle}`}>What are Magent Links & How to Use Them?</p>
         
              <p className={`card-text    ${homecss.knowupdate}`}><small className="text-muted">Last updated: January 8,2020</small></p>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>



  </div>

  
</div>
</div>



  {/*===============================LATEST ARTICLES============================= */}

        <div className={` mr-4 ml-4   ${homecss.heading4}`}>

<h3>LATEST ARTICLES (ALL)</h3>

</div>

<div className="container py-5">
          <div className="row">
            <div className="col-md">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card     ${homecss.CardLatest}`}>
                <img src={image4} className="card-img-top" alt="..." />
                <div className="card-body">

                  <h5 className="card-text font-weight-bold">Top 11 Best Video Sharing Sites You Should Use</h5>
                  <p className="card-text"><small className="text-muted">Last updated: February 3,2022</small></p>
                  <p className="card-contain">in the Last few years ,we have witnessed a tremendous rise in online
                  video content  Before the rise of platforms like TikTok videos were..
              </p>
                </div>
              </div>

                </NavLink>
           </div>
            <div className="col-md">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card     ${homecss.CardLatest}`}>
                <img src={image5} class="card-img-top" alt="..." style={{height:"233px"}} />
                <div className="card-body">

                  <h5 className="card-text font-weight-bold">11 Best Mombail Phones You can Buy for under $500</h5>
                  <p className="card-text"><small className="text-muted">Last updated: December 18,2022</small></p>
                  <p className="card-contain">Smartphone are getting more and more affordble each year , and
                  nowdays you don't have to spand 1000 bucks to get a decent Smartphone These...
              </p>
                </div>
              </div>

            </NavLink>

            </div>
            <div className="col-md">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card    ${homecss.CardLatest}`}>
                <img src={image3} className="card-img-top" alt="..." />
                <div className="card-body">

                  <h5 className="card-text font-weight-bold">9 Best Free WordPress Hosting Services That Doesn't Suck</h5>
                  <p className="card-text"><small className="text-muted">Last updated: February 18,2022</small></p>
                  <p className="card-contain">When it comes building  a WordPress website , hosting is the most expensive
                  element in your way if you  plan to create just a..
              </p>
                </div>
              </div>


            </NavLink>

            </div>
          </div>
        </div>


        <div className="container my-5">
<div className="row">
  <div className="col  col-small">
    <div className="col-12 ">
    <NavLink to="#" className={homecss.navdecoration}>
      <div className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}>
        <div className="row no-gutters">
          <div className="col-4  image1 ">
            <img src={image2} alt="..." className={homecss.knowleSmallimage}/>
          </div>
          <div className="col-8  ">
            <div className="card-body  p-0 pl-3">
          
              <p className={`card-text font-weight-bold    ${homecss.knowlegesmalltitle}`}>Fix WIFI Connected But No Internet Access on Windows</p>
          
              <p className={`card-text    ${homecss.knowupdate}`}><small className="text-muted">Last updated: November 12,2020</small></p>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>
  </div>

  <div className="col col-small ">

    <div className="col-12 ">
    <NavLink to="#" className={homecss.navdecoration}>
      <div className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}>
        <div className="row no-gutters">
          <div className="col-4  image1 ">
            <img src={image3} alt="..." className={homecss.knowleSmallimage}/>
          </div>
          <div className="col-8  ">
            <div className="card-body p-0 pl-3">
          
              <p className={`card-text font-weight-bold    ${homecss.knowlegesmalltitle}`}>17 Cool interesting Website to have Fun Anytime  </p>
           
              <p className={`card-text    ${homecss.knowupdate}`}><small className="text-muted">Last updated: October 27,2020</small></p>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>



  </div>

  
  <div className="col col-small">

    <div className="col-12  ">
    <NavLink to="#" className={homecss.navdecoration}>
      <div className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}>
        <div className="row no-gutters">
          <div className="col-4 image1 ">
            <img src={image9} alt="..." className={homecss.knowleSmallimage}/>
          </div>
          <div className="col-8  ">
            <div className="card-body p-0 pl-3">
           
              <p className={`card-text font-weight-bold    ${homecss.knowlegesmalltitle}`}>17 Best free Plugins Every Website Needs</p>
         
              <p className={`card-text    ${homecss.knowupdate}`}><small className="text-muted">Last updated: January 8,2020</small></p>
            </div>
          </div>
        </div>
      </div>
      </NavLink>
    </div>



  </div>

  
</div>
</div>




</>

  )
}
export default Homeblog