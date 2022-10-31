import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import moneyblog from '../Money/Moneyblog.module.css'
import data from '../../../db.json'
export const Moneyblog = () => {

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
            <div className={moneyblog.MainTitle}>
                <h1>Invest in yourself</h1>

            </div>
            <div className="grid container verticalsubnav next-page-hide py-5">
                <div className="universalSubnav">
                    <div className="universalSubnav_scrollWrapper">
                        <div className="universalSubnav_items" section="category">

                            <NavLink className={`p-2  ${moneyblog.universalSubnavitems}`} to="/money">Money</NavLink>
                            <NavLink className={`p-2  ${moneyblog.universalSubnavitems}`} to="#" >Credit Cards </NavLink>
                            <NavLink className={` p-2 ${moneyblog.universalSubnavitems}`} to="#" >Mortgages</NavLink>
                            <NavLink className={` p-2 ${moneyblog.universalSubnavitems}`} to="#" >Insurance</NavLink>
                            <NavLink className={` p-2 ${moneyblog.universalSubnavitems}`} to="#" >Loans</NavLink>
                            <NavLink className={` p-2 ${moneyblog.universalSubnavitems}`} to="#" >Cryptocurrency</NavLink>
                            <NavLink className={` p-2 ${moneyblog.universalSubnavitems}`} to="#" >Banking</NavLink>
                            <NavLink className={` p-2 ${moneyblog.universalSubnavitems}`} to="#" >Investing</NavLink>
                            <NavLink className={` p-2 ${moneyblog.universalSubnavitems}`} to="#" >Taxes</NavLink>

                        </div>

                    </div>


                </div>

            </div>

            {/*================================================================================= */}
            {data.Experiences.map(record => {
                return (
                    <div key={record.index}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5  mb-3" >
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.MoneyCard}`}  >

                                            <img src={record.image} className={moneyblog.TechImage} alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${moneyblog.cardtext}`} >{record.title} </h5>
                                                <p className={`card-contain  ${moneyblog.cardContaine}`}>
                                                    {record.containe}
                                                </p>

                                                <p className="card-text"><small class="text-muted">{record.update}</small></p>
                                            </div>

                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col-5  ">
                                    <div className={`card mb-3    ${moneyblog.howtocardright}`} >
                                        <NavLink to="#" className={moneyblog.navdecoration}>
                                            <div className="row no-gutters">
                                                <div className="col-6   ">
                                                    <div className="card-body  p-0 pl-3">
                                                        <p className={`card-text font-weight-bold    ${moneyblog.Techsmallres}`} >{record.title2}</p>

                                                        <p className={`card-text    ${moneyblog.TechUpate}`} ><small className="text-muted">Last updated: january 15,2021</small></p>
                                                    </div>
                                                </div>
                                                <div className="col-4 ">

                                                    <img src={record.image2} alt="..." className={moneyblog.Leftsideimage} />


                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className={`card mb-3    ${moneyblog.howtocardright}`} >
                                        <NavLink to="#" className={moneyblog.navdecoration}>
                                            <div className="row no-gutters">
                                                <div className="col-6   ">
                                                    <div className="card-body  p-0 pl-3">
                                                        <p className={`card-text font-weight-bold    ${moneyblog.Techsmallres}`} >{record.title3}</p>

                                                        <p className={`card-text    ${moneyblog.TechUpate}`} ><small className="text-muted">Last updated: january 15,2021</small></p>
                                                    </div>
                                                </div>
                                                <div className="col-4 ">

                                                    <img src={record.image3} alt="..." className={moneyblog.Leftsideimage} />


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

            <div className={moneyblog.TechHeading}>
                Our Favorite Picks

                <NavLink to="#" className={moneyblog.navourfavorite}>All best</NavLink>

            </div>




            <div className='container my-5'>

                <div className='row'>

                    <div className={`col-12  ${moneyblog.fouratesColums} ${moneyblog.scroll} `} id="slider">

                        {data.Fourate.map(fouratedata => {
                            return (
                                <div key={fouratedata.index} className={moneyblog.fouratecard}>

                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.FourateCard}`}  >

                                            <img src={fouratedata.image} className={moneyblog.FourateImage} alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${moneyblog.Ourtext}`} >{fouratedata.title} </h5>


                                                <p className={`  ${moneyblog.Updated}`} ><small class="text-muted"> {fouratedata.update}</small></p>
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
                <button className={` btn btn-primary  ${moneyblog.Prevbtn}`} type="button" onClick={scrollLeft}>
                    Prev
                </button>
                <button className={` btn btn-primary  ${moneyblog.Nextbtn}`} type="button" onClick={scrollRight} >Next</button>
            </div>

            {/*=================================Money Deals======================= */}
            <div className={moneyblog.TechHeading}>
                Money Deals

                <NavLink to="#" className={moneyblog.navourfavorite}>All deals</NavLink>

            </div>

            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${moneyblog.TechDealsColums}`} >
                        {data.TechDeals.map(techdealsdata => {
                            return (
                                <div key={techdealsdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsCards}`}  >

                                            <img src={techdealsdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${moneyblog.TechDealsTitle}`} >{techdealsdata.title}</h5>

                                                <p className={`card-contain  ${moneyblog.TechDealscardContaine}`}>
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
                    <div className={`col-md-5  ${moneyblog.TechDealsRightColums}`}>
                        {data.TechRight.map(techrightdata => {
                            return (
                                <div key={techrightdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${moneyblog.TechDealRightTile}`} >{techrightdata.title}</p>
                                                <p className={`card-contain  ${moneyblog.TechDealsRightContaine}`}>
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


            {/*===========================Cradit Cards======================== */}

            <div className={moneyblog.TechHeading}>
                Credit Cards

                <NavLink to="#" className={moneyblog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${moneyblog.TechDealsColums}`} >
                        {data.Mobaile.map(mobailedata => {
                            return (
                                <div key={mobailedata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsCards}`}  >

                                            <img src={mobailedata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${moneyblog.TechDealsTitle}`} >{mobailedata.title}</h5>

                                                <p className={`card-contain  ${moneyblog.TechDealscardContaine}`}>
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
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${moneyblog.TechDealRightTile}`} >{mobailerightdata.title}</p>
                                                <p className={`card-contain  ${moneyblog.TechDealsRightContaine}`}>
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

            {/*=========================== Mortgages======================== */}

            <div className={moneyblog.TechHeading}>
                Mortgages

                <NavLink to="#" className={moneyblog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${moneyblog.TechDealsColums}`} >
                        {data.Computing.map(computingdata => {
                            return (
                                <div key={computingdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsCards}`}  >

                                            <img src={computingdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${moneyblog.TechDealsTitle}`} >{computingdata.title}</h5>

                                                <p className={`card-contain  ${moneyblog.TechDealscardContaine}`}>
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
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${moneyblog.TechDealRightTile}`} >{computingRightdata.title}</p>
                                                <p className={`card-contain  ${moneyblog.TechDealsRightContaine}`}>
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

            {/*=========================== Insurance======================== */}

            <div className={moneyblog.TechHeading}>
                Insurance

                <NavLink to="#" className={moneyblog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${moneyblog.TechDealsColums}`} >
                        {data.Gaming.map(gamingdata => {
                            return (
                                <div key={gamingdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsCards}`}  >

                                            <img src={gamingdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${moneyblog.TechDealsTitle}`} >{gamingdata.title}</h5>

                                                <p className={`card-contain  ${moneyblog.TechDealscardContaine}`}>
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
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${moneyblog.TechDealRightTile}`} >{gamingRightdata.title}</p>
                                                <p className={`card-contain  ${moneyblog.TechDealsRightContaine}`}>
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

            </div>


            {/*===========================Loans======================== */}

            <div className={moneyblog.TechHeading}>
                Loans

                <NavLink to="#" className={moneyblog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${moneyblog.TechDealsColums}`} >
                        {data.HomeEntertainment.map(homegdata => {
                            return (
                                <div key={homegdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsCards}`}  >

                                            <img src={homegdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${moneyblog.TechDealsTitle}`} >{homegdata.title}</h5>

                                                <p className={`card-contain  ${moneyblog.TechDealscardContaine}`}>
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
                        {data.EntertainmentRight.map(entertainmentRightdata => {
                            return (
                                <div key={entertainmentRightdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${moneyblog.TechDealRightTile}`} >{entertainmentRightdata.title}</p>
                                                <p className={`card-contain  ${moneyblog.TechDealsRightContaine}`}>
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
            {/*===========================Cryptocurrency======================== */}

            <div className={moneyblog.TechHeading}>
                Cryptocurrency

                <NavLink to="#" className={moneyblog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${moneyblog.TechDealsColums}`} >
                        {data.Services.map(servicesdata => {
                            return (
                                <div key={servicesdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsCards}`}  >

                                            <img src={servicesdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${moneyblog.TechDealsTitle}`} >{servicesdata.title}</h5>

                                                <p className={`card-contain  ${moneyblog.TechDealscardContaine}`}>
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
                        {data.SoftwareRight.map(softwareRightdata => {
                            return (
                                <div key={softwareRightdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${moneyblog.TechDealRightTile}`} >{softwareRightdata.title}</p>
                                                <p className={`card-contain  ${moneyblog.TechDealsRightContaine}`}>
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

            {/*===========================Banking======================== */}

            <div className={moneyblog.TechHeading}>
                Banking

                <NavLink to="#" className={moneyblog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${moneyblog.TechDealsColums}`} >
                        {data.Banking.map(Bankingdata => {
                            return (
                                <div key={Bankingdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsCards}`}  >

                                            <img src={Bankingdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${moneyblog.TechDealsTitle}`} >{Bankingdata.title}</h5>

                                                <p className={`card-contain  ${moneyblog.TechDealscardContaine}`}>
                                                    {Bankingdata.description}
                                                </p>
                                                <p className="card-text"><small className="text-muted">{Bankingdata.update}</small></p>
                                            </div>

                                        </div>
                                    </NavLink>


                                </div>
                            )
                        })}

                    </div>
                    <div className='col-md-6'>
                        {data.BankingRight.map(BankingRightdata => {
                            return (
                                <div key={BankingRightdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${moneyblog.TechDealRightTile}`} >{BankingRightdata.title}</p>
                                                <p className={`card-contain  ${moneyblog.TechDealsRightContaine}`}>
                                                    {BankingRightdata.description}
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
            {/*===========================Investing======================== */}

            <div className={moneyblog.TechHeading}>
                Investing

                <NavLink to="#" className={moneyblog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${moneyblog.TechDealsColums}`} >
                        {data.Investing.map(Investingdata => {
                            return (
                                <div key={Investingdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsCards}`}  >

                                            <img src={Investingdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${moneyblog.TechDealsTitle}`} >{Investingdata.title}</h5>

                                                <p className={`card-contain  ${moneyblog.TechDealscardContaine}`}>
                                                    {Investingdata.description}
                                                </p>
                                                <p className="card-text"><small className="text-muted">{Investingdata.update}</small></p>
                                            </div>

                                        </div>
                                    </NavLink>


                                </div>
                            )
                        })}




                    </div>
                    <div className='col-md-6'>
                        {data.InvestingRight.map(InvestingRightdata => {
                            return (
                                <div key={InvestingRightdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${moneyblog.TechDealRightTile}`} >{InvestingRightdata.title}</p>
                                                <p className={`card-contain  ${moneyblog.TechDealsRightContaine}`}>
                                                    {InvestingRightdata.description}
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

            {/*===========================Taxes======================== */}

            <div className={moneyblog.TechHeading}>
                Taxes

                <NavLink to="#" className={moneyblog.navourfavorite}>See All</NavLink>

            </div>
            <div className='container'>
                <div className='row '>
                    <div className={`col-6  ${moneyblog.TechDealsColums}`} >
                        {data.Taxes.map(Taxesdata => {
                            return (
                                <div key={Taxesdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsCards}`}  >

                                            <img src={Taxesdata.image} class="card-img-top" alt="bestfree" />
                                            <div className="card-body">

                                                <h5 className={`card-text font-weight-bold  ${moneyblog.TechDealsTitle}`} >{Taxesdata.title}</h5>

                                                <p className={`card-contain  ${moneyblog.TechDealscardContaine}`}>
                                                    {Taxesdata.description}
                                                </p>
                                                <p className="card-text"><small className="text-muted">{Taxesdata.update}</small></p>
                                            </div>

                                        </div>
                                    </NavLink>


                                </div>
                            )
                        })}




                    </div>
                    <div className='col-md-6'>
                        {data.TaxesRight.map(TaxesRightdata => {
                            return (
                                <div key={TaxesRightdata.index}>
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className={`card  ${moneyblog.TechDealsRightCards}`} >
                                            <div className="card-body  p-0 pl-3">
                                                <p className={`card-text font-weight-bold    ${moneyblog.TechDealRightTile}`} >{TaxesRightdata.title}</p>
                                                <p className={`card-contain  ${moneyblog.TechDealsRightContaine}`}>
                                                    {TaxesRightdata.description}
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

            <div className={moneyblog.TechHeading}>
                Latest

            </div>

            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-10'>
                        {data.Latest.map(latestdata => (
                            <div key={latestdata.index}>
                                <div className={`card mb-3    ${moneyblog.latestcard}`} >
                                    <NavLink to="#" className={moneyblog.navdecoration}>
                                        <div className="row no-gutters">
                                            <div className="col-8   ">
                                                <div className="card-body  p-0 pl-3">
                                                    <h5 className={`card-text font-weight-bold  ${moneyblog.LatestTitle}`} >{latestdata.title}</h5>
                                                    <p className={`card-text font-weight-bold    ${moneyblog.Latstdesc}`} >{latestdata.desc}</p>

                                                    <p className={`card-text    ${moneyblog.LatestUpate}`} ><small className="text-muted">{latestdata.update}</small></p>
                                                </div>
                                            </div>
                                            <div className="col-2 ">

                                                <img src={latestdata.image} alt="..." className={moneyblog.Latestimage} />


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
                                    <div className={`card mb-3    ${moneyblog.latestcard}`} >
                                        <NavLink to="#" className={moneyblog.navdecoration}>
                                            <div className="row no-gutters">
                                                <div className="col-8   ">
                                                    <div className="card-body  p-0 pl-3">
                                                        <h5 className={`card-text font-weight-bold  ${moneyblog.LatestTitle}`} >{latestdata.title}</h5>
                                                        <p className={`card-text font-weight-bold    ${moneyblog.Latstdesc}`} >{latestdata.desc}</p>

                                                        <p className={`card-text    ${moneyblog.LatestUpate}`} ><small className="text-muted">{latestdata.update}</small></p>
                                                    </div>
                                                </div>
                                                <div className="col-2 ">

                                                    <img src={latestdata.image} alt="..." className={moneyblog.Latestimage} />


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
            className={` btn btn-sucess my-5 ${moneyblog.SeeMorebtn}`}
            onClick={
                ()=>{
                    setShowSeeMore((prevSeeMore)=>setShowSeeMore(!prevSeeMore))
                }
            }
            >
                {showSeeMore ? "see more": "see More"}
                
                </button> */}



        </>

    )
}
export default Moneyblog