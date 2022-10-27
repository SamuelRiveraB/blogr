import React from "react";
import "./Header.css";
import logo from "../images/logo.svg";
import nav from "../images/icon-hamburger.svg";
import drop from "../images/icon-arrow-dark.svg";
import drop2 from "../images/icon-arrow-light.svg";

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
        if (btn === "Product") {
            const content = document.getElementsByClassName("dropdown-content")[0];
            const c2 = document.getElementsByClassName("dropdown-content")[1];
            const c3 = document.getElementsByClassName("dropdown-content")[2];
            const dropdownImg = document.getElementsByClassName("dropdown-img")[0];
            content.classList.toggle("hidden");
            if (!c2.classList.contains("hidden")) {
                document.getElementsByClassName("dropdown-img")[1].classList.toggle("drop-img");
            }
            if (!c3.classList.contains("hidden")) {
                document.getElementsByClassName("dropdown-img")[2].classList.toggle("drop-img");
            }
            c2.classList.add("hidden");
            c3.classList.add("hidden");
            dropdownImg.classList.toggle("drop-img");
        } else if (btn === "Company") {
            const content = document.getElementsByClassName("dropdown-content")[1];
            const c2 = document.getElementsByClassName("dropdown-content")[0];
            const c3 = document.getElementsByClassName("dropdown-content")[2];
            const dropdownImg = document.getElementsByClassName("dropdown-img")[1];
            content.classList.toggle("hidden");
            if (!c2.classList.contains("hidden")) {
                document.getElementsByClassName("dropdown-img")[0].classList.toggle("drop-img");
            }
            if (!c3.classList.contains("hidden")) {
                document.getElementsByClassName("dropdown-img")[2].classList.toggle("drop-img");
            }
            c2.classList.add("hidden");
            c3.classList.add("hidden");
            dropdownImg.classList.toggle("drop-img");
        } else if (btn === "Connect") {
            const content = document.getElementsByClassName("dropdown-content")[2];
            const c2 = document.getElementsByClassName("dropdown-content")[0];
            const c3 = document.getElementsByClassName("dropdown-content")[1];
            const dropdownImg = document.getElementsByClassName("dropdown-img")[2];
            content.classList.toggle("hidden");
            if (!c2.classList.contains("hidden")) {
                document.getElementsByClassName("dropdown-img")[0].classList.toggle("drop-img");
            }
            if (!c3.classList.contains("hidden")) {
                document.getElementsByClassName("dropdown-img")[1].classList.toggle("drop-img");
            }
            c2.classList.add("hidden");
            c3.classList.add("hidden");
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
                document.getElementsByClassName("dropdown-img")[0].src = drop;
                document.getElementsByClassName("dropdown-img")[1].src = drop;
                document.getElementsByClassName("dropdown-img")[2].src = drop;
            } else {
                right.style.visibility = "visible";
                navImg.style.visibility = "hidden";
                document.getElementsByClassName("dropdown-img")[0].src = drop2;
                document.getElementsByClassName("dropdown-img")[1].src = drop2;
                document.getElementsByClassName("dropdown-img")[2].src = drop2;
            }
        };

        window.addEventListener('resize', responsiveNav);
        
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            let y = 0 + (window.scrollY || window.pageYOffset) / 1000;
            header.style.background = `linear-gradient(to right, rgba(255,143,112,${y}), rgba(255,61,83, ${y})`;
        });
    });

    return (
        <>
            <nav className="header">
                <div className="left-header">
                <img src={logo} className="logo" alt="logo"/>
                </div>
                <div className="right-header">
                    <ul className="header-menus">
                        <li className="dropdown">
                            <button onClick={() => dropdown("Product")} className="drop-btn">Product<img className="dropdown-img" src={window.innerWidth < 1200?drop:drop2} alt="dropdown-img"></img></button>
                            <div className="dropdown-content hidden">
                                <button className="dropdown-link"href="/">Overview</button>
                                <button className="dropdown-link"href="/">Pricing</button>
                                <button className="dropdown-link"href="/">Marketplace</button>
                                <button className="dropdown-link"href="/">Features</button>
                                <button className="dropdown-link"href="/">Integration</button>
                            </div>
                        </li>
                        <li className="dropdown">
                            <button onClick={() => dropdown("Company")} href="/" className="drop-btn">Company<img className="dropdown-img" src={window.innerWidth < 1200?drop:drop2} alt="dropdown-img"></img></button>
                            <div className="dropdown-content hidden comp">
                                <button className="dropdown-link"href="/">About</button>
                                <button className="dropdown-link"href="/">Team</button>
                                <button className="dropdown-link"href="/">Blog</button>
                                <button className="dropdown-link"href="/">Careers</button>
                            </div>
                        </li>
                        <li className="dropdown">
                            <button onClick={() => dropdown("Connect")} href="/" className="drop-btn">Connect<img className="dropdown-img" src={window.innerWidth < 1200?drop:drop2} alt="dropdown-img"></img></button>
                            <div className="dropdown-content hidden conn">
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