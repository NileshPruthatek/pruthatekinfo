import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import homecss from "../Homeblog/Homeblog.module.css";

import image2 from "../../../assets/images/image2.jpeg";
import image4 from "../../../assets/images/image4.jpg";
import image7 from "../../../assets/images/image7.jpeg";
import image9 from "../../../assets/images/image9.jpeg";
import image3 from "../../../assets/images/image3.jpeg";
import image5 from "../../../assets/images/image5.jpeg";
import Wrapper from "../../Wrapper";
import { Helmet } from 'react-helmet';
import axios from "axios";
import moment from "moment";

export const Homeblog = () => {
  const [loading, setLoading] = useState(true)
  const [pageData, setPageData] = useState({})
  const [isEmpty, setIsEmpty] = useState(false)
  const navigate = useNavigate()

  const getHomePageData = async () => {
    return axios.get(`${process.env.REACT_APP_IMG_BASEURL}/api/getHomePageData`).then((res) => {
      setPageData(res.data.info)
      setIsEmpty(!(!!Object.keys(res.data.info).filter((eachKey) => res.data.info[eachKey].length > 0).length))
    })
  }

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        await Promise.all([getHomePageData()])
        setLoading(false)
      } catch (error) {
        setLoading(false)
        navigate("/error")
      }
    })()
  }, [])

  return (
    <Wrapper>
      {!loading &&
        <>
          <Helmet>
            <title>PRUTHATEK BLOGS | BEST BLOGS ON VARIETY OF TOPICS</title>
          </Helmet>


          {isEmpty ? <h2 className="text-center my-5 vh-100">We are writing blog and will upload soon! Thanks you.</h2> : <>

            <div className={'container mt-5 ' + homecss.cardindex}>
              <div className="row justify-content-center">
                {pageData?.["topThreeBlogs"].map((blog) => {
                  return <div className="col-md-4 mb-4 mb-md-0 py-lg-5">
                    <NavLink to={`/blog?x=${blog?.uuid}`} className={homecss.navdecoration}>
                      <div className={`border border-1 mx-0 w-100 ${homecss.myCard}`}>
                        <img src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`} className={homecss.cardimgtop} alt="img1" />
                        <div className="card-body d-flex flex-column gap-2">
                          <p
                            className={`card-text font-weight-bold  ${homecss.cardtext}`}
                          >
                            {blog.title}
                          </p>
                          <p className="card-text">
                            <small class="text-muted">
                              <p style={{ marginBottom: "0.5rem" }}>{blog?.["user"]["username"]}</p>
                              <p style={{ marginBottom: "0.5rem" }}>Last Updated On : {moment(blog?.["updated_at"]).format("DD MMM, YYYY")}</p>
                              {/* {`${blog?.["user"]["username"]} - Last Updated On : ${moment(blog?.["updated_at"]).format("DD MMM, YYYY")}`} */}
                            </small>
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                })}
              </div>
            </div>

            {/*Top List */}
            <div className={`${homecss.heading} my-sm-5 my-lg-0`}>
              <h5>Top List</h5>
            </div>

            <div className={`container mb-5  ${homecss.cardindex}`}>
              <div className="row justify-content-center">
                {pageData?.["topList"].slice(0, 3).map((blog) => {
                  return <div className="col-md-4 mb-4 mb-md-0 py-lg-5">
                    <NavLink to={`/blog?x=${blog?.uuid}`} className={homecss.navdecoration}>
                      <div className={`border border-1 mx-0 w-100 ${homecss.myCard}`}>
                        <img src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`} className={homecss.cardimgtop} alt="img1" />
                        <div className="card-body d-flex flex-column gap-2">
                          <p
                            className={`card-text font-weight-bold  ${homecss.cardtext}`}
                          >
                            {blog.title}
                          </p>
                          <p className="card-text">
                            <small class="text-muted">
                              <p style={{ marginBottom: "0.5rem" }}>{blog?.["user"]["username"]}</p>
                              <p style={{ marginBottom: "0.5rem" }}>Last Updated On : {moment(blog?.["updated_at"]).format("DD MMM, YYYY")}</p>
                              {/* {`${blog?.["user"]["username"]} - Last Updated On : ${moment(blog?.["updated_at"]).format("DD MMM, YYYY")}`} */}
                            </small>
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                })}
              </div>
            </div>
            {/*======================Four card ================================ */}

            <div className="container">
              <div className="row my-5">
                {pageData?.["topList"].slice(3).map((blog) => {
                  return <div className="col-md-6 col-lg-3 mb-3 ">
                    <NavLink to={`/blog?x=${blog?.uuid}`} className={homecss.navdecoration}>
                      <div className={`card  ${homecss.fourcard}`}>
                        <img src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`} className={homecss.cardImage} alt="..." />
                        <div className="card-body">
                          <h5
                            className={`card-text font-weight-bold  ${homecss.CardTitle}`}
                          >
                            {blog.title}
                          </h5>

                          <p className={`ml-2  ${homecss.Update}`}>
                            {`${blog?.["user"]["username"]} - Last Updated On : ${moment(blog?.["updated_at"]).format("DD MMM, YYYY")}`}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                })}
              </div>
            </div>
            {/*===========================HOW-TO GUIDES============================== */}

            {/* <div className={`mt-5 ${homecss.heading}`}>
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
        </div> */}

            {/*==============================REVIEWS================================= */}
            <div className={`mt-5 ${homecss.heading}`}>
              <h4>REVIEWS</h4>
            </div>

            {pageData?.["reviewBlogs"].length > 0 ? <>
              <div className="container my-5">
                <div className={`row justify-content-between`}>
                  <div className="col-md-6 h-100 mb-5 mb-md-0">
                    {pageData?.["reviewBlogs"].slice(0, 1).map((blog) => {
                      return <div className={`card px-md-4 border-0`}>
                        <NavLink to={`/blog?x=${blog?.uuid}`} className={`${homecss.navdecoration} border`}>
                          <img
                            src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`}
                            className={`${homecss.bigimage} img-fluid h-50`}
                            style={{ width: "100%" }}
                            alt="..."
                          />
                          <div className="card-body p-3">
                            <h5
                              className={`card-text font-weight-bold ${homecss.howlargetitle}`}
                            >
                              {blog.title}
                            </h5>
                          </div>
                          <div className="card-info p-3">
                            <p className="ml-3">
                              {`${blog?.["user"]["username"]} - Last Updated On : ${moment(blog?.["updated_at"]).format("DD MMM, YYYY")}`}
                            </p>
                          </div>
                        </NavLink>
                      </div>
                    })}
                  </div>
                  <div className="col-md-6 px-md-2 px-lg-5 p-0 d-flex flex-column justify-content-between">
                    {pageData?.["reviewBlogs"].slice(1).map((blog) => {
                      return <div className={`border border-1 h-auto mb-2 mh-25`}>
                        <NavLink to={`/blog?x=${blog?.uuid}`} className={`${homecss.navdecoration} d-block`}>
                          <div className="row no-gutters mx-0">
                            <div className="col-4 p-0">
                              <img
                                src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`}
                                alt="..."
                                className={`${homecss.rightsideimage} img-fluid h-100`}
                              />
                            </div>
                            <div className="col-8 p-0 py-1">
                              <div className="card-body p-0">
                                <p
                                  className={`card-text font-weight-bold ${homecss.howtitlesmallres}`}
                                >
                                  {blog.title}
                                </p>
                                <p
                                  className={`card-text ${homecss.howtitlesmallupdated} `}
                                >
                                  <small className="text-muted">
                                    {`Last Updated On : ${moment(blog?.["updated_at"]).format("DD MMM, YYYY")}`}
                                  </small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    })}
                  </div>
                </div>
              </div>
            </> : <h2 className="text-center my-5">Blogs will come soon..</h2>}



            {/*   ==================================Knowlege Base========================== */}
            <div className={`mt-5 ${homecss.heading4}`}>
              <h3>KNOWLEDGE BASE </h3>
            </div>

            {pageData?.["knowledgeBase"].length > 0 ? <>
              <div className="container py-5">
                <div className="row">
                  {pageData?.["knowledgeBase"].slice(0, 3).map((blog) => {
                    return <div className="col-md-4 mb-4 mb-md-0">
                      <div className={`card`}>
                        <img
                          src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`}
                          className="w-100 img-fluid" alt="..." />
                        <div className="card-body py-3 px-2">
                          <NavLink to={`/blog?x=${blog?.uuid}`} className={homecss.navdecoration}>
                            <h5
                              className={`card-text p-0 mb-1 font-weight-bold ${homecss.howtitlesmallres}`}
                            >
                              {blog.title}
                            </h5>
                          </NavLink>
                          <p
                            className={`card-text p-0 ${homecss.howtitlesmallupdated} `}
                          >
                            <small class="text-muted">
                              {`Last Updated On : ${moment(blog?.["updated_at"]).format("DD MMM, YYYY")}`}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </div>

              <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                  {pageData?.["knowledgeBase"].slice(3).map((blog) => {
                    return <div className="col">
                      <NavLink to={`/blog?x=${blog?.uuid}`} className={homecss.navdecoration}>
                        <div
                          className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                        >
                          <div className="d-flex">
                            <img
                              src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`}

                              alt="..."
                              className={`img-fluid ${homecss.knowleSmallimage}`}
                            />
                            <div className="card-body">
                              <p
                                className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                              >
                                {blog.title}
                              </p>
                              <p className={`card-t p-0`}>
                                <small className="text-muted">{`${moment(blog?.["updated_at"]).format("DD MMM, YYYY")}`}</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  })}
                </div>
              </div></> : <h2 className="text-center my-5">Blogs will come soon..</h2>}



            {/*======================================BUSINES======================== */}
            <div className={`mt-5 mb-sm-5 mb-lg-0 ${homecss.heading}`}>
              <h3> BUSINESS</h3>
            </div>
            {pageData?.["business"].length > 0 ? <>
              <div className="container py-5">
                <div className="row">
                  {pageData?.["business"].slice(0, 3).map((blog) => {
                    return <div className="col-md-4 mb-4 mb-md-0">
                      <div className={`card`}>
                        <img
                          src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`}
                          className="w-100 img-fluid" alt="..." />
                        <div className="card-body py-3 px-2">
                          <NavLink to={`/blog?x=${blog?.uuid}`} className={homecss.navdecoration}>
                            <h5
                              className={`card-text p-0 mb-1 font-weight-bold ${homecss.howtitlesmallres}`}
                            >
                              {blog.title}
                            </h5>
                          </NavLink>
                          <p
                            className={`card-text p-0 ${homecss.howtitlesmallupdated} `}
                          >
                            <small class="text-muted">
                              {`Last Updated On : ${moment(blog?.["updated_at"]).format("DD MMM, YYYY")}`}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </div>

              <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                  {pageData?.["business"].slice(3).map((blog) => {
                    return <div className="col">
                      <NavLink to={`/blog?x=${blog?.uuid}`} className={homecss.navdecoration}>
                        <div
                          className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                        >
                          <div className="d-flex">
                            <img
                              src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`}

                              alt="..."
                              className={`img-fluid ${homecss.knowleSmallimage}`}
                            />
                            <div className="card-body">
                              <p
                                className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                              >
                                {blog.title}
                              </p>
                              <p className={`card-t p-0`}>
                                <small className="text-muted">{`${moment(blog?.["updated_at"]).format("DD MMM, YYYY")}`}</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  })}
                </div>
              </div></> : <h2 className="text-center my-5">Blogs will come soon..</h2>}
            {/*===============================LATEST ARTICLES============================= */}

            <div className={`mt-5 ${homecss.heading4}`}>
              <h3>LATEST ARTICLES (ALL)</h3>
            </div>

            <div className="container py-5">
              <div className="row">
                {pageData?.["latest"].slice(0, 3).map((blog) => {
                  return <div className="col-md-4 mb-4 mb-md-0">
                    <div className={`card`}>
                      <img
                        src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`}
                        className="w-100 img-fluid" alt="..." style={{ minHeight: "200px", maxHeight: "200px", objectFit: "contain" }} />
                      <div className="card-body py-3 px-2">
                        <NavLink to={`/blog?x=${blog?.uuid}`} className={homecss.navdecoration}>
                          <h5
                            className={`card-text p-0 mb-1 font-weight-bold ${homecss.howtitlesmallres}`}
                          >
                            {blog.title}
                          </h5>
                        </NavLink>
                        <p
                          className={`card-text p-0 ${homecss.howtitlesmallupdated} `}
                        >
                          <small class="text-muted">
                            <p style={{ margin: "0.5rem 0" }}>Last Updated On : {moment(blog?.["updated_at"]).format("DD MMM, YYYY")}</p>
                            {/* {`Last Updated On : ${moment(blog?.["updated_at"]).format("DD MMM, YYYY")}`} */}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                })}
              </div>
            </div>

            <div className="container mb-5">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {pageData?.["latest"].slice(3).map((blog) => {
                  return <div className="col">
                    <NavLink to={`/blog?x=${blog?.uuid}`} className={homecss.navdecoration}>
                      <div
                        className={`card mb-3  cardhowtoguide ${homecss.CardSmall}`}
                      >
                        <div className="d-flex">
                          <img
                            src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`}
                            alt="..."
                            className={`img-fluid ${homecss.knowleSmallimage}`}
                          />
                          <div className="card-body">
                            <p
                              className={`card-text font-weight-bold p-0 ${homecss.howtitlesmallupdated}`}
                            >
                              {blog.title}

                            </p>
                            <p className={`card-t p-0`}>
                              <small className="text-muted">
                                {`${moment(blog?.["updated_at"]).format("DD MMM, YYYY")}`}

                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                })}
              </div>
            </div>
          </>}
        </>
      }
    </Wrapper>
  );
};
export default Homeblog;
