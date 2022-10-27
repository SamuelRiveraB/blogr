import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";

function Footer() {
    return (
        <>
            <div className="footer">
                    <img className="footer-logo" src={logo} alt="footer-logo"></img>
                    <div className="footer-left">
                        <h2 className="footer-title">Product</h2>
                        <h3 href="/" className="link">Overview</h3>
                        <h3 href="/" className="link">Pricing</h3>
                        <h3 href="/" className="link">Marketplace</h3>
                        <h3 href="/" className="link">Features</h3>
                        <h3 href="/" className="link">Integration</h3>
                    </div>
                    <div className="footer-center">
                        <h2 className="footer-title">Company</h2>
                        <h3 href="/" className="link">About</h3>
                        <h3 href="/" className="link">Team</h3>
                        <h3 href="/" className="link">Blog</h3>
                        <h3 href="/" className="link">Careers</h3>
                    </div>
                    <div className="footer-right">
                        <h2 className="footer-title">Connect</h2>
                        <h3 href="/" className="link">Contact</h3>
                        <h3 href="/" className="link">Newsletter</h3>
                        <h3 href="/" className="link">LinkedIn</h3>
                    </div>
                </div>
        </>
    );
}

export default Footer;