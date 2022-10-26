import React from "react";
import "./Home.css";
import firstLeft from "../images/illustration-editor-mobile.svg";
import secondLeft from "../images/illustration-phones.svg";
import thirdLeft from "../images/illustration-laptop-mobile.svg";
import logo from "../images/logo.svg";

function Home() {
    /*React.useEffect(() => {
        responsiveImgs();
        function responsiveImgs() {
            if (window.innerWidth < 1200) {
                document.querySelector(".banner-img").src = bannerImg;
                document.querySelector(".left1").src = left1;
                document.querySelector(".left2").src = left2;
                document.querySelector(".left3").src = left3;
                document.querySelector(".right3").src = right3;
                document.querySelector(".gallery1").src = gallery1;
                document.querySelector(".gallery2").src = gallery2;
                document.querySelector(".gallery3").src = gallery3;
                document.querySelector(".gallery4").src = gallery4;
            } else {
                document.querySelector(".banner-img").src = bannerImgDesk;
                document.querySelector(".left1").src = left1Desk;
                document.querySelector(".left2").src = left2Desk;
                document.querySelector(".left3").src = left3Desk;
                document.querySelector(".right3").src = right3Desk;
                document.querySelector(".gallery1").src = gallery1Desk;
                document.querySelector(".gallery2").src = gallery2Desk;
                document.querySelector(".gallery3").src = gallery3Desk;
                document.querySelector(".gallery4").src = gallery4Desk;
            }
        }
        window.addEventListener('resize', responsiveImgs);
    })*/

    return (
        <div>
            <div className="container">
                <div className="banner">
                    <h1 className="modern">A modern publishing platform</h1>
                    <p className="grow">Grow your audience and build your online brand</p>
                    <button className="start-btn">Start for Free</button>
                    <button className="learn-btn">Learn More</button>
                </div>
                <h2 className="designed">Designed for the future</h2>
                <div className="first-cont">
                    <div className="first-left">
                        <img className="first-left-img" src={firstLeft} alt="first-left-img"></img>
                    </div>
                    <div className="first-right">
                        <h2 className="extensible-title">Introducing an extensible editor</h2>
                        <p className="extensible-text">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                            change the looks of a blog.
                        </p>
                        <h2 className="robust-title">Robust content management</h2>
                        <p className="robust-text">Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                        </p>
                    </div>
                </div>
                <div className="second-cont">
                    <div className="second-left">
                        <img className="second-left-img" src={secondLeft} alt="second-left-img"></img>
                    </div>
                    <div className="second-right">
                        <h2 className="state-title">State of the Art Infrastructure</h2>
                        <p className="state-text">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                        </p>
                    </div>
                </div>
                <div className="third-cont">
                    <div className="third-left">
                        <img className="third-left-img" src={thirdLeft} alt="third-left-img"></img>
                    </div>
                    <div className="third-right">
                        <h2 className="free-title">Free, open, simple</h2>
                        <p className="free-text">Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                        </p>
                        <h2 className="powerful-title">Powerful tooling</h2>
                        <p className="powerful-text">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                            capable of producing even the most complicated sites.
                        </p>
                    </div>
                </div>
                <div className="footer">
                    <img className="footer-logo" src={logo} alt="footer-logo"></img>
                    <div className="footer-left">
                        <h2 className="footer-title">Product</h2>
                        <a href="/" className="link">Overview</a>
                        <a href="/" className="link">Pricing</a>
                        <a href="/" className="link">Marketplace</a>
                        <a href="/" className="link">Features</a>
                        <a href="/" className="link">Integration</a>
                    </div>
                    <div className="footer-center">
                        <h2 className="footer-title">Company</h2>
                        <a href="/" className="link">About</a>
                        <a href="/" className="link">Team</a>
                        <a href="/" className="link">Blog</a>
                        <a href="/" className="link">Careers</a>
                    </div>
                    <div className="footer-right">
                        <h2 className="footer-title">Connect</h2>
                        <a href="/" className="link">Contact</a>
                        <a href="/" className="link">Newsletter</a>
                        <a href="/" className="link">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;