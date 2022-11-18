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

            <div className="container my-5">
                <div className={`row justify-content-between`}>
                    <div className="col-md-6 h-100 mb-5 mb-md-0">
                        {pageData?.["topBlogs"]?.slice(0, 1)?.map((blog) => {
                            return (
                                <div className={`card px-md-4 border-0`}>
                                    <NavLink to={`/blog?x=${blog?.uuid}`} className={`${techBlog.navdecoration} border`}>
                                        <img src={`${process.env.REACT_APP_IMG_BASEURL}/${blog["thumbnail_img"]}`} className={`h-50 w-100`} style={{ width: "100%" }} alt="..." />
                                        <div className="card-body p-3">
                                            <h5 className={`card-text font-weight-bold ${techBlog.howlargetitle}`} >{blog?.title}</h5>
                                        </div>
                                        <div className="card-info p-3">
                                            <p className="ml-3" style={{ fontSize: "15px" }}>{`Last Updated On : ${blog?.["updated_at"]}`}</p>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-md-6 px-md-2 px-lg-5 p-0 d-flex flex-column justify-content-between">
                        {pageData?.["topBlogs"]?.slice(1, 3)?.map((blog) => {
                            return (
                                <div className={`card mb-4 mb-md-0`} style={{ minHeight: "40%" }} >
                                    <NavLink to={`/blog?x=${blog.uuid}`} className={`${techBlog.navdecoration} d-block h-100`}>
                                        <div className="row no-gutters h-100">
                                            <div className="col-7 pl-4 pr-2 py-2">
                                                <div className="card-body p-0">
                                                    <p className={`card-text font-weight-bold px-2 ${techBlog.howtitlesmallres}`} >{blog.title}</p>
                                                    <p className={`card-text px-2 ${techBlog.howtitlesmallupdated} `} ><small className="text-muted">{`${blog["updated_at"]}`}</small></p>
                                                </div>
                                            </div>
                                            <div className="col-5 p-0 h-100">
                                                <img className={`img-fluid h-100`} src={`${process.env.REACT_APP_IMG_BASEURL}/${blog?.["thumbnail_img"]}`} />
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

            {pageData?.["favoritePicks"].length > 0 && <>
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
            </>}

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

                        <div className="container mt-5">
                            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 row-cols-lg-2">
                                <div className={`col w-sm-100 p-0 d-flex mb-md-4 mb-lg-0`}>
                                    <div className='row row-cols-1 row-cols-md-2 mx-auto'>
                                        {category["blogs"].slice(0, 2)?.map((x) => {
                                            return (
                                                <div key={x.index} className="col mb-4">
                                                    <NavLink to={`/blog?x=${x.uuid}`} className={techBlog.navdecoration}>
                                                        <div className={`card`}>
                                                            <img src={`${process.env.REACT_APP_IMG_BASEURL}/${x["thumbnail_img"]}`} className={`h-50 w-100`} style={{ width: "100%" }} alt="..." />
                                                            <div className="card-body p-0">
                                                                <div className="card-body p-sm-4 p-3">
                                                                    <h5 className={`card-text font-weight-bold mb-4 ${techBlog.howlargetitle}`} >{x.title}</h5>
                                                                    <p className={`card-text font-weight-bold ${techBlog.howtitlesmallupdated} m-0`} > {`${x?.["updated_at"]}`}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className={`col px-lg-3 w-md-100 d-flex flex-column justify-content-between`}>
                                    {category["blogs"].slice(2).map((x) => {
                                        return (
                                            <div key={x.index}>
                                                <NavLink to={`/blog?x=${x.uuid}`} className={techBlog.navdecoration}>
                                                    <div className={`${techBlog.TechDealsRightCards}`}>
                                                        <div className="p-2 border border-1 rounded-2">
                                                            <p className={`font-weight-bold m-0 ${techBlog.TechDealRightTile}`}>{x.title}</p>
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

            {/*===========================Latest======================== */}

            <div className={techBlog.TechHeading}>Latest</div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-9">
                        {pageData?.["latestBlogs"].map((latestdata) => (
                            <NavLink to={`/blog?x=${latestdata.uuid}`} className={techBlog.navdecoration}>
                                <div key={latestdata.uuid} className={`mb-4 border border-1`} style={{ height: "18vh" }}>
                                    <div className="row w-100 no-gutters m-0 h-100">
                                        <div className="col-9 p-0">
                                            <div className="card-body p-2">
                                                <h5 className={`card-text font-weight-bold ${techBlog.howtitlesmallres}`}>{latestdata.title}</h5>

                                                <p className={`card-text pl-5 ${techBlog.howtitlesmallupdated}`}>
                                                    <small className="text-muted">{`${latestdata.updated_at}`}</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-3 p-0 h-100">
                                            <img src={`${process.env.REACT_APP_IMG_BASEURL}/${latestdata?.["thumbnail_img"]}`} alt="..." className={`w-100 h-100`} />
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