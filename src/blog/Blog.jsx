import "./Blog.css";
import React from "react";
import { BLOG } from "./Blog.js";
import FeedBack from "../feedback/FeedBack.jsx";

export default function Blog() {
  return (
    <div id="blog-Fullview">
      <div id="blog-View">
        <header id="container-Header">
          <img
            src="https://media.istockphoto.com/id/1331350008/photo/business-team-working-on-a-laptop-computer.jpg?s=1024x1024&w=is&k=20&c=kiAEBApRWT_qgVrM0MHF3wMxh5H14vfsaDHg8354Y_Y="
            alt="image"
          />
          <h2 id="portfolios">Blog</h2>
          <section className="portfolios-Buttons">
            <button>HOME </button>
            <button>BLOG</button>
          </section>
        </header>

        <div id="blog-List">
          <section>
            {Object.keys(BLOG).map((key) => {
              const item = BLOG[key];
              return (
                <div key={key} id="Blog">
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "700px",
                      height: "500px",
                      borderRadius: "10px ",
                    }}
                  />
                  <ul id="blog-Ul">
                    <li>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 0.75 0.75"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none">
                          <path d="M0.75 0v0.75H0V0zM0.394 0.727l0 0 -0.002 0.001 -0.001 0 0 0 -0.002 -0.001q-0.001 0 -0.001 0l0 0 -0.001 0.013 0 0.001 0 0 0.003 0.002 0 0 0 0 0.003 -0.002 0 -0.001 0 -0.001 -0.001 -0.013q0 -0.001 -0.001 -0.001m0.008 -0.004 0 0 -0.006 0.003 0 0 0 0 0.001 0.013 0 0 0 0 0.006 0.003q0.001 0 0.001 0l0 0 -0.001 -0.019q0 -0.001 -0.001 -0.001m-0.022 0a0.001 0.001 0 0 0 -0.001 0l0 0 -0.001 0.019q0 0.001 0.001 0.001l0 0 0.006 -0.003 0 0 0 0 0.001 -0.013 0 0 0 0z" />
                          <path
                            d="M0.375 0.063c0.173 0 0.313 0.14 0.313 0.313s-0.14 0.313 -0.313 0.313S0.063 0.548 0.063 0.375 0.202 0.063 0.375 0.063m0 0.125a0.031 0.031 0 0 0 -0.031 0.031v0.156a0.031 0.031 0 0 0 0.009 0.022l0.094 0.094a0.031 0.031 0 0 0 0.044 -0.044L0.406 0.362V0.219a0.031 0.031 0 0 0 -0.031 -0.031"
                            fill="#09244B"
                          />
                        </g>
                      </svg>
                    </li>
                    <li style={{ paddingTop: "12px" }}>{item.date}</li>
                    <li>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 0.5 0.5"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#444"
                          d="M.25 0C.075 0 .159.228.159.228c.019.031.044.025.044.047C.203.294.181.3.159.303.125.303.094.297.063.353.044.387.035.5.035.5h.428S.454.387.438.353C.407.294.375.303.341.3.319.297.297.291.297.272S.322.259.341.225C.341.228.425 0 .25 0"
                        />
                      </svg>
                    </li>
                    <li style={{ paddingTop: "12px" }}>{item.name}</li>
                  </ul>
                  <h2 className="title">{item.title}</h2>
                  <p className="paragraph">{item.description}</p>
                  <button className="button">{item.button}</button>
                </div>
              );
            })}
          </section>

          <section id="blog-Details">
            <div>
              <ul>
                <li>
                  <input type="text" placeholder="Search..." id="blog-Search" />
                </li>
              </ul>
            </div>

            <h2 className="second-Title">Category</h2>

            <ul>
              <li className="second-li">
                Design<span>15</span>
              </li>
              <li className="second-li">
                Development<span>11</span>
              </li>
              <li className="second-li">
                SEO<span>20</span>
              </li>
              <li className="second-li">
                App Design<span>8</span>
              </li>
              <li className="second-li">
                Branding<span>22</span>
              </li>
            </ul>
            <h2 className="second-Title">Recent Post</h2>

            <section>
              {Object.keys(BLOG).map((key) => {
                const item = BLOG[key];
                return (
                  <div key={key} id="recent-Post">
                    <img
                      src={item.image}
                      alt=""
                      style={{
                        width: "180px",
                        height: "120px",
                        borderRadius: "10px ",
                        paddingTop: "40px",
                      }}
                    />
                    <>
                      <h2 className="title-second">{item.title}</h2>
                      <h4 className="date-second">{item.date}</h4>
                    </>
                  </div>
                );
              })}
            </section>

            <>
              <h2 className="second-Title">Archives</h2>
              <ul>
                <li className="second-li">
                  January<span>15</span>
                </li>
                <li className="second-li">
                  February<span>11</span>
                </li>
                <li className="second-li">
                  March<span>20</span>
                </li>
                <li className="second-li">
                  April<span>8</span>
                </li>
                <li className="second-li">
                  May<span>22</span>
                </li>
                <li className="second-li">
                  June<span>21</span>
                </li>
              </ul>
            </>
          </section>
          
        </div>
      </div>
      <FeedBack />
    </div>
  );
}
