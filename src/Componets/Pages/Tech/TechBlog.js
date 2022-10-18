import React, { useState } from 'react'
import techBlog from '../Tech/TechBlog.module.css'
import { NavLink } from 'react-router-dom'

import data from '../../../db.json'
export const TechBlog = () => {
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

        <>
            <div className="grid container verticalsubnav next-page-hide py-5">
                <div className="universalSubnav">
                    <div className="universalSubnav_scrollWrapper">
                        <div className="universalSubnav_items" section="category">

                            <NavLink className={`p-2  ${techBlog.universalSubnavitems}`} to="/Tech">Tech</NavLink>
                            <NavLink className={`p-2  ${techBlog.universalSubnavitems}`} to="#" >Home Entertainment</NavLink>
                            <NavLink className={` p-2 ${techBlog.universalSubnavitems}`} to="/mobile" >Mobile</NavLink>
                            <NavLink className={` p-2 ${techBlog.universalSubnavitems}`} to="#" >Computing</NavLink>
                            <NavLink className={` p-2 ${techBlog.universalSubnavitems}`} to="#" >Services & Software</NavLink>
                            <NavLink className={` p-2 ${techBlog.universalSubnavitems}`} to="#" >Gaming</NavLink>

                        </div>

                    </div>


                </div>

            </div>


            {data.Experiences.map(record => {
                return (
                    <div key={record.index}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5  mb-3" >
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechCard}`}  >

                                            <img src={record.image} className={techBlog.TechImage} alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${techBlog.cardtext}`} >{record.title} </h5>
                                                <p className={`card-contain  ${techBlog.cardContaine}`}>
                                                    {record.containe}
                                                </p>

                                                <p className="card-text"><small class="text-muted">{record.update}</small></p>
                                            </div>

                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-5  ">
                                    <div className={`card mb-3    ${techBlog.howtocardright}`} >
                                        <NavLink to="#" className={techBlog.navdecoration}>
                                            <div className="row no-gutters">
                                                <div className="col-6   ">
                                                    <div className="card-body  p-0 pl-3">
                                                        <p className={`card-text font-weight-bold    ${techBlog.Techsmallres}`} >{record.title2}</p>

                                                        <p className={`card-text    ${techBlog.TechUpate}`} ><small className="text-muted">Last updated: january 15,2021</small></p>
                                                    </div>
                                                </div>
                                                <div className="col-4 ">

                                                    <img src={record.image2} alt="..." className={techBlog.Leftsideimage} />


                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className={`card mb-3    ${techBlog.howtocardright}`} >
                                        <NavLink to="#" className={techBlog.navdecoration}>
                                            <div className="row no-gutters">
                                                <div className="col-6   ">
                                                    <div className="card-body  p-0 pl-3">
                                                        <p className={`card-text font-weight-bold    ${techBlog.Techsmallres}`} >{record.title3}</p>

                                                        <p className={`card-text    ${techBlog.TechUpate}`} ><small className="text-muted">Last updated: january 15,2021</small></p>
                                                    </div>
                                                </div>
                                                <div className="col-4 ">

                                                    <img src={record.image3} alt="..." className={techBlog.Leftsideimage} />


                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                )
            })}

            {/*===========================Our Favourite======================== */}

            <div className={techBlog.TechHeading}>
                Our Favorite Picks

                <NavLink to="#" className={techBlog.navourfavorite}>All best</NavLink>

            </div>


            {/* 
            <div style={{ marginBottom: "20px" }}>
                <div className={style["wrapper"]}>
                    <MdChevronLeft
                    size={40}
                    onClick={scrollLeft}
                    style={{ color: "black" }}
                    />
                    <div className={style["scroll"]} id="slider">
                    {data.map((productLink) => {
                        return (
                        <div>
                            <iframe
                            style={{ width: "120px", height: "240px" }}
                            marginwidth="0"
                            marginheight="0"
                            scrolling="no"
                            frameborder="0"
                            src={productLink}
                            ></iframe>
                        </div>
                        );
                    })}
                    </div>
                    <MdChevronRight onClick={scrollRight} size={40} />
                </div>
            */}



            <div className='container my-5'>

                <div className='row'>

                    <div className={`col-12  ${techBlog.fouratesColums} ${techBlog.scroll} `} id="slider">

                        {data.Fourate.map(fouratedata => {
                            return (
                                <div key={fouratedata.index} className={techBlog.fouratecard}>

                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.FourateCard}`}  >

                                            <img src={fouratedata.image} className={techBlog.FourateImage} alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${techBlog.Ourtext}`} >{fouratedata.title} </h5>


                                                <p className={`  ${techBlog.Updated}`} ><small class="text-muted"> {fouratedata.update}</small></p>
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
                <button className={` btn btn-primary  ${techBlog.Prevbtn}`} type="button" onClick={scrollLeft}>
                    Prev
                </button>
                <button className={` btn btn-primary  ${techBlog.Nextbtn}`} type="button" onClick={scrollRight} >Next</button>
            </div>

            {/*=================================Tech Deals======================= */}
            <div className={techBlog.TechHeading}>
                Tech Deals

                <NavLink to="#" className={techBlog.navourfavorite}>All deals</NavLink>

            </div>

            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${techBlog.TechDealsColums}`} >
                        {data.TechDeals.map(techdealsdata => {
                            return (
                                <div key={techdealsdata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsCards}`}  >

                                            <img src={techdealsdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${techBlog.TechDealsTitle}`} >{techdealsdata.title}</h5>

                                                <p className={`card-contain  ${techBlog.TechDealscardContaine}`}>
                                                    {techdealsdata.description}
                                                </p>
                                                <p className="card-text"><small className="text-muted">{techdealsdata.update}</small></p>
                                            </div>

                                        </div>
                                    </NavLink>


                                </div>
                            )
                        })}




                    </div>
                    <div className={`col-md-5  ${techBlog.TechDealsRightColums}`}>
                        {data.TechRight.map(techrightdata => {
                            return (
                                <div key={techrightdata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${techBlog.TechDealRightTile}`} >{techrightdata.title}</p>
                                                <p className={`card-contain  ${techBlog.TechDealsRightContaine}`}>
                                                    {techrightdata.description}
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
            {/*===========================Mobaile======================== */}

            <div className={techBlog.TechHeading}>
                Mobaile

                <NavLink to="/mobile" className={techBlog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${techBlog.TechDealsColums}`} >
                        {data.Mobaile.map(mobailedata => {
                            return (
                                <div key={mobailedata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsCards}`}  >

                                            <img src={mobailedata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${techBlog.TechDealsTitle}`} >{mobailedata.title}</h5>

                                                <p className={`card-contain  ${techBlog.TechDealscardContaine}`}>
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
                        {data.MobaileRight?.map(mobailerightdata => {
                            return (
                                <div key={mobailerightdata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${techBlog.TechDealRightTile}`} >{mobailerightdata.title}</p>
                                                <p className={`card-contain  ${techBlog.TechDealsRightContaine}`}>
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

            {/*=========================== Computing======================== */}

            <div className={techBlog.TechHeading}>
                Computing

                <NavLink to="#" className={techBlog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${techBlog.TechDealsColums}`} >
                        {data.Computing.map(computingdata => {
                            return (
                                <div key={computingdata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsCards}`}  >

                                            <img src={computingdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${techBlog.TechDealsTitle}`} >{computingdata.title}</h5>

                                                <p className={`card-contain  ${techBlog.TechDealscardContaine}`}>
                                                    {computingdata.description}
                                                </p>
                                                <p className="card-text"><small className="text-muted">{computingdata.update}</small></p>
                                            </div>

                                        </div>
                                    </NavLink>


                                </div>
                            )
                        })}




                    </div>
                    <div className='col-md-6'>
                        {data.ComputingRight.map(computingRightdata => {
                            return (
                                <div key={computingRightdata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${techBlog.TechDealRightTile}`} >{computingRightdata.title}</p>
                                                <p className={`card-contain  ${techBlog.TechDealsRightContaine}`}>
                                                    {computingRightdata.description}
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


            {/*=========================== Gaming======================== */}

            <div className={techBlog.TechHeading}>
                Gaming

                <NavLink to="#" className={techBlog.navourfavorite}>See All</NavLink>

            </div>
            {/* <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${techBlog.TechDealsColums}`} >
                        {data.Gaming.map(gamingdata => {
                            return (
                                <div key={gamingdata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsCards}`}  >

                                            <img src={gamingdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${techBlog.TechDealsTitle}`} >{gamingdata.title}</h5>

                                                <p className={`card-contain  ${techBlog.TechDealscardContaine}`}>
                                                    {gamingdata.description}
                                                </p>
                                                <p className="card-text"><small className="text-muted">{gamingdata.update}</small></p>
                                            </div>

                                        </div>
                                    </NavLink>


                                </div>
                            )
                        })}




                    </div>
                    <div className='col-md-6'>
                        {data.GamingRight.map(gamingRightdata => {
                            return (
                                <div key={gamingRightdata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${techBlog.TechDealRightTile}`} >{gamingRightdata.title}</p>
                                                <p className={`card-contain  ${techBlog.TechDealsRightContaine}`}>
                                                    {gamingRightdata.description}
                                                </p>

                                            </div>
                                        </div>
                                    </NavLink>

                                </div>
                            )
                        })}

                    </div>






                </div>

            </div> */}

            {/*===========================Home Entertainment======================== */}

            <div className={techBlog.TechHeading}>
                Home Entertainment

                <NavLink to="#" className={techBlog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${techBlog.TechDealsColums}`} >
                        {data.HomeEntertainment?.map(homegdata => {
                            return (
                                <div key={homegdata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsCards}`}  >

                                            <img src={homegdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${techBlog.TechDealsTitle}`} >{homegdata.title}</h5>

                                                <p className={`card-contain  ${techBlog.TechDealscardContaine}`}>
                                                    {homegdata.description}
                                                </p>
                                                <p className="card-text"><small className="text-muted">{homegdata.update}</small></p>
                                            </div>

                                        </div>
                                    </NavLink>


                                </div>
                            )
                        })}




                    </div>
                    <div className='col-md-6'>
                        {data.EntertainmentRight?.map(entertainmentRightdata => {
                            return (
                                <div key={entertainmentRightdata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${techBlog.TechDealRightTile}`} >{entertainmentRightdata.title}</p>
                                                <p className={`card-contain  ${techBlog.TechDealsRightContaine}`}>
                                                    {entertainmentRightdata.description}
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

            {/*===========================Services and Software======================== */}

            <div className={techBlog.TechHeading}>
                Services and Software

                <NavLink to="#" className={techBlog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${techBlog.TechDealsColums}`} >
                        {data.Services?.map(servicesdata => {
                            return (
                                <div key={servicesdata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsCards}`}  >

                                            <img src={servicesdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${techBlog.TechDealsTitle}`} >{servicesdata.title}</h5>

                                                <p className={`card-contain  ${techBlog.TechDealscardContaine}`}>
                                                    {servicesdata.description}
                                                </p>
                                                <p className="card-text"><small className="text-muted">{servicesdata.update}</small></p>
                                            </div>

                                        </div>
                                    </NavLink>


                                </div>
                            )
                        })}




                    </div>
                    <div className='col-md-6'>
                        {data.SoftwareRight?.map(softwareRightdata => {
                            return (
                                <div key={softwareRightdata.index}>
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className={`card  ${techBlog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${techBlog.TechDealRightTile}`} >{softwareRightdata.title}</p>
                                                <p className={`card-contain  ${techBlog.TechDealsRightContaine}`}>
                                                    {softwareRightdata.description}
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
            {/*===========================Latest======================== */}

            <div className={techBlog.TechHeading}>
                Latest

            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-10'>
                        {data.Latest?.map(latestdata => (
                            <div key={latestdata.index}>
                                <div className={`card mb-3    ${techBlog.latestcard}`} >
                                    <NavLink to="#" className={techBlog.navdecoration}>
                                        <div className="row no-gutters">
                                            <div className="col-8   ">
                                                <div className="card-body  p-0 pl-3">
                                                    <h5 className={`card-text font-weight-bold  ${techBlog.LatestTitle}`} >{latestdata.title}</h5>
                                                    <p className={`card-text font-weight-bold    ${techBlog.Latstdesc}`} >{latestdata.desc}</p>

                                                    <p className={`card-text    ${techBlog.LatestUpate}`} ><small className="text-muted">{latestdata.update}</small></p>
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

            {showSeeMore && (
                <div className='container'>
                    <div className='row'>
                        <div className='col-10'>
                            {data.Latest.map(latestdata => (
                                <div key={latestdata.index}>
                                    <div className={`card mb-3    ${techBlog.latestcard}`} >
                                        <NavLink to="#" className={techBlog.navdecoration}>
                                            <div className="row no-gutters">
                                                <div className="col-8   ">
                                                    <div className="card-body  p-0 pl-3">
                                                        <h5 className={`card-text font-weight-bold  ${techBlog.LatestTitle}`} >{latestdata.title}</h5>
                                                        <p className={`card-text font-weight-bold    ${techBlog.Latstdesc}`} >{latestdata.desc}</p>

                                                        <p className={`card-text    ${techBlog.LatestUpate}`} ><small className="text-muted">{latestdata.update}</small></p>
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
            )}

            {/*====================== see more================== */}
            <button
                type="button"
                className={` btn btn-sucess my-5 ${techBlog.SeeMorebtn}`}
                onClick={
                    () => {
                        setShowSeeMore((prevSeeMore) => setShowSeeMore(!prevSeeMore))
                    }
                }
            >
                {showSeeMore ? "see more" : "see More"}

            </button>

        </>
    )
}
export default TechBlog