import React, { useState } from "react";
import "./Services.css";
import { SERVICESDETAILS } from "./services.js";
import FeedBack from "../../src/feedback/FeedBack.jsx";

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (service) => {
    setActiveService(activeService === service ? null : service);
  };
  return (
    <div id="service-Fullview">
      <div className="services">
        <header id="services-Header">
          <img
            src="https://media.istockphoto.com/id/1331350008/photo/business-team-working-on-a-laptop-computer.jpg?s=1024x1024&w=is&k=20&c=kiAEBApRWT_qgVrM0MHF3wMxh5H14vfsaDHg8354Y_Y="
            alt="image"
          />
          <h2 className="title-service">Our Services</h2>
          <section className="service-button">
            <button>HOME </button>
            <button>OUR SERVICES</button>
          </section>
        </header>

        <div id="services-section">
          <div className="service-selection">
            {Object.entries(SERVICESDETAILS).map(([key, service], index) => (
              <section
                key={index}
                id={key}
                onClick={() => toggleService(key)}
                className={activeService === key ? "active" : ""}
              >
                <img src={service.imgSelector} alt={service.title} />
                <p>{service.title}</p>
              </section>
            ))}
          </div>

          <div>
            {activeService && (
              <section id="service-details">
                <>
                  <h2 className="service-title">
                    {SERVICESDETAILS[activeService].title}
                  </h2>
                  <p className="service-text">
                    {SERVICESDETAILS[activeService].description}
                  </p>
                </>
                <img
                  className="service-image"
                  src={SERVICESDETAILS[activeService].imageSrc}
                  alt={SERVICESDETAILS[activeService].title}
                />
              </section>
            )}
          </div>

          <div id="work-Flow">
            <section className="work-Header">
              <h2>Our Work Flow</h2>
              <p>
                When unknow printer took a gallery of type and scramblted it to
                make a <br /> type specimen book
              </p>
            </section>

            <section className="right-Image">
              <figure className="work-image">
                <img
                  src="https://media.gettyimages.com/id/1405279677/photo/close-up-of-people-pointing-to-a-graph-with-data.jpg?s=612x612&w=0&k=20&c=lHfL85whQ8l18-kK3tPYl5SveS-pnJ2COQtJmyreQ3A="
                  alt="analysis"
                  style={{
                    width: "500px",
                    height: "350px",
                    borderRadius: "10px",
                  }}
                />
              </figure>
              <article className="work-details">
                <img
                  src="data:image/png;base64,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"
                  alt="analysis-cartoon"
                />
                <h3>Analysis</h3>
                <p>
                  During the analysis phase, developers and business analysts
                  work together to gather and document requirements. This can
                  include functional requirements (what the software should do)
                  and non-functional requirements (how the software should
                  perform). Misunderstandings or incomplete requirements can
                  lead to significant issues later in the development process,
                  so thorough analysis at this stage is essential.
                </p>
              </article>
            </section>

            <section className="right-Image">
              <article className="work-detail">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <h3>Development</h3>
                <p>
                  Programming isn't about what you know; it's about what you can
                  figure out. It's not about being the most brilliant person in
                  the room; it's about finding the solution to the problem. The
                  best code is simple, readable, and maintainable. Remember,
                  code is more often read than written, so make it clear and
                  comprehensible for those who come after you, including future
                  you. Development is an ongoing learning process, where solving
                  each problem expands your understanding and makes you a better
                  coder
                </p>
              </article>
              <figure className="middle-Images">
                <img
                  src="https://media.gettyimages.com/id/1459731718/photo/young-asian-woman-software-developers-using-computer-to-write-code-sitting-at-desk-with.jpg?s=612x612&w=0&k=20&c=OAT91eY3iQlQHEfb1wBw9F8hVqnRunO5HBQkTzIyaBQ="
                  alt="Developement"
                  style={{
                    width: "500px",
                    height: "350px",
                    borderRadius: "10px",
                  }}
                />
              </figure>
            </section>

            <section className="right-Image">
              <figure className="work-image">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP._-a2s6dX0n34l17rQPcHJwHaDt&pid=Api&P=0&h=220"
                  alt="Lunch-project"
                  style={{
                    width: "500px",
                    height: "350px",
                    borderRadius: "10px",
                  }}
                />
              </figure>

              <article className="work-details">
                <img
                  src="data:image/png;base64,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"
                  alt="Lunch-image"
                />
                <h3>Launch</h3>
                <p>
                  Sure! Here’s a longer, somewhat humorous quote about taking
                  breaks, including lunch, in the context of coding: "Remember,
                  taking a break is not a sign of weakness. Sometimes the best
                  way to solve a problem is to step away from the keyboard. A
                  well-timed lunch break can work wonders for your code. When
                  you're stuck on a bug, it's amazing how often the solution
                  will come to you while you're eating a sandwich. Good code
                  requires a well-fed, well-rested mind."
                </p>
              </article>
            </section>
          </div>
        </div>
        <div>
          <section id="header-price" style={{ width: "1024px" }}>
            <h2>Afforable Pricing</h2>
            <p>
              When unknow printer took a gallery of type and scramblted it to
              make a <br />
              type specimen book
            </p>
          </section>

          <div id="prize-section">
            <menu id="pricing-Menu">
              <section>
                <img
                  src="data:image/png;base64,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"
                  alt="price-img"
                />
                <h2>Basic</h2>
                <ul>
                  <li>Graphic Design</li>
                  <li>Web Design</li>
                  <li>
                    <del> UI/UX</del>
                  </li>
                  <li>
                    <del>HTML/CSS</del>
                  </li>
                  <li>
                    <del>SEO Marketing</del>
                  </li>
                  <li>
                    <del>Business Analysis</del>
                  </li>
                </ul>
                <h3>$ 75 / Month</h3>
                <button>START NOW</button>
              </section>

              <section>
                <img
                  src="data:image/png;base64,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"
                  alt="price-img"
                />
                <h2>Standard</h2>
                <ul>
                  <li>Graphic Design</li>
                  <li>Web Design</li>
                  <li>UI/UX</li>
                  <li>HTML/CSS</li>
                  <li>SEO Marketing</li>
                  <li>
                    <del>Business Analysis</del>
                  </li>
                </ul>
                <h3>$ 95 / Month</h3>
                <button>START NOW</button>
              </section>

              <section>
                <img
                  src="data:image/png;base64,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"
                  alt="price-img"
                />
                <h2>Premium</h2>
                <ul>
                  <li>Graphic Design</li>
                  <li>Web Design</li>
                  <li>UI/UX</li>
                  <li>HTML/CSS</li>
                  <li>SEO Marketing</li>
                  <li>Business Analysis</li>
                  <li>Digital Marketing</li>
                </ul>
                <h3>$ 110 / Month</h3>
                <button>START NOW</button>
              </section>
            </menu>
          </div>
        </div>
      </div>
      <FeedBack />
    </div>
  );
}
