import React from "react";
import { NavLink } from "react-router-dom";
import homecss from "../Homeblog/Homeblog.module.css";

import image2 from "../../../assets/images/image2.jpeg";
import image4 from "../../../assets/images/image4.jpg";
import image7 from "../../../assets/images/image7.jpeg";
import image9 from "../../../assets/images/image9.jpeg";
import image3 from "../../../assets/images/image3.jpeg";
import image5 from "../../../assets/images/image5.jpeg";
import Wrapper from "../../Wrapper";

export const Homeblog = () => {
  return (
    <Wrapper>
      <>
        <div className={`container mt-5  ${homecss.cardindex}`}>
          <div className="row justify-content-center px-lg-5">
            <div className="col-md-6 mb-4 mb-md-0 p-lg-5">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`border border-1 mx-0 w-100 ${homecss.myCard}`}>
                  <img src={image2} className={homecss.cardimgtop} alt="img1" />
                  <div className="card-body d-flex flex-column gap-2">
                    <p
                      className={`card-text font-weight-bold  ${homecss.cardtext}`}
                    >
                      9 Best Free Wordpress Hosting Services That Does't Suck
                      Does't Suck Does't Suck Does't Suck Does't Suck Does't
                      Suck{" "}
                    </p>
                    <p className="card-text">
                      <small class="text-muted">
                        Nilesh Padhiyar - Last updated: February 2,2021
                      </small>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col-md-6 p-lg-5">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`border border-1 mx-0 w-100 ${homecss.myCard}`}>
                  <img src={image3} className={homecss.cardimgtop} alt="img1" />
                  <div className="card-body d-flex flex-column gap-2">
                    <p
                      className={`card-text font-weight-bold  ${homecss.cardtext}`}
                    >
                      Fix Wifi Connected But No Internet Access on Windows
                    </p>
                    <p className="card-text">
                      <small class="text-muted">
                        Nilesh Padhiyar - Last updated: February 10,2021
                      </small>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        {/*Top List */}
        <div className={`${homecss.heading} my-sm-5 my-lg-0`}>
          <h5>Top List</h5>
        </div>

        <div className={`container mb-5  ${homecss.cardindex}`}>
          <div className="row justify-content-center px-lg-5">
            <div className="col-md-6 mb-4 mb-md-0 p-lg-5">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`border border-1 mx-0 w-100 ${homecss.myCard}`}>
                  <img src={image2} className={homecss.cardimgtop} alt="img1" />
                  <div className="card-body d-flex flex-column gap-2">
                    <p
                      className={`card-text font-weight-bold  ${homecss.cardtext}`}
                    >
                      9 Best Free Wordpress Hosting Services That Does't Suck
                      Does't Suck Does't Suck Does't Suck Does't Suck Does't
                      Suck{" "}
                    </p>
                    <p className="card-text">
                      <small class="text-muted">
                        Nilesh Padhiyar - Last updated: February 2,2021
                      </small>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col-md-6 p-lg-5">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`border border-1 mx-0 w-100 ${homecss.myCard}`}>
                  <img src={image3} className={homecss.cardimgtop} alt="img1" />
                  <div className="card-body d-flex flex-column gap-2">
                    <p
                      className={`card-text font-weight-bold  ${homecss.cardtext}`}
                    >
                      Fix Wifi Connected But No Internet Access on Windows
                    </p>
                    <p className="card-text">
                      <small class="text-muted">
                        Nilesh Padhiyar - Last updated: February 10,2021
                      </small>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        {/*======================Four card ================================ */}

        <div className="container">
          <div className="row my-5">
            <div className="col-md-6 col-lg-3 mb-3 ">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`card  ${homecss.fourcard}`}>
                  <img src={image4} className={homecss.cardImage} alt="..." />
                  <div className="card-body">
                    <h5
                      className={`card-text font-weight-bold  ${homecss.CardTitle}`}
                    >
                      11 Best facebook Alternative to protect Your Privacy{" "}
                    </h5>

                    <p className={`ml-2  ${homecss.Update}`}>
                      N.R.P-Lats Update:january 22,2021
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <NavLink to="/#" className={homecss.navdecoration}>
                <div className={`card  ${homecss.fourcard}`}>
                  <img src={image4} className={homecss.cardImage} alt="..." />
                  <div className="card-body">
                    <h5
                      className={`card-text font-weight-bold  ${homecss.CardTitle}`}
                    >
                      8 Best video Editing software for Youtub{" "}
                    </h5>

                    <p className={`ml-2  ${homecss.Update}`}>
                      N.R.P-Lats Update: january 29,2021
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <div className={`card  ${homecss.fourcard}`}>
                <img
                  src={image4}
                  className={homecss.cardImage}
                  alt="cardimage"
                />
                <div className="card-body">
                  <NavLink to="#" className={homecss.navdecoration}>
                    <h5
                      className={`card-text font-weight-bold  ${homecss.CardTitle}`}
                    >
                      {" "}
                      11 Best Twitter Unfollow Tools to Unfollow Non Followers{" "}
                    </h5>
                  </NavLink>
                  <p className={`ml-2  ${homecss.Update}`}>
                    N.R.P-Lats Update january 21,2021
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-3">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`card  ${homecss.fourcard}`}>
                  <img
                    src={image4}
                    className={homecss.cardImage}
                    alt="imagecard"
                  />
                  <div className="card-body">
                    <h5
                      className={`card-text font-weight-bold  ${homecss.CardTitle}`}
                    >
                      9 Manga video Apps for Android and iphone{" "}
                    </h5>

                    <p className={`ml-2  ${homecss.Update}`}>
                      N-R-P-Lats Update january 17,2021
                    </p>
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

        <div className="container my-5">
          <div className={`row justify-content-between`}>
            <div className="col-md-6 h-100 mb-5 mb-md-0">
              <div className={`card px-md-4 border-0`}>
                <NavLink to="#" className={`${homecss.navdecoration} border`}>
                  <img
                    src={image7}
                    className={`${homecss.bigimage} h-50`}
                    style={{ width: "100%" }}
                    alt="..."
                  />
                  <div className="card-body p-3">
                    <h5
                      className={`card-text font-weight-bold ${homecss.howlargetitle}`}
                    >
                      Fix Wifi Connected But No internet Access on Window
                    </h5>
                  </div>
                  <div className="card-info p-3">
                    <p className="ml-3">
                      Mehul patel: Last Updated: january 30,2021
                    </p>
                    <p className="ml-3">
                      A lot of us are now working remodly , and connectively
                      plays a key rolw in that Benging Connected to the internet
                      is just another
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 px-md-2 px-lg-5 p-0 d-flex flex-column justify-content-between">
              <div className={`border border-1 h-auto mb-2 mh-25`}>
                <NavLink to="#" className={`${homecss.navdecoration} d-block`}>
                  <div className="row no-gutters mx-0">
                    <div className="col-4 p-0">
                      <img
                        src={image7}
                        alt="..."
                        className={`${homecss.rightsideimage} img-fluid h-100`}
                      />
                    </div>
                    <div className="col-8 p-0 py-1">
                      <div className="card-body p-0">
                        <p
                          className={`card-text font-weight-bold ${homecss.howtitlesmallres}`}
                        >
                          How to use Whatsapp Web ? Every thing You Need to Know
                        </p>
                        <p
                          className={`card-text ${homecss.howtitlesmallupdated} `}
                        >
                          <small className="text-muted">
                            Last updated: january 15,2021
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className={`border border-1 h-auto mb-2 mh-25`}>
                <NavLink to="#" className={`${homecss.navdecoration} d-block`}>
                  <div className="row no-gutters mx-0">
                    <div className="col-4 p-0  image1 ">
                      <img
                        src={image9}
                        alt="..."
                        className={`${homecss.rightsideimage} img-fluid h-100`}
                      />
                    </div>
                    <div className="col-8 p-0 py-1">
                      <div className="card-body p-0">
                        <p
                          className={`card-text font-weight-bold  ${homecss.howtitlesmallres}`}
                        >
                          How to Remove Microsoft Account From Windows 10 PC
                        </p>
                        <p
                          className={`card-text ${homecss.howtitlesmallupdated}`}
                        >
                          <small className="text-muted">
                            Last updated: january 15,2021
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className={`border border-1 h-auto mb-2 mh-25`}>
                <NavLink to="#" className={homecss.navdecoration}>
                  <div className="row no-gutters mx-0">
                    <div className="col-4 p-0 image1 ">
                      <img
                        src={image5}
                        alt="..."
                        className={`${homecss.rightsideimage} img-fluid h-100`}
                      />
                    </div>
                    <div className="col-8 p-0 py-1">
                      <div className="card-body p-0">
                        <p
                          className={`card-text font-weight-bold ${homecss.howtitlesmallres}`}
                        >
                          How to Open HEIC Files on Windows
                        </p>
                        <p
                          className={`card-text ${homecss.howtitlesmallupdated} `}
                        >
                          <small className="text-muted">
                            Last updated: january 15,2021
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className={`border border-1 h-auto mb-5 mb-md-0 mh-25`}>
                <NavLink to="#" className={homecss.navdecoration}>
                  <div className="row no-gutters mx-0">
                    <div className="col-4 p-0  image1 ">
                      <img
                        src={image4}
                        alt="..."
                        className={`${homecss.rightsideimage} img-fluid h-100`}
                      />
                    </div>
                    <div className="col-8 p-0 py-1">
                      <div className="card-body p-0">
                        <p
                          className={`card-text font-weight-bold    ${homecss.howtitlesmallres}`}
                        >
                          Best Pokemon Go Hacks, Cheats, Tips, and Tricks
                        </p>
                        <p
                          className={`card-text ${homecss.howtitlesmallupdated} `}
                        >
                          <small className="text-muted">
                            Last updated: january 15,2021
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/*==============================REVIEWS================================= */}
        <div className={`mt-5 ${homecss.heading}`}>
          <h4>REVIEWS</h4>
        </div>

        <div className="container my-5">
          <div className={`row justify-content-between`}>
            <div className="col-md-6 h-100 mb-5 mb-md-0">
              <div className={`card px-md-4 border-0`}>
                <NavLink to="#" className={`${homecss.navdecoration} border`}>
                  <img
                    src={image7}
                    className={`${homecss.bigimage} img-fluid h-50`}
                    style={{ width: "100%" }}
                    alt="..."
                  />
                  <div className="card-body p-3">
                    <h5
                      className={`card-text font-weight-bold ${homecss.howlargetitle}`}
                    >
                      Fix Wifi Connected But No internet Access on Window
                    </h5>
                  </div>
                  <div className="card-info p-3">
                    <p className="ml-3">
                      Mehul patel: Last Updated: january 30,2021
                    </p>
                    <p className="ml-3">
                      A lot of us are now working remodly , and connectively
                      plays a key rolw in that Benging Connected to the internet
                      is just another
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 px-md-2 px-lg-5 p-0 d-flex flex-column justify-content-between">
              <div className={`border border-1 h-auto mb-2 mh-25`}>
                <NavLink to="#" className={`${homecss.navdecoration} d-block`}>
                  <div className="row no-gutters mx-0">
                    <div className="col-4 p-0">
                      <img
                        src={image7}
                        alt="..."
                        className={`${homecss.rightsideimage} img-fluid h-100`}
                      />
                    </div>
                    <div className="col-8 p-0 py-1">
                      <div className="card-body p-0">
                        <p
                          className={`card-text font-weight-bold ${homecss.howtitlesmallres}`}
                        >
                          How to use Whatsapp Web ? Every thing You Need to Know
                        </p>
                        <p
                          className={`card-text ${homecss.howtitlesmallupdated} `}
                        >
                          <small className="text-muted">
                            Last updated: january 15,2021
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className={`border border-1 h-auto mb-2 mh-25`}>
                <NavLink to="#" className={`${homecss.navdecoration} d-block`}>
                  <div className="row no-gutters mx-0">
                    <div className="col-4 p-0  image1 ">
                      <img
                        src={image9}
                        alt="..."
                        className={`${homecss.rightsideimage} img-fluid h-100`}
                      />
                    </div>
                    <div className="col-8 p-0 py-1">
                      <div className="card-body p-0">
                        <p
                          className={`card-text font-weight-bold  ${homecss.howtitlesmallres}`}
                        >
                          How to Remove Microsoft Account From Windows 10 PC
                        </p>
                        <p
                          className={`card-text ${homecss.howtitlesmallupdated}`}
                        >
                          <small className="text-muted">
                            Last updated: january 15,2021
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className={`border border-1 h-auto mb-2 mh-25`}>
                <NavLink to="#" className={homecss.navdecoration}>
                  <div className="row no-gutters mx-0">
                    <div className="col-4 p-0 image1 ">
                      <img
                        src={image5}
                        alt="..."
                        className={`${homecss.rightsideimage} img-fluid h-100`}
                      />
                    </div>
                    <div className="col-8 p-0 py-1">
                      <div className="card-body p-0">
                        <p
                          className={`card-text font-weight-bold ${homecss.howtitlesmallres}`}
                        >
                          How to Open HEIC Files on Windows
                        </p>
                        <p
                          className={`card-text ${homecss.howtitlesmallupdated} `}
                        >
                          <small className="text-muted">
                            Last updated: january 15,2021
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className={`border border-1 h-auto mb-5 mb-md-0 mh-25`}>
                <NavLink to="#" className={homecss.navdecoration}>
                  <div className="row no-gutters mx-0">
                    <div className="col-4 p-0  image1 ">
                      <img
                        src={image4}
                        alt="..."
                        className={`${homecss.rightsideimage} img-fluid h-100`}
                      />
                    </div>
                    <div className="col-8 p-0 py-1">
                      <div className="card-body p-0">
                        <p
                          className={`card-text font-weight-bold    ${homecss.howtitlesmallres}`}
                        >
                          Best Pokemon Go Hacks, Cheats, Tips, and Tricks
                        </p>
                        <p
                          className={`card-text ${homecss.howtitlesmallupdated} `}
                        >
                          <small className="text-muted">
                            Last updated: january 15,2021
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/*   ==================================Knowlege Base========================== */}

        <div className={`mt-5 ${homecss.heading4}`}>
          <h3>KNOWLEDGE BASE </h3>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className={`card`}>
                <img src={image5} className="w-100 img-fluid" alt="..." />
                <div className="card-body py-3 px-2">
                  <NavLink to="#" className={homecss.navdecoration}>
                    <h5
                      className={`card-text p-0 mb-1 font-weight-bold ${homecss.howtitlesmallres}`}
                    >
                      How To Smartphone Have Revolutionized Online Gaming ?
                    </h5>
                  </NavLink>
                  <p
                    className={`card-text p-0 ${homecss.howtitlesmallupdated} `}
                  >
                    <small class="text-muted">
                      Last updated: December 18,2022
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`card `}>
                  <img
                    src={image3}
                    className={`${homecss.knowlebigimage} img-fluid`}
                    alt="..."
                  />
                  <div className="card-body py-3 px-2">
                    <h5
                      className={`card-text  p-0 mb-1font-weight-bold ${homecss.howtitlesmallres}`}
                    >
                      Decrypting Economic Calender for Use When Trading
                    </h5>
                    <p
                      className={`card-text p-0 ${homecss.howtitlesmallupdated} `}
                    >
                      <small className="text-muted">
                        Last updated: December 18,2022
                      </small>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`card`}>
                  <img
                    src={image9}
                    className={`${homecss.knowlebigimage} img-fluid`}
                    alt="..."
                  />
                  <div className="card-body py-3 px-2">
                    <h5
                      className={`card-text p-0 mb-1 font-weight-bold ${homecss.howtitlesmallres}`}
                    >
                      How To Smartphone Have Revolutionized Online Gaming ?
                    </h5>
                    <p
                      className={`card-text text-xs-lg p-0 ${homecss.howtitlesmallupdated} `}
                    >
                      <small className="text-muted">
                        Last updated: December 18,2022
                      </small>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col">
              <NavLink to="#" className={homecss.navdecoration}>
                <div
                  className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                >
                  <div className="d-flex">
                    <img
                      src={image7}
                      alt="..."
                      className={`img-fluid ${homecss.knowleSmallimage}`}
                    />
                    <div className="card-body">
                      <p
                        className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                      >
                        The Complete Guide to Slot Machines
                      </p>
                      <p className={`card-t p-0`}>
                        <small className="text-muted">November 12,2020</small>
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col">
              <NavLink to="#" className={homecss.navdecoration}>
                <div
                  className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                >
                  <div className="d-flex">
                    <img
                      src={image4}
                      alt="..."
                      className={`img-fluid ${homecss.knowleSmallimage}`}
                    />
                    <div className="card-body">
                      <p
                        className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                      >
                        How Successful Has the 5G Lunch Been in Ireland{" "}
                      </p>
                      <p className={`card-text p-0`}>
                        <small className="text-muted">October 27,2020</small>
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col">
              <NavLink to="#" className={homecss.navdecoration}>
                <div
                  className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                >
                  <div className="d-flex">
                    <img
                      src={image2}
                      alt="..."
                      className={`img-fluid ${homecss.knowleSmallimage}`}
                    />
                    <div className="card-body ">
                      <p
                        className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                      >
                        Are Gaming Microtransaction Here to Stay?
                      </p>
                      <p className={`card-te p-0`}>
                        <small className="text-muted">December 23,2020</small>
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        {/*======================================BUSINES======================== */}
        <div className={`mt-5 mb-sm-5 mb-lg-0 ${homecss.heading}`}>
          <h3> BUSINESS</h3>
        </div>

        <div className={`container mb-5  ${homecss.cardindex}`}>
          <div className="row justify-content-center px-lg-5">
            <div className="col-md-6 mb-3 p-lg-5">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`border border-1 w-100 ${homecss.myCard}`}>
                  <img src={image2} className={`img-fluid ${homecss.cardimgtop}`} alt="img1" />
                  <div className="card-body d-flex flex-column gap-2">
                    <p
                      className={`card-text font-weight-bold  ${homecss.cardtext}`}
                    >
                      9 Best Free Wordpress Hosting Services That Does't Suck
                      Does't Suck Does't Suck Does't Suck Does't Suck Does't
                      Suck{" "}
                    </p>
                    <p className="card-text">
                      <small class="text-muted">
                        Nilesh Padhiyar - Last updated: February 2,2021
                      </small>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col-md-6 p-lg-5">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`card w-100 ${homecss.myCard}`}>
                  <img src={image3} className={`img-fluid ${homecss.cardimgtop}`} alt="img1" />
                  <div className="card-body d-flex flex-column gap-2">
                    <p
                      className={`card-text font-weight-bold  ${homecss.cardtext}`}
                    >
                      Fix Wifi Connected But No Internet Access on Windows
                    </p>
                    <p className="card-text">
                      <small class="text-muted">
                        Nilesh Padhiyar - Last updated: February 10,2021
                      </small>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col">
              <NavLink to="#" className={homecss.navdecoration}>
                <div
                  className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                >
                  <div className="d-flex">
                    <img
                      src={image7}
                      alt="..."
                      className={`img-fluid ${homecss.knowleSmallimage}`}
                    />
                    <div className="card-body">
                      <p
                        className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                      >
                        The Complete Guide to Slot Machines
                      </p>
                      <p className={`card-t p-0`}>
                        <small className="text-muted">November 12,2020</small>
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col">
              <NavLink to="#" className={homecss.navdecoration}>
                <div
                  className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                >
                  <div className="d-flex">
                    <img
                      src={image4}
                      alt="..."
                      className={`img-fluid ${homecss.knowleSmallimage}`}
                    />
                    <div className="card-body">
                      <p
                        className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                      >
                        How Successful Has the 5G Lunch Been in Ireland{" "}
                      </p>
                      <p className={`card-text p-0`}>
                        <small className="text-muted">October 27,2020</small>
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col">
              <NavLink to="#" className={homecss.navdecoration}>
                <div
                  className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                >
                  <div className="d-flex">
                    <img
                      src={image2}
                      alt="..."
                      className={`img-fluid ${homecss.knowleSmallimage}`}
                    />
                    <div className="card-body ">
                      <p
                        className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                      >
                        Are Gaming Microtransaction Here to Stay?
                      </p>
                      <p className={`card-te p-0`}>
                        <small className="text-muted">December 23,2020</small>
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        {/*===============================LATEST ARTICLES============================= */}

        <div className={`mt-5 ${homecss.heading4}`}>
          <h3>LATEST ARTICLES (ALL)</h3>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className={`card`}>
                <img src={image5} className="w-100 img-fluid" alt="..." />
                <div className="card-body py-3 px-2">
                  <NavLink to="#" className={homecss.navdecoration}>
                    <h5
                      className={`card-text p-0 mb-1 font-weight-bold ${homecss.howtitlesmallres}`}
                    >
                      How To Smartphone Have Revolutionized Online Gaming ?
                    </h5>
                  </NavLink>
                  <p
                    className={`card-text p-0 ${homecss.howtitlesmallupdated} `}
                  >
                    <small class="text-muted">
                      Last updated: December 18,2022
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`card `}>
                  <img
                    src={image3}
                    className={`img-fluid ${homecss.knowlebigimage}`}
                    alt="..."
                  />
                  <div className="card-body py-3 px-2">
                    <h5
                      className={`card-text  p-0 mb-1font-weight-bold ${homecss.howtitlesmallres}`}
                    >
                      Decrypting Economic Calender for Use When Trading
                    </h5>
                    <p
                      className={`card-text p-0 ${homecss.howtitlesmallupdated} `}
                    >
                      <small className="text-muted">
                        Last updated: December 18,2022
                      </small>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <NavLink to="#" className={homecss.navdecoration}>
                <div className={`card`}>
                  <img
                    src={image9}
                    className={`img-fluid ${homecss.knowlebigimage}`}
                    alt="..."
                  />
                  <div className="card-body py-3 px-2">
                    <h5
                      className={`card-text p-0 mb-1 font-weight-bold ${homecss.howtitlesmallres}`}
                    >
                      How To Smartphone Have Revolutionized Online Gaming ?
                    </h5>
                    <p
                      className={`card-text text-xs-lg p-0 ${homecss.howtitlesmallupdated} `}
                    >
                      <small className="text-muted">
                        Last updated: December 18,2022
                      </small>
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col">
              <NavLink to="#" className={homecss.navdecoration}>
                <div
                  className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                >
                  <div className="d-flex">
                    <img
                      src={image7}
                      alt="..."
                      className={`img-fluid ${homecss.knowleSmallimage}`}
                    />
                    <div className="card-body">
                      <p
                        className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                      >
                        The Complete Guide to Slot Machines
                      </p>
                      <p className={`card-t p-0`}>
                        <small className="text-muted">November 12,2020</small>
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col">
              <NavLink to="#" className={homecss.navdecoration}>
                <div
                  className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                >
                  <div className="d-flex">
                    <img
                      src={image4}
                      alt="..."
                      className={`img-fluid ${homecss.knowleSmallimage}`}
                    />
                    <div className="card-body">
                      <p
                        className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                      >
                        How Successful Has the 5G Lunch Been in Ireland{" "}
                      </p>
                      <p className={`card-text p-0`}>
                        <small className="text-muted">October 27,2020</small>
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="col">
              <NavLink to="#" className={homecss.navdecoration}>
                <div
                  className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                >
                  <div className="d-flex">
                    <img
                      src={image2}
                      alt="..."
                      className={`img-fluid ${homecss.knowleSmallimage}`}
                    />
                    <div className="card-body ">
                      <p
                        className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                      >
                        Are Gaming Microtransaction Here to Stay?
                      </p>
                      <p className={`card-te p-0`}>
                        <small className="text-muted">December 23,2020</small>
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </>
    </Wrapper>
  );
};
export default Homeblog;
