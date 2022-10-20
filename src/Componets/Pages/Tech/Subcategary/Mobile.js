import React, { useState } from 'react'
import mobile from '../Subcategary/Mobile.module.css'
import { NavLink } from 'react-router-dom'
import data from '../../../../db.json'
import Wrapper from '../../../Wrapper'
export const Mobile = () => {

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
            <>
                <div className={`my-3 ${mobile.MainTitleheading}`}>
                    <h1>Mobile</h1>
                </div>
                <div className={`my-3 ${mobile.MobilePara}`}>
                    <p>We deliver the best buying advice, news and how-to content on the coolest tech available.</p>
                </div>


                <div className="grid container verticalsubnav next-page-hide py-5">
                    <div className="universalSubnav">
                        <div className="universalSubnav_scrollWrapper">
                            <div className="universalSubnav_items" section="category">

                                <NavLink className={`p-2  ${mobile.universalSubnavitems}`} to="/Tech">Tech</NavLink>
                                <NavLink className={`p-2  ${mobile.universalSubnavitems}`} to="#" >Home Entertainment</NavLink>
                                <NavLink className={` p-2 ${mobile.universalSubnavitems}`} to="/mobile" >Mobile</NavLink>
                                <NavLink className={` p-2 ${mobile.universalSubnavitems}`} to="#" >Computing</NavLink>
                                <NavLink className={` p-2 ${mobile.universalSubnavitems}`} to="#" >Services & Software</NavLink>
                                <NavLink className={` p-2 ${mobile.universalSubnavitems}`} to="#" >Gaming</NavLink>

                            </div>

                        </div>


                    </div>

                </div>
                {/*===========================Mobaile======================== */}
                {/* 
<div className={mobile.TechHeading}>
                Mobaile

                <NavLink to="/mobile" className={mobile.navourfavorite}>See All</NavLink>

            </div>

            */}
                <div className='container'>
                    <div className='row '>
                        <div className={`col-6  ${mobile.TechDealsColums}`} >
                            {data.Mobaile.map(mobailedata => {
                                return (
                                    <div key={mobailedata.index}>
                                        <NavLink to="#" className={mobile.navdecoration}>
                                            <div className={`card  ${mobile.TechDealsCards}`}  >

                                                <img src={mobailedata.image} class="card-img-top" alt="bestfree" />
                                                <div className="card-body">

                                                    <h5 className={`card-text font-weight-bold  ${mobile.TechDealsTitle}`} >{mobailedata.title}</h5>

                                                    <p className={`card-contain  ${mobile.TechDealscardContaine}`}>
                                                        {mobailedata.description}
                                                    </p>
                                                    <p className="card-text"><small className="text-muted">{mobailedata.update}</small></p>
                                                </div>

                                            </div>
                                        </NavLink>


                                    </div>
                                )
                            })}




                        </div>
                        <div className='col-md-6'>
                            {data.MobaileRight.map(mobailerightdata => {
                                return (
                                    <div key={mobailerightdata.index}>
                                        <NavLink to="#" className={mobile.navdecoration}>
                                            <div className={`card  ${mobile.TechDealsRightCards}`} >
                                                <div className="card-body  p-0 pl-3">
                                                    <p className={`card-text font-weight-bold    ${mobile.TechDealRightTile}`} >{mobailerightdata.title}</p>
                                                    <p className={`card-contain  ${mobile.TechDealsRightContaine}`}>
                                                        {mobailerightdata.description}
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
                {/*===========================Our Top Picks======================== */}

                <div className={mobile.TechHeading}>
                    Our Top Picks

                    <NavLink to="#" className={mobile.navourfavorite}>All best</NavLink>

                </div>




                <div className='container my-5'>

                    <div className='row'>

                        <div className={`col-12  ${mobile.fouratesColums} ${mobile.scroll} `} id="slider">

                            {data.Fourate.map(fouratedata => {
                                return (
                                    <div key={fouratedata.index} className={mobile.fouratecard}>

                                        <NavLink to="#" className={mobile.navdecoration}>
                                            <div className={`card  ${mobile.FourateCard}`}  >

                                                <img src={fouratedata.image} className={mobile.FourateImage} alt="bestfree" />
                                                <div className="card-body">

                                                    <h5 className={`card-text font-weight-bold  ${mobile.Ourtext}`} >{fouratedata.title} </h5>


                                                    <p className={`  ${mobile.Updated}`} ><small class="text-muted"> {fouratedata.update}</small></p>
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

                {/*===========================Latest======================== */}

                <div className={mobile.TechHeading}>
                    Latest

                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-10'>
                            {data.Latest?.map(latestdata => (
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

            </>
        </Wrapper>
    )
}
export default Mobile
