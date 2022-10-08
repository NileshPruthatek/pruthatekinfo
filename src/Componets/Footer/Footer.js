import React from 'react'
import footerstyle from '../Footer/footer.module.css'
import footerLogo from '../logoimage/NEW LOGO-03.png'
import facebook from '../../assets/images/FACEBOOK ICON-01.png';
import insta from '../../assets/images/INSTA  ICON-02.png';
import twitter from '../../assets/images/TWITTER  ICON-03.png';
import indeed from '../../assets/images/LINKDIN  ICON-04.png';
export const Footer = () => {
    return (
        <>
            <div className={footerstyle.footer}>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-6 col-lg-3 mb-3 ">
                            <div className='footerlogo'>
                                <img src={footerLogo} className={footerstyle.footerlogo} alt='footer logo' />
                            </div>
                        </div>
                        <div className={`col-md-6 col-lg-3 mb-3  ${footerstyle.boderstyle}`}>

                            <ul className={footerstyle.underListItem} >
                                <li className={footerstyle.title}>OTHER LINKS</li>
                                <li className={footerstyle.ListItem}><a href="/#">Top List</a></li>
                                <li className={footerstyle.ListItem}><a href="/#">How To</a></li>
                                <li className={footerstyle.ListItem}><a href="/#">Knowledge Base</a></li>
                                <li className={footerstyle.ListItem}><a href="/#">Review</a></li>

                            </ul>

                        </div>
                        <div className={`col-md-6 col-lg-3 mb-3  ${footerstyle.boderstyle}`}>

                            <ul className={footerstyle.underListItem} >
                                <li className={footerstyle.title}>SHORT CUT</li>
                                <li className={footerstyle.ListItem}><a href="/#">Top List</a></li>
                                <li className={footerstyle.ListItem}><a href="/#">How To</a></li>
                                <li className={footerstyle.ListItem}><a href="/#">Knowledge Base</a></li>
                                <li className={footerstyle.ListItem}><a href="/#">Review</a></li>

                            </ul>

                        </div>
                        <div className={`col-md-6 col-lg-3 mb-3  ${footerstyle.boderstyle}`}>
                            <ul>
                                <li className={footerstyle.title } style={{marginBottom:"10px"}}>NEWSLETTER</li>
                                <li className={footerstyle.ListItem} style={{listStyle:"none",marginBottom:"10px" }}>
                                    <form action="#" method="post">
                                        <input type="email" name="email" placeholder="Email*" maxlength="80" required  className={footerstyle.Emailinput}/>
                                        <button className={footerstyle.btn1}><i className={ ` fa fa-paper-plane ${footerstyle.icon}`}></i></button>
                                    </form>
                                </li>
                                <li className={footerstyle.ListItem} style={{listStyle:"none"}}>
                                    <h5 className={footerstyle.title}>Follow Us:</h5>
                                    <img src={facebook} alert=" my aswome facebbok" className={`m-2 ${footerstyle.socialicon}`} />
                                    <img src={insta} alert=" my aswome insta" className={`m-2 ${footerstyle.socialicon}`} />
                                    <img src={twitter} alert="  my aswome twitter" className={`m-2 ${footerstyle.socialicon}`} />
                                    <img src={indeed} alert="  my aswome indeed" className={`m-2 ${footerstyle.socialicon}`} />
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer