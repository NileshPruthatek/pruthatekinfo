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
        <div className="row justify-content-center">
          <div className="col-md-5 ">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card  ${homecss.myCard}`}  >
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
              <div className={`card  ${homecss.myCard}`}  >
                <img src={image3} className={homecss.cardimgtop} alt="img1" />
                <div className="card-body">
                  <p className={`card-text font-weight-bold  ${homecss.cardtext}`} >Fix Wifi Connected  But No Internet  Access on Windows</p>
                  <p className="card-text"><small class="text-muted">Nilesh Padhiyar-Last updated: February 10,2021</small></p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>



      {/*Top List */}
      <div className={`mt-5 ${homecss.heading}`}>
        <h5>Top List</h5>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5  mb-3" >
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card  ${homecss.myCard}`}  >

                <img src={image2} class="card-img-top" alt="bestfree" />
                <div className="card-body">

                  <h5 className={`card-text font-weight-bold  ${homecss.cardtext}`} >9 Best Free Wordpress Hosting Services That Doesn't Suck </h5>


                  <p className="card-text"><small class="text-muted">N.R.P-Last updated: February 12,2021</small></p>
                </div>

              </div>
            </NavLink>
          </div>


          <div className="col-md-5 mb-3">

            <div className={`card  ${homecss.myCard}`} >
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

        <div className="row my-5">
          <div className="col-md-6 col-lg-3 mb-3    ">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card  ${homecss.fourcard}`} >
                <img src={image4} className={homecss.cardImage} alt="..." />
                <div className="card-body">

                  <h5 className={`card-text font-weight-bold  ${homecss.CardTitle}`}  >11 Best facebook Alternative to protect Your Privacy </h5>

                  <p className={`ml-2  ${homecss.Update}`} >N.R.P-Lats Update:january 22,2021</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-6 col-lg-3 mb-3   ">
            <NavLink to="/#" className={homecss.navdecoration}>
              <div className={`card  ${homecss.fourcard}`} >
                <img src={image4} className={homecss.cardImage} alt="..." />
                <div className="card-body">

                  <h5 className={`card-text font-weight-bold  ${homecss.CardTitle}`} >8 Best video Editing software for Youtub  </h5>

                  <p className={`ml-2  ${homecss.Update}`} >N.R.P-Lats Update: january 29,2021</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-md-6 col-lg-3 mb-3   ">
            <div className={`card  ${homecss.fourcard}`} >
              <img src={image4} className={homecss.cardImage} alt="cardimage" />
              <div className="card-body">
                <NavLink to="#" className={homecss.navdecoration} >
                  <h5 className={`card-text font-weight-bold  ${homecss.CardTitle}`} > 11 Best Twitter  Unfollow  Tools to Unfollow Non Followers </h5>
                </NavLink>
                <p className={`ml-2  ${homecss.Update}`} >N.R.P-Lats Update january 21,2021</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3   ">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card  ${homecss.fourcard}`} >
                <img src={image4} className={homecss.cardImage} alt="imagecard" />
                <div className="card-body">

                  <h5 className={`card-text font-weight-bold  ${homecss.CardTitle}`}>9 Manga  video Apps for Android  and iphone  </h5>

                  <p className={`ml-2  ${homecss.Update}`}>N-R-P-Lats Update january 17,2021</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      {/*===========================HOW-TO GUIDES============================== */}

      <div className={`mt-5 ${homecss.heading}`}>
        <h5>HOW-TO GUIDES</h5>
      </div>


      <div className="container">
        <div className="row justify-content-center gap-5">
          <div className="col-md-5 ">
            <div className={`card  ${homecss.howtocard}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <img src={image7} className={homecss.bigimage} style={{ width: "100%" }} alt="..." />
                <div className="card-body p-3">

                  <h5 className={`card-text font-weight-bold    ${homecss.howlargetitle}`} >Fix Wifi Connected But No internet Access on Window</h5>

                </div>
                <div className="card-info p-3">
                  <p className="ml-3" style={{ fontSize: "15px" }}>Mehul patel: Last Updated: january 30,2021</p>
                  <p className="ml-3" style={{ fontSize: "15px" }}>A lot of us are now working remodly , and  connectively plays a key
                    rolw in that Benging Connected to the internet is just another</p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col-6">
            <div className={`card mb-3  ${homecss.howtocardright}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <div className="row no-gutters">
                  <div className="col-4  image1 ">
                    <img src={image7} alt="..." className={homecss.rightsideimage} />
                  </div>
                  <div className="col-8 ">
                    <div className="card-body  p-0 pl-3">

                      <p className={`card-text font-weight-bold ${homecss.howtitlesmallres}`} >How to use Whatsapp Web ? Every thing You Need to Know</p>

                      <p className={`card-text ${homecss.howupdate}`} ><small className="text-muted">Last updated: january 15,2021</small></p>
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
      <div className={`mt-5 ${homecss.heading}`}>
        <h4>REVIEWS</h4>
      </div>

      <div className="container">
        <div className="row justify-content-center gap-5">
          <div className="col-md-5 ">
            <div className={`card  ${homecss.howtocard}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <img src={image7} className={homecss.bigimage} style={{ width: "100%" }} alt="..." />
                <div className="card-body p-3">

                  <h5 className={`card-text font-weight-bold    ${homecss.howlargetitle}`} >Fix Wifi Connected But No internet Access on Window</h5>

                </div>
                <div className="card-info p-3">
                  <p className="ml-3" style={{ fontSize: "15px" }}>Mehul patel: Last Updated: january 30,2021</p>
                  <p className="ml-3" style={{ fontSize: "15px" }}>A lot of us are now working remodly , and  connectively plays a key
                    rolw in that Benging Connected to the internet is just another</p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col-6">
            <div className={`card mb-3  ${homecss.howtocardright}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <div className="row no-gutters">
                  <div className="col-4  image1 ">
                    <img src={image7} alt="..." className={homecss.rightsideimage} />
                  </div>
                  <div className="col-8 ">
                    <div className="card-body  p-0 pl-3">

                      <p className={`card-text font-weight-bold ${homecss.howtitlesmallres}`} >How to use Whatsapp Web ? Every thing You Need to Know</p>

                      <p className={`card-text ${homecss.howupdate}`} ><small className="text-muted">Last updated: january 15,2021</small></p>
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


      {/*   ==================================Knowlege Base========================== */}

      <div className={`w-100 mt-4 ${homecss.heading4}`}>
        <h3>KNOWLEDGE BASE </h3>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 ">
            <div className={`card     ${homecss.CardKnowlage}`}>
              <img src={image5} className={homecss.knowlebigimage} alt="..." />
              <div className="card-body">
                <NavLink to="#" className={homecss.navdecoration}>
                  <h5 className="card-text  font-weight-bold" style={{ fontSize: "19px" }}>How To Smartphone Have Revolutionized Online Gaming ?</h5>
                </NavLink>
                <p className="card-text"><small class="text-muted">Last updated: December 18,2022</small></p>

              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card     ${homecss.CardKnowlage}`}>
                <img src={image3} className={homecss.knowlebigimage} alt="..." />
                <div className="card-body">

                  <h5 className="card-text  font-weight-bold " style={{ fontSize: "19px" }}>Decrypting Economic Calender for Use When Trading</h5>

                  <p className="card-text"><small className="text-muted">Last updated: December 18,2022</small></p>
                </div>
              </div>

            </NavLink>

          </div>
          <div className="col-md-4  ">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card     ${homecss.CardKnowlage}`}>
                <img src={image9} className={homecss.knowlebigimage} alt="..." />
                <div className="card-body">

                  <h5 className="card-text  font-weight-bold" style={{ fontSize: "19px" }}>How To Smartphone Have Revolutionized Online Gaming ?</h5>

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
                      <img src={image7} alt="..." className={homecss.knowleSmallimage} />
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
                      <img src={image4} alt="..." className={homecss.knowleSmallimage} />
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
                      <img src={image2} alt="..." className={homecss.knowleSmallimage} />
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
      <div className={`mt-5 ${homecss.heading}`}>
        <h3> BUSINES</h3>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5  mb-3" >
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card  ${homecss.myCard}`}  >
                <img src={image4} className={homecss.cardimgtop} alt="..." />
                <div className="card-body">
                  <h5 className={`card-text font-weight-bold .d-none ${homecss.cardtext}`}>Top 11 Best Video Sharing Sites You Should Use</h5>
                  <p className="card-text" ><small className="text-muted">Last updated: Auguest 26,2020</small></p>
                </div>
              </div>
            </NavLink>
          </div>


          <div className="col-md-5 mb-3">
            <div className={`card  ${homecss.myCard}`} >
              <NavLink to="#" className={homecss.navdecoration}>
                <img src={image3} className={homecss.cardimgtop} alt="..." />
                <div className="card-body">
                  <h5 className={`card-text font-weight-bold .d-none ${homecss.cardtext}`}>9 Best Free Wordpress Hosting Services That Doesn't Suck </h5>
                  <p className="card-text"><small className="text-muted"> Last Updated: February 1, 2021</small></p>
                </div>
              </NavLink>
            </div>

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
                      <img src={image4} alt="..." className={homecss.knowleSmallimage} />
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
                      <img src={image7} alt="..." className={homecss.knowleSmallimage} />
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
                      <img src={image5} alt="..." className={homecss.knowleSmallimage} />
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

      <div className={`w-100 mt-4 ${homecss.heading4}`}>

        <h3>LATEST ARTICLES (ALL)</h3>

      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 ">
            <div className={`card     ${homecss.CardKnowlage}`}>
              <img src={image5} className={homecss.knowlebigimage} alt="..." />
              <div className="card-body">
                <NavLink to="#" className={homecss.navdecoration}>
                  <h5 className="card-text  font-weight-bold" style={{ fontSize: "19px" }}>How To Smartphone Have Revolutionized Online Gaming ?</h5>
                </NavLink>
                <p className="card-text"><small class="text-muted">Last updated: December 18,2022</small></p>

              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card     ${homecss.CardKnowlage}`}>
                <img src={image3} className={homecss.knowlebigimage} alt="..." />
                <div className="card-body">

                  <h5 className="card-text  font-weight-bold " style={{ fontSize: "19px" }}>Decrypting Economic Calender for Use When Trading</h5>

                  <p className="card-text"><small className="text-muted">Last updated: December 18,2022</small></p>
                </div>
              </div>

            </NavLink>

          </div>
          <div className="col-md-4  ">
            <NavLink to="#" className={homecss.navdecoration}>
              <div className={`card     ${homecss.CardKnowlage}`}>
                <img src={image9} className={homecss.knowlebigimage} alt="..." />
                <div className="card-body">

                  <h5 className="card-text  font-weight-bold" style={{ fontSize: "19px" }}>How To Smartphone Have Revolutionized Online Gaming ?</h5>

                  <p className="card-text"><small className="text-muted">Last updated: December 18,2022</small></p>

                </div>
              </div>


            </NavLink>

          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col  col-small">
            <div className="col-12 ">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}>
                  <div className="row no-gutters">
                    <div className="col-4  image1 ">
                      <img src={image7} alt="..." className={homecss.knowleSmallimage} />
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
                      <img src={image4} alt="..." className={homecss.knowleSmallimage} />
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
                      <img src={image2} alt="..." className={homecss.knowleSmallimage} />
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
    </>
  )
}
export default Homeblog