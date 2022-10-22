import React, { useEffect, useState } from 'react'
import mobile from '../Subcategary/Mobile.module.css'
import techBlog from '../../Tech/TechBlog.module.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import data from '../../../../db.json'
import Wrapper from '../../../Wrapper'
import useQuery from '../../../../customer-hook/useQuery'
import axios from 'axios'


export const Mobile = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true)
    const [catArray, setCatArray] = useState([]);
    const [pageData, setPageData] = useState()
    const [currentCatName, setCurrentCatName] = useState("")
    const query = useQuery()

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_IMG_BASEURL}/api/allCategories?parent=null`).then((res) => {
            const currentMainCat = res.data.info?.find(x => x.uuid === query.get("x"))
            const mainCat = { name: currentMainCat.name, uuid: currentMainCat.uuid, isMain: true, route: `/${currentMainCat.name.replace(" ", "-").toLowerCase()}?x=${currentMainCat.uuid}` }
            setCatArray([mainCat, ...currentMainCat.sub_category?.map(x => {
                if (x.uuid === query.get("y")) setCurrentCatName(x.name)
                return { ...x, isMain: false, route: `/${currentMainCat.name.replace(" ", "-").toLowerCase()}/${x.name.replace(" ", "-").toLowerCase()}?x=${currentMainCat.uuid}&y=${x.uuid}` }
            })])
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
        })
    }, [location])

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_IMG_BASEURL}/api/categoryPage?x=${query.get('y')}`).then((res) => {
            setPageData(res.data.info)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
        })
    }, [location])

    const scrollLeft = () => {
        const scroll = document.getElementById("slider");
        scroll.scrollLeft = scroll.scrollLeft - 550;
    };

    const scrollRight = () => {
        const scroll = document.getElementById("slider");
        scroll.scrollLeft = scroll.scrollLeft + 550;
    };

    const [showSeeMore, setShowSeeMore] = useState(false);

    return (
        <Wrapper>
            {!loading && <>

                <div className={`my-3 container`}>
                    <h1>{currentCatName}</h1>
                    <p>We deliver the best buying advice, news and how-to content on the coolest tech available.</p>
                </div>

                <div className="grid container verticalsubnav p-0 next-page-hide py-5">
                    <div className="universalSubnav">
                        <div className="universalSubnav_scrollWrapper">
                            <div className="universalSubnav_items" section="category">
                                {catArray?.map((cat) => {
                                    return (
                                        <Link className={`p-2  ${techBlog.universalSubnavitems}`} style={{ cursor: "pointer" }} to={cat.route} >
                                            <span style={{ textTransform: "capitalize" }}>{cat.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/*===========================Our Favourite======================== */}
                {pageData?.["catWiseTopFiveBlogs"]?.map(catBlog => {
                    return (
                        <>
                            {
                                catBlog.length > 0 ? (<>
                                    <div className="container">
                                        <div className="row">
                                            <div className={`col-6 p-0 ${techBlog.TechDealsColums}`}>
                                                {catBlog.slice(0, 2)?.map((x) => {
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
                                                {catBlog.slice(2).map((x) => {
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
                                </>) : <></>
                            }
                        </>
                    )
                })}

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


                <div className="d-grid  gap-1 d-md-flex justify-content-md-end my-3">
                    <button className={` btn btn-primary  ${mobile.Prevbtn}`} type="button" onClick={scrollLeft}>
                        Prev
                    </button>
                    <button className={` btn btn-primary  ${mobile.Nextbtn}`} type="button" onClick={scrollRight} >Next</button>
                </div>

                {/*===========================Latest========================*/}

                <div className={techBlog.TechHeading}>Latest</div>

                <div className="container">
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

                {showSeeMore && (
                    <div className='container'>
                        <div className='row'>
                            <div className='col-10'>
                                {data.Latest.map(latestdata => (
                                    <div key={latestdata.index}>
                                        <div className={`card mb-3    ${mobile.latestcard}`} >
                                            <NavLink to="#" className={mobile.navdecoration}>
                                                <div className="row no-gutters">
                                                    <div className="col-8   ">
                                                        <div className="card-body  p-0 pl-3">
                                                            <h5 className={`card-text font-weight-bold  ${mobile.LatestTitle}`} >{latestdata.title}</h5>
                                                            <p className={`card-text font-weight-bold    ${mobile.Latstdesc}`} >{latestdata.desc}</p>

                                                            <p className={`card-text    ${mobile.LatestUpate}`} ><small className="text-muted">{latestdata.update}</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 ">

                                                        <img src={latestdata.image} alt="..." className={mobile.Latestimage} />


                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>

                                    </div>
                                ))}


                            </div>







                        </div>

                    </div>
                )}

                {/*====================== see more================== */}
                <button
                    type="button"
                    className={` btn btn-sucess my-5 ${mobile.SeeMorebtn}`}
                    onClick={
                        () => {
                            setShowSeeMore((prevSeeMore) => setShowSeeMore(!prevSeeMore))
                        }
                    }
                >
                    {showSeeMore ? "see more" : "see More"}

                </button>
            </>}
        </Wrapper>
    )
}
export default Mobile
