import React, { useEffect, useState } from "react";
import techBlog from "../Tech/TechBlog.module.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import data from "../../../db.json";
import Wrapper from "../../Wrapper";
import useQuery from "../../../customer-hook/useQuery";
import axios from 'axios'
import TopCat from "../TopCat/TopCat";

export const TechBlog = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true)
    const [catArray, setCatArray] = useState([]);
    const [pageData, setPageData] = useState()
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
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
        })
    }, [])



    return (
        <Wrapper>
            {!loading && <>
                <div className="grid container verticalsubnav p-0 next-page-hide py-5">
                    <div className="universalSubnav">
                        <div className="universalSubnav_scrollWrapper">
                            <div className="universalSubnav_items" section="category">
                                {catArray?.map((cat) => {
                                    return (
                                        <Link className={`p-2  ${techBlog.universalSubnavitems}`} style={{ cursor: "pointer" }} to={`${cat.isMain ? `/${cat.name.replace(" ", "-").toLowerCase()}?x=${cat.uuid}` : `/${location.pathname.replace("/", "").replace(" ", "-").toLowerCase()}/${cat.name.replace(" ", "-").toLowerCase()}?x=${query.get("x")}&y=${cat.uuid}`}`} >
                                            <span style={{ textTransform: "capitalize" }}>{cat.name}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <TopCat pageData={pageData} />

            </>}

        </Wrapper>
    );
};
export default TechBlog;
