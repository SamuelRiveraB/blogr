import React from "react";
import "./Header.css";
import logo from "../images/logo.svg";
import nav from "../images/icon-hamburger.svg";
import drop from "../images/icon-arrow-dark.svg";

function Header() {
    function navBar() {
        const navImg = document.getElementsByClassName("nav-btn")[0];
        const right = document.getElementsByClassName("right-header")[0];
        if (right.style.visibility === "hidden") {
            right.style.visibility = "visible";
        } else {
            right.style.visibility = "hidden";
            navImg.style.visibility = "visible";
        }
    }

    function dropdown(btn) {
        const rightHeader = document.getElementsByClassName("right-header")[0];
        if (btn === "Product") {
            const content = document.getElementsByClassName("dropdown-content")[0];
            const dropdownImg = document.getElementsByClassName("dropdown-img")[0];
            content.classList.toggle("hidden");
            dropdownImg.classList.toggle("drop-img");
            rightHeader.style.height = "95vw";
        } else if (btn === "Company") {
            const content = document.getElementsByClassName("dropdown-content")[1];
            const dropdownImg = document.getElementsByClassName("dropdown-img")[1];
            content.classList.toggle("hidden");
            dropdownImg.classList.toggle("drop-img");
        } else if (btn === "Connect") {
            const content = document.getElementsByClassName("dropdown-content")[2];
            const dropdownImg = document.getElementsByClassName("dropdown-img")[2];
            content.classList.toggle("hidden");
            dropdownImg.classList.toggle("drop-img");
        }
    }

    React.useEffect(() => {
        const navImg = document.getElementsByClassName("nav-btn")[0];
        const right = document.getElementsByClassName("right-header")[0];
        if (window.innerWidth < 1200) {
            navImg.style.visibility = "visible";
            right.style.visibility = "hidden";
        } else {
            right.style.visibility = "visible";
            navImg.style.visibility = "hidden";
        }
        
        function responsiveNav() {
            if (window.innerWidth < 1200) {
                navImg.style.visibility = "visible"; 
            } else {
                right.style.visibility = "visible";
                navImg.style.visibility = "hidden";
            }
        }
        window.addEventListener('resize', responsiveNav);
    })

    return (
        <>
            
            <nav className="header">
                <div className="left-header">
                <img src={logo} className="logo" alt="logo"/>
                </div>
                <div className="right-header">
                    <ul className="header-menus">
                        <li className="dropdown">
                            <button onClick={() => dropdown("Product")} className="drop-btn">Product<img className="dropdown-img" src={drop} alt="dropdown-img"></img></button>
                            <div className="dropdown-content hidden">
                                <button className="dropdown-link"href="/">Overview</button>
                                <button className="dropdown-link"href="/">Pricing</button>
                                <button className="dropdown-link"href="/">Marketplace</button>
                                <button className="dropdown-link"href="/">Features</button>
                                <button className="dropdown-link"href="/">Integration</button>
                            </div>
                        </li>
                        <li className="dropdown">
                            <button onClick={() => dropdown("Company")} href="/" className="drop-btn">Company<img className="dropdown-img" src={drop} alt="dropdown-img"></img></button>
                            <div className="dropdown-content hidden">
                                <button className="dropdown-link"href="/">About</button>
                                <button className="dropdown-link"href="/">Team</button>
                                <button className="dropdown-link"href="/">Blog</button>
                                <button className="dropdown-link"href="/">Careers</button>
                            </div>
                        </li>
                        <li className="dropdown">
                            <button onClick={() => dropdown("Connect")} href="/" className="drop-btn">Connect<img className="dropdown-img" src={drop} alt="dropdown-img"></img></button>
                            <div className="dropdown-content hidden">
                                <button className="dropdown-link"href="/">Contact</button>
                                <button className="dropdown-link"href="/">Newsletter</button>
                                <button className="dropdown-link"href="/">LinkedIn</button>
                            </div>
                        </li>
                        <hr className="line" />
                        <li><a href="/" className="login">Login</a></li>
                        <li><button className="sign">Sign Up</button></li>
                    </ul>
                </div>
            </nav><img src={nav} className="nav-btn" alt="nav" onClick={navBar}/>
        </>
    );
}

export default Header;