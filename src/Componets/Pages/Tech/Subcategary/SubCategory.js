import React, { useEffect, useState } from 'react'
import subCategory from '../Subcategary/SubCategory.module.css'
import techBlog from '../TopCategory.module.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import data from '../../../../db.json'
import Wrapper from '../../../Wrapper'
import useQuery from '../../../../customer-hook/useQuery'
import axios from 'axios'


const SubCategory = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true)
    const [catArray, setCatArray] = useState([]);
    const [pageData, setPageData] = useState()
    const [currentCatName, setCurrentCatName] = useState("")
    const [isEmpty, setIsEmpty] = useState(false)

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
            setIsEmpty(!(!!Object.keys(res.data.info).filter((eachKey) => res.data.info[eachKey].length > 0).length))
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

    console.log(pageData?.["catWiseTopFiveBlogs"])

    return (
        <Wrapper>
            {!loading && !isEmpty ? <>

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
                                        <Link className={`p-2 ${techBlog.universalSubnavitems}`} style={{ cursor: "pointer" }} to={cat.route} >
                                            <span style={{ textTransform: "capitalize" }}>{cat.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {pageData?.["catWiseTopFiveBlogs"]?.map(catBlog => {
                    return (
                        <>
                            {
                                catBlog["blogs"].length > 0 ? (<>
                                    <div className="container mt-5">
                                        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 row-cols-lg-2">
                                            <div className={`col w-sm-100 p-0 d-flex mb-md-4 mb-lg-0`}>
                                                <div className='row row-cols-1 row-cols-md-2 mx-auto'>
                                                    {catBlog["blogs"].slice(0, 2)?.map((x) => {
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
                                                                            {/* <div className=`}>
                                                                </div> */}
                                                                        </div>
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            <div className={`col px-lg-3 w-md-100 d-flex flex-column justify-content-between`}>
                                                {catBlog["blogs"].slice(2).map((x) => {
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
                                </>) : <></>
                            }
                        </>
                    )
                })}

                {/*=========================== Our Favourite ======================== */}
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


                    <div className="d-grid  gap-1 d-md-flex justify-content-md-end my-3">
                        <button className={` btn btn-primary  ${subCategory.Prevbtn}`} type="button" onClick={scrollLeft}>
                            Prev
                        </button>
                        <button className={` btn btn-primary  ${subCategory.Nextbtn}`} type="button" onClick={scrollRight} >Next</button>
                    </div>
                </>}


                {/*===========================Latest========================*/}

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


                {showSeeMore && (
                    <div className='container'>
                        <div className='row'>
                            <div className='col-10'>
                                {data.Latest.map(latestdata => (
                                    <div key={latestdata.index}>
                                        <div className={`card mb-3    ${subCategory.latestcard}`} >
                                            <NavLink to="#" className={subCategory.navdecoration}>
                                                <div className="row no-gutters">
                                                    <div className="col-8   ">
                                                        <div className="card-body  p-0 pl-3">
                                                            <h5 className={`card-text font-weight-bold  ${subCategory.LatestTitle}`} >{latestdata.title}</h5>
                                                            <p className={`card-text font-weight-bold    ${subCategory.Latstdesc}`} >{latestdata.desc}</p>

                                                            <p className={`card-text    ${subCategory.LatestUpate}`} ><small className="text-muted">{latestdata.update}</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-2 ">

                                                        <img src={latestdata.image} alt="..." className={subCategory.Latestimage} />


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
                {/* <button
                    type="button"
                    className={` btn btn-sucess my-5 ${subCategory.SeeMorebtn}`}
                    onClick={
                        () => {
                            setShowSeeMore((prevSeeMore) => setShowSeeMore(!prevSeeMore))
                        }
                    }
                >
                    {showSeeMore ? "see more" : "see More"}

                </button> */}
            </> : <h2 className="text-center my-5">Blogs Comming Soon!</h2>}
        </Wrapper>
    )
}
export default SubCategory
