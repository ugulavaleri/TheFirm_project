import "./footer.css";
import { useState } from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const MapAndFooter = () => {
    const yellow = "#FACA10";
    const black = "#000000";
    const [ColorFb, SetColorFb] = useState(black);
    const [ColorTw, SetColorTw] = useState(black);
    const [ColorYt, SetColorYt] = useState(black);
    const [ColorLk, SetColorLk] = useState(black);
    const [ColorPr, SetColorPr] = useState(black);

    const onMouseOverColorFb = () => {
        SetColorFb(yellow);
    };
    const onMouseLeaveColorFb = () => {
        SetColorFb(black);
    };
    const onMouseOverColorTw = () => {
        SetColorTw(yellow);
    };
    const onMouseLeaveColorTw = () => {
        SetColorTw(black);
    };
    const onMouseOverColorYt = () => {
        SetColorYt(yellow);
    };
    const onMouseLeaveColorYt = () => {
        SetColorYt(black);
    };
    const onMouseOverColorLk = () => {
        SetColorLk(yellow);
    };
    const onMouseLeaveColorLk = () => {
        SetColorLk(black);
    };
    const onMouseOverColorPn = () => {
        SetColorPr(yellow);
    };
    const onMouseLeaveColorPn = () => {
        SetColorPr(black);
    };
    return (
        <div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11948.62224350367!2d45.02151845!3d41.
                5225709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1670767978670!5m2!1sen!2sge"
                    width="800"
                    height="600"
                    className="iframe"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <footer>
                <div className="footerLastContainer">
                    <h1>TheFirm</h1>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Solutions</a>
                            </li>
                            <li>
                                <a href="#">Cases</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="formBox">
                    <h1>Get in Touch</h1>
                    <form action="">
                        <div className="leftInputs">
                            <div className="inputBox">
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Lorem Ipusum"
                                />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="">Phone</label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="+0 968 856 1524"
                                />
                            </div>
                        </div>
                        <div className="rightInputs">
                            <div className="inputBox">
                                <label htmlFor="">Email</label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="LoremIpusum@mail.com"
                                />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="">Subject</label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Choose your subject"
                                />
                            </div>
                        </div>
                    </form>
                    <div className="formButtonBox">
                        <button>Sumbit</button>
                    </div>
                </div>
                <div className="iconsDiv">
                    <FaFacebookF
                        size="1.7em"
                        color={ColorFb}
                        onMouseOver={onMouseOverColorFb}
                        onMouseLeave={onMouseLeaveColorFb}
                        cursor="pointer"
                    />
                    <FaTwitter
                        size="1.7em"
                        color={ColorTw}
                        onMouseOver={onMouseOverColorTw}
                        onMouseLeave={onMouseLeaveColorTw}
                        cursor="pointer"
                    />
                    <FaYoutube
                        size="1.7em"
                        color={ColorYt}
                        onMouseOver={onMouseOverColorYt}
                        onMouseLeave={onMouseLeaveColorYt}
                        cursor="pointer"
                    />
                    <FaLinkedinIn
                        size="1.7em"
                        color={ColorLk}
                        onMouseOver={onMouseOverColorLk}
                        onMouseLeave={onMouseLeaveColorLk}
                        cursor="pointer"
                    />
                    <FaPinterestP
                        size="1.7em"
                        color={ColorPr}
                        onMouseOver={onMouseOverColorPn}
                        onMouseLeave={onMouseLeaveColorPn}
                        cursor="pointer"
                    />
                </div>
                <div>
                    <div className="lastText">
                        <p>Copyrights ©2020 Thefirm. All Right Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MapAndFooter;
