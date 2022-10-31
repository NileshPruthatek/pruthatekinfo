import React, { useState } from 'react'
import techBlog from "../Tech/TopCategory.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import data from "../../../db.json";
import useQuery from '../../../customer-hook/useQuery';

const TopCat = ({ pageData }) => {
    const scrollLeft = () => {
        const scroll = document.getElementById("slider");
        scroll.scrollLeft = scroll.scrollLeft - 550;
    };

    const scrollRight = () => {
        const scroll = document.getElementById("slider");
        scroll.scrollLeft = scroll.scrollLeft + 550;
    };
    const [showSeeMore, setShowSeeMore] = useState(false);
    const query = useQuery()
    const location = useLocation()

    return (
        <>
            <div className="container">
                <div className="row justify-content-between align-items-around">
                    <div className="col-md-5 mb-3 p-0">
                        {pageData?.["topBlogs"]?.slice(0, 1)?.map((blog) => {
                            return (
                                <div className={`card mb-3 ${techBlog.howtocardright}`}>
                                    <NavLink to={`/blog?x=${blog?.uuid}`} className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechCard}`}>
                                            <img
                                                src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`}
                                                className={techBlog.TechImage} alt="bestfree" />
                                            <div className="card-body">
                                                <h5 className={`card-text text-capitalize font-weight-bold  ${techBlog.cardtext}`}>{blog?.title} </h5>

                                                <p className="card-text">
                                                    <small class="text-muted">{`Last Updated On : ${blog?.["updated_at"]}`}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-md-1 p-0"></div>
                    <div className="col-md-6 d-flex flex-column justify-content-between p-0">
                        {pageData?.["topBlogs"]?.slice(1, 3)?.map((blog) => {
                            return (
                                <div className={`card mb-3 ${techBlog.howtocardright}`}>
                                    <NavLink to={`/blog?x=${blog.uuid}`} className={techBlog.navdecoration}>
                                        <div className="row no-gutters">
                                            <div className="col-8 p-0">
                                                <div className="card-body p-3">
                                                    <p className={`card-text font-weight-bold ${techBlog.Techsmallres}`}>{blog.title}</p>

                                                    <p className={`card-text ${techBlog.TechUpate}`}>
                                                        <small className="text-muted">{`Last Updated On : ${blog["updated_at"]}`}</small>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <img src={`${process.env.REACT_APP_IMG_BASEURL}/${blog?.["thumbnail_img"]}`} alt="..." className={`${techBlog.Leftsideimage} py-1`} />
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/*===========================Our Favourite======================== */}

            <div className={techBlog.TechHeading}>
                Our Favorite Picks
                <NavLink to="#" className={techBlog.navourfavorite}>
                    All best
                </NavLink>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className={`col-12 p-0 ${techBlog.fouratesColums} ${techBlog.scroll} `} id="slider">
                        {pageData?.["favoritePicks"]?.map(x => {
                            return (
                                <div key={x.index} className={techBlog.fouratecard}>
                                    <NavLink to={`/blog?x=${x.uuid}`} className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.FourateCard}`}>
                                            <img src={`${process.env.REACT_APP_IMG_BASEURL}/${x?.["thumbnail_img"]}`} className={techBlog.FourateImage} alt="bestfree" />
                                            <div className="card-body">
                                                <h5 className={`card-text font-weight-bold text-capitalize ${techBlog.Ourtext}`}>{x.title} </h5>

                                                <p className={`  ${techBlog.Updated}`}>
                                                    <small class="text-muted"> {`${x?.["user"]?.["username"]} Last Updated On : ${x["updated_at"]}`}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="w-100 gap-1 d-md-flex justify-content-md-end my-3">
                    <button className={` btn btn-primary  ${techBlog.Prevbtn}`} type="button" onClick={scrollLeft}>
                        Prev
                    </button>
                    <button className={` btn btn-primary  ${techBlog.Nextbtn}`} type="button" onClick={scrollRight}>
                        Next
                    </button>
                </div>
            </div>

            {/*=================================Tech Deals======================= */}
            {pageData?.["catWiseTopFiveBlogs"]?.map(category => {
                return (
                    <>
                        <div className={techBlog.TechHeading}>
                            {category.name}
                            <NavLink to={`/${location.pathname.replace("/", "").replace(" ", "-").toLowerCase()}/${category.name.replace(" ", "-").toLowerCase()}?x=${query.get("x")}&y=${category.uuid}`}
                                className={techBlog.navourfavorite}>
                                See All
                            </NavLink>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className={`col-6 p-0 ${techBlog.TechDealsColums}`}>
                                    {category["blogs"].slice(0, 2)?.map((x) => {
                                        return (
                                            <div key={x.index}>
                                                <NavLink to={`/blog?x=${x.uuid}`} className={techBlog.navdecoration}>
                                                    <div className={`card  ${techBlog.TechDealsCards}`}>
                                                        <img src={`${process.env.REACT_APP_IMG_BASEURL}/${x?.["thumbnail_img"]}`} className="card-img-top" style={{ minHeight: "165px" }} alt="bestfree" />
                                                        <div className="card-body p-2">
                                                            <h5 className={`card-text font-weight-bold  ${techBlog.TechDealsTitle}`}>{x.title}</h5>

                                                            <p className="card-text">
                                                                <small className="text-muted">{`Last Updated On : ${x.updated_at}`}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className={`col-md-6 p-0  ${techBlog.TechDealsRightColums}`}>
                                    {category["blogs"].slice(2).map((x) => {
                                        return (
                                            <div key={x.index}>
                                                <NavLink to={`/blog?x=${x.uuid}`} className={techBlog.navdecoration}>
                                                    <div className={`card  ${techBlog.TechDealsRightCards}`}>
                                                        <div className="card-body  p-0 pl-3">
                                                            <p className={`card-text font-weight-bold    ${techBlog.TechDealRightTile}`}>{x.title}</p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}


            {/* ===========================Mobaile========================

                <div className={techBlog.TechHeading}>
                    Mobaile
                    <NavLink to="/mobile" className={techBlog.navourfavorite}>
                        See All
                    </NavLink>
                </div>
                <div className="container">
                    <div className="row ">
                        <div className={`col-6 p-0 ${techBlog.TechDealsColums}`}>
                            {data.Mobaile.map((mobailedata) => {
                                return (
                                    <div key={mobailedata.index}>
                                        <NavLink to="#" className={techBlog.navdecoration}>
                                            <div className={`card  ${techBlog.TechDealsCards}`}>
                                                <img src={mobailedata.image} class="card-img-top" alt="bestfree" />
                                                <div className="card-body">
                                                    <h5 className={`card-text font-weight-bold  ${techBlog.TechDealsTitle}`}>{mobailedata.title}</h5>

                                                    <p className={`card-contain  ${techBlog.TechDealscardContaine}`}>{mobailedata.description}</p>
                                                    <p className="card-text">
                                                        <small className="text-muted">{mobailedata.update}</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="col-md-6">
                            {data.MobaileRight?.map((mobailerightdata) => {
                                return (
                                    <div key={mobailerightdata.index}>
                                        <NavLink to="#" className={techBlog.navdecoration}>
                                            <div className={`card  ${techBlog.TechDealsRightCards}`}>
                                                <div className="card-body  p-0 pl-3">
                                                    <p className={`card-text font-weight-bold    ${techBlog.TechDealRightTile}`}>{mobailerightdata.title}</p>
                                                    <p className={`card-contain  ${techBlog.TechDealsRightContaine}`}>{mobailerightdata.description}</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div> */}

            {/*===========================Latest======================== */}

            <div className={techBlog.TechHeading}>Latest</div>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-12">
                        {pageData?.["latestBlogs"].map((latestdata) => (
                            <NavLink to={`/blog?x=${latestdata.uuid}`} className={techBlog.navdecoration}>
                                <div key={latestdata.uuid} className={`card mb-3 ${techBlog.latestcard}`}>
                                    <div className="row w-100 no-gutters">
                                        <div className="col-9 p-0">
                                            <div className="card-body  p-0 pl-3">
                                                <h5 className={`card-text font-weight-bold  ${techBlog.LatestTitle}`}>{latestdata.title}</h5>

                                                <p className={`card-text ${techBlog.LatestUpate}`}>
                                                    <small className="text-muted">{`Last Updated On : ${latestdata.updated_at}`}</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-3 p-0">
                                            <img src={`${process.env.REACT_APP_IMG_BASEURL}/${latestdata?.["thumbnail_img"]}`} alt="..." className={`${techBlog.Latestimage} p-1`} />
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            {
                showSeeMore && (
                    <div className="container">
                        <div className="row">
                            <div className="col-10">
                                {data.Latest.map((latestdata) => (
                                    <div key={latestdata.index}>
                                        <div className={`card mb-3    ${techBlog.latestcard}`}>
                                            <NavLink to="#" className={techBlog.navdecoration}>
                                                <div className="row no-gutters">
                                                    <div className="col-8   ">
                                                        <div className="card-body  p-0 pl-3">
                                                            <h5 className={`card-text font-weight-bold  ${techBlog.LatestTitle}`}>{latestdata.title}</h5>
                                                            <p className={`card-text font-weight-bold    ${techBlog.Latstdesc}`}>{latestdata.desc}</p>

                                                            <p className={`card-text    ${techBlog.LatestUpate}`}>
                                                                <small className="text-muted">{latestdata.update}</small>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 ">
                                                        <img src={latestdata.image} alt="..." className={techBlog.Latestimage} />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }

            {/*====================== see more================== */}
            {/* <button
                type="button"
                className={` btn btn-sucess my-5 ${techBlog.SeeMorebtn}`}
                onClick={() => {
                    setShowSeeMore((prevSeeMore) => setShowSeeMore(!prevSeeMore));
                }}
            >
                {showSeeMore ? "see more" : "see More"}
            </button> */}
        </>
    )
}

export default TopCat