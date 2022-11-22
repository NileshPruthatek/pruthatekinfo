import React, { useEffect, useState } from "react";
import topCategory from "../Tech/TopCategory.module.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Wrapper from "../../Wrapper";
import useQuery from "../../../customer-hook/useQuery";
import axios from 'axios'
import TopCat from "../TopCat/TopCat";
import { Helmet } from 'react-helmet';


export const TopCategory = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true)
    const [catArray, setCatArray] = useState([]);
    const [pageData, setPageData] = useState()
    const [isEmpty, setIsEmpty] = useState(false)
    const [currentTopCat, setCurrentTopCat] = useState(null)
    const navigate = useNavigate()
    const query = useQuery()
    let { catName } = useParams()

    const getAllCategories = async () => {
        return axios.get(`${process.env.REACT_APP_IMG_BASEURL}/api/allCategories?parent=${catName}`).then((res) => {
            setCatArray([...res.data.info.map(x => {
                if (x.slug === catName) {
                    setCurrentTopCat(x.name)
                    return { ...x, isMain: true }
                }
                return { ...x, isMain: false }
            })])
        })
    }

    const getCurrentPageData = async () => {
        return axios.get(`${process.env.REACT_APP_IMG_BASEURL}/api/categoryPage?x=${catName}`).then((res) => {
            setPageData(res.data.info)
            setIsEmpty(!(!!Object.keys(res.data.info).filter((eachKey) => res.data.info[eachKey].length > 0).length))
        })
    }

    useEffect(() => {
        (async () => {
            if (catName) {
                try {
                    setLoading(true)
                    await Promise.all([getAllCategories(), getCurrentPageData()])
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                    navigate("/error")
                }
            }
        })()
    }, [location])

    return (
        <Wrapper>
            {!loading && <>
                <Helmet>
                    <title>{`${currentTopCat} - Pruthatek Blogs`}</title>
                </Helmet>
                <div className="grid container verticalsubnav p-0 next-page-hide py-5">
                    <div className="universalSubnav">
                        <div className="universalSubnav_scrollWrapper">
                            <div className="universalSubnav_items" section="category">
                                {catArray?.map((cat) => {
                                    return (
                                        <Link className={`p-2  ${topCategory.universalSubnavitems}`} style={{ cursor: "pointer" }} to={`${cat.isMain ? `/${cat.slug.replace(" ", "-").toLowerCase()}` : `/${location.pathname.replace("/", "").replace(" ", "-").toLowerCase()}/${cat.slug.replace(" ", "-").toLowerCase()}`}`} >

                                            {cat.name === currentTopCat ? <span style={{ textTransform: "capitalize" }} className="fw-bold">{cat.name}</span> : <span style={{ textTransform: "capitalize" }}>{cat.name}</span>}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {isEmpty ? <h2 className="text-center my-5 vh-100">Blogs Comming Soon!</h2> : <TopCat pageData={pageData} />}
            </>}

        </Wrapper>
    );
};
export default TopCategory;
