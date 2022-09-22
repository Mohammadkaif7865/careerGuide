import React from "react";
import { Link } from "react-router-dom";
import "./myCss.css";
export default function Footer() {
    return (
        <footer>
            <Link to="/">
                <div className="goto-top">
                    <h4>Back to top</h4>
                </div>
            </Link>
            <div className="foot-three-parts">
                <div className="foot-parts">
                    <p className="foot-sub-head">
                        <b> Get to Know Us</b>
                    </p>
                    <Link to="/">
                        <p>About Us</p>
                    </Link>
                    <Link to="/">
                        <p>Careers</p>
                    </Link>
                    <Link to="/">
                        <p>Press Releases</p>
                    </Link>

                    <Link to="/">
                        <p>Gift Link Smile</p>
                    </Link>

                    <p className="foot-sub-head">
                        <b>Connect with Us</b>
                    </p>
                    <Link to="/">
                        <p> Facebook</p>
                    </Link>
                    <Link to="/">
                        <p>Twitter</p>
                    </Link>
                    <Link to="/">
                        <p> Instagram</p>
                    </Link>
                </div>
                <div className="foot-parts">
                    <p className="foot-sub-head">
                        <b> Let Us Help You</b>
                    </p>
                    <Link to="/">
                        <p>COVID-19 and Amazon</p>
                    </Link>
                    <Link to="/">
                        <p> Your Account</p>
                    </Link>
                    <Link to="/">
                        <p> Returns Centre</p>
                    </Link>
                    <Link to="/">
                        <p> 100% Purchase Protection</p>
                    </Link>





                    <Link to="/">
                        <p> Help</p>
                    </Link>
                </div>
                <div className="foot-parts">
                    <p className="foot-sub-head">
                        <b>Make Money with Us</b>
                    </p>
                    <Link to="/">
                        <p>Sell on Amazon</p>
                    </Link>
                    <Link to="/">
                        <p>Sell under Amazon Accelerator</p>
                    </Link>

                    <Link to="/">
                        <p>Become an Affiliate</p>
                    </Link>
                    <Link to="/">
                        <p>Fulfillment by Amazon</p>
                    </Link>
                    <Link to="/">
                        <p>Advertise Your Products</p>
                    </Link>

                </div>
            </div>
            <div className="country-avail">
                <div className="amazon-country">
                    <Link to="/">
                        <img
                            src="https://i.ibb.co/w0BJt1L/cg-logo.png"
                            alt="img"
                            className="amazon-image-me"
                        />
                    </Link>

                    <Link to="/" style={{ display: "contents" }}>
                        <div className="language-select">
                            <i
                                className="bi bi-globe2"
                                style={{ color: "rgb(162, 160, 160)" }}
                            ></i>
                            <p style={{ paddingTop: "7px", fontSize: "15px" }}>English</p>
                            <div className="nav-up-down">
                                <i className="bi bi-chevron-expand"></i>
                            </div>
                            <div className="dropdown-region-lan-menu-my-2">
                                <i
                                    className="bi bi-caret-down-fill"
                                    style={{
                                        fontSize: "50px",
                                        color: "white",
                                        position: "absolute",
                                        bottom: "-40px",
                                        right: "5px",
                                    }}
                                ></i>
                                <div className="language">
                                    <input type="radio" name="language" id="English-2" value="English" />
                                    <label htmlFor="English-2">English</label>
                                </div>
                                <div className="language">
                                    <input type="radio" name="language" id="Hindi-2" value="Hindi" />
                                    <label htmlFor="Hindi-2">Hindi</label>
                                </div>
                                <div className="language">
                                    <input type="radio" name="language" id="Marathi-2" value="Marathi" />
                                    <label htmlFor="Marathi-2">Marathi</label>
                                </div>
                                <div className="language">
                                    <input type="radio" name="language" id="Tamil-2" value="Telugu" />
                                    <label htmlFor="Tamil-2">Tamil</label>
                                </div>
                                <div className="language">
                                    <input type="radio" name="language" id="Bangoli-2" value="Bangoli" />
                                    <label htmlFor="Bangoli-2">Bangoli</label>
                                </div>
                                <div className="language">
                                    <input type="radio" name="language" id="kannada" value="kannada" />
                                    <label htmlFor="kannada">Kannada</label>
                                </div>
                                <div className="language">
                                    <input type="radio" name="language" id="Urdu-2" value="Urdu" />
                                    <label htmlFor="Urdu-2">Urdu</label>
                                </div>
                                <div className="language">
                                    <input type="radio" name="language" id="Arabic-2" value="Arabic" />
                                    <label htmlFor="Arabic-2">Arabic</label>
                                </div>
                                <div className="language">
                                    <input type="radio" name="language" id="Malyali-2" value="Malyali" />
                                    <label htmlFor="Malyali-2">Malyali</label>
                                </div>
                                <div
                                    className="language-my"
                                    style={{ borderBottom: "2px solid rgb(189, 169, 169)" }}
                                >
                                    <input type="radio" name="language" id="Gujrati-2" value="Gujrati" />
                                    <label htmlFor="Gujrati-2">Gujarati</label>
                                </div>
                                <div className="change-region-my">
                                    <img
                                        src="https://img.icons8.com/color/25/000000/india.png"
                                        alt="img"
                                    />
                                    You are shopping at Amazon.in
                                    <p style={{ marginTop: "20px", marginLeft: "10px" }}>
                                        Change Country/Region
                                        {/* //! Here is the anchor in the anchor problem lies */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="countries">
                    <div className="country-name">
                        <Link to="/">Australia</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Brazil</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Canada</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">China</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">France</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Germany</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Italy</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Japan</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Mexico</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Netherlands</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Poland</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Singapore</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Spain</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Turkey</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">United Arab Emirates</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">United States of America</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">India</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Indonesia</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">Malaysia</Link>
                    </div>
                    <div className="country-name">
                        <Link to="/">United Kingdom</Link>
                    </div>
                </div>
            </div>
            <div className="last-foot">

                <Link to="/">
                    <div className="last-foot-child">Conditions of Use & Sale</div>
                </Link>
                <Link to="/">
                    <div className="last-foot-child">Privacy Notice</div>
                </Link>
                <Link to="/">
                    <div className="last-foot-child">Interest-Based Ads</div>
                </Link>
                <div className="last-foot-child">
                    © 1996-2022, Amazon.com, Inc. or its affiliates
                </div>
            </div>
        </footer>
    );
}
