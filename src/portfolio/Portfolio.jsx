import { useState } from "react";
import "./Portfolio.css";
import { PORTFOLIOSERVICE } from "./portfolio.js";
import FeedBack from "../../src/feedback/FeedBack.jsx";

export default function Portfolio() {
  const [selectedTopic, setSelectedTopic] = useState("Webdesign");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div id="portfolio-fullview">
      <div id="portfolio-view">
        <header id="container-Header">
          <img
            src="https://media.istockphoto.com/id/1331350008/photo/business-team-working-on-a-laptop-computer.jpg?s=1024x1024&w=is&k=20&c=kiAEBApRWT_qgVrM0MHF3wMxh5H14vfsaDHg8354Y_Y="
            alt="image"
          />
          <h2 id="portfolios">Portfolios</h2>
          <section className="portfolios-Buttons">
            <button>HOME </button>
            <button>OUR PORTFOLIOS</button>
          </section>
        </header>

        <div id="title-Portfolio">
          <h2>Our Latest Projects</h2>
          <p>
            When unknown printer took a gallery of type and scrambled it to make
            a
            <br /> type specimen book
          </p>
        </div>

        <section>
          <ul className="portfolio-Selector">
            <li>
              <button
                type="button"
                onClick={() => handleSelect("Webdesign")}
                className="web-Designer"
              >
                WEB DESIGN
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => handleSelect("WebDevelopment")}
              >
                WEB DEVELOPMENT
              </button>
            </li>

            <li>
              <button type="button" onClick={() => handleSelect("Branding")}>
                BRANDING
              </button>
            </li>

            <li>
              <button type="button" onClick={() => handleSelect("Seo")}>
                SEO
              </button>
            </li>

            <li>
              <button type="button" onClick={() => handleSelect("Apps")}>
                APPS
              </button>
            </li>
          </ul>

          <div>
            {selectedTopic && (
              <div className="portfolio-content">
                {PORTFOLIOSERVICE[selectedTopic].map((item) => (
                  <div key={item.id} className="portfolio-item">
                    <img src={item.img} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
      <FeedBack />
    </div>
  );
}
