import React, { useEffect, useState } from "react";
import topCategory from "../Tech/TopCategory.module.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import data from "../../../db.json";
import Wrapper from "../../Wrapper";
import useQuery from "../../../customer-hook/useQuery";
import axios from 'axios'
import TopCat from "../TopCat/TopCat";

export const TopCategory = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true)
    const [catArray, setCatArray] = useState([]);
    const [pageData, setPageData] = useState()
    const [isEmpty, setIsEmpty] = useState(false)
    const query = useQuery()

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_IMG_BASEURL}/api/allCategories?parent=${query.get('x')}`).then((res) => {
            const mainCat = { name: location.pathname.replace("/", ""), uuid: query.get("x"), isMain: true }
            setCatArray([mainCat, ...res.data.info.map(x => { return { ...x, isMain: false } })])
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
        })
    }, [location])

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_IMG_BASEURL}/api/categoryPage?x=${query.get('x')}`).then((res) => {
            setPageData(res.data.info)
            setIsEmpty(!(!!Object.keys(res.data.info).filter((eachKey) => res.data.info[eachKey].length > 0).length))
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
        })
    }, [location])



    return (
        <Wrapper>
            {!loading && <>
                <div className="grid container verticalsubnav p-0 next-page-hide py-5">
                    <div className="universalSubnav">
                        <div className="universalSubnav_scrollWrapper">
                            <div className="universalSubnav_items" section="category">
                                {catArray?.map((cat) => {
                                    return (
                                        <Link className={`p-2  ${topCategory.universalSubnavitems}`} style={{ cursor: "pointer" }} to={`${cat.isMain ? `/${cat.name.replace(" ", "-").toLowerCase()}?x=${cat.uuid}` : `/${location.pathname.replace("/", "").replace(" ", "-").toLowerCase()}/${cat.name.replace(" ", "-").toLowerCase()}?x=${query.get("x")}&y=${cat.uuid}`}`} >
                                            <span style={{ textTransform: "capitalize" }}>{cat.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {isEmpty ? <h2 className="text-center my-5">Blogs Comming Soon!</h2> : <TopCat pageData={pageData} />}

            </>}

        </Wrapper>
    );
};
export default TopCategory;
