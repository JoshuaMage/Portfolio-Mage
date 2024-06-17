import { useState } from "react";
import Home from "../../src/home/Home.jsx"
import AboutUs from "../../src/about/About-Us.jsx";
import Services from "../../src/service.s/Services.jsx";
import Blog from "../../src/blog/Blog.jsx";
import Portfolio from "../../src/portfolio/Portfolio.jsx"
import "./Header.css"

export default function Header() {
  const [currentSection, setCurrentSection] = useState(null);

  const showHome = () => {
    setCurrentSection("home");
  };

  const showAbout = () => {
    setCurrentSection("about");
  };

  const showService = () => {
    setCurrentSection("services");
  };

  const showPortfolio = () => {
    setCurrentSection("portfolio");
  };

  const showBlog = () => {
    setCurrentSection("blog");
  };

  return (
    <div id="website-view">
      <div id="header-Fullview">
        <header id="header">
          <h2 id="company-Name">Mage</h2>
          <section id="button-section">
            <ul>
              <li>
                <button onClick={showHome}>HOME</button>
                <button onClick={showAbout}>ABOUT US</button>
                <button onClick={showService}>SERVICE</button>
                <button onClick={showPortfolio}>PORTFOLIO</button>
                <button onClick={showBlog}>BLOG</button>
                <button
                  style={{
                    background: "#FFC100",
                    padding: "10px 20px",
                    borderRadius: "10px",
                  }}
                >
                  HIRE US
                </button>
              </li>
            </ul>
          </section>
        </header>
        {currentSection === "home" && <Home />}
        {currentSection === "about" && <AboutUs />}
        {currentSection === "services" && <Services />}
        {currentSection === "portfolio" && <Portfolio />}
        {currentSection === "blog" && <Blog />}
      </div>

      <div>
        <title>Resume</title>
      </div>
    </div>
  );
}
