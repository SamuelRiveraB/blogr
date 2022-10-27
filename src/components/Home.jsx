import React from "react";
import "./Home.css";
import banner from "../images/bg-pattern-intro-mobile.svg"
import firstLeft from "../images/illustration-editor-mobile.svg";
import secondLeft from "../images/illustration-phones.svg";
import thirdLeft from "../images/illustration-laptop-mobile.svg";

import bannerDesk from "../images/bg-pattern-intro-desktop.svg";
import firstLeftDesk from "../images/illustration-editor-desktop.svg";
import thirdLeftDesk from "../images/illustration-laptop-desktop.svg";

function Home() {
    React.useEffect(() => {
        responsiveImgs();
        function responsiveImgs() {
            if (window.innerWidth < 1200) {
                document.querySelector(".banner").style.backgroundImage = 'url(' + banner + '), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))';
                document.querySelector(".first-left-img").src = firstLeft;
                document.querySelector(".third-left-img").src = thirdLeft;
            } else {
                document.querySelector(".banner").style.backgroundImage = 'url(' + bannerDesk + '), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))';
                document.querySelector(".first-left-img").src = firstLeftDesk;
                document.querySelector(".third-left-img").src = thirdLeftDesk;
            }
        }
        window.addEventListener('resize', responsiveImgs);
    })

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
            </div>
        </div>
    );
}

export default Home;