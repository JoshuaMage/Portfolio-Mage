  import { useState } from "react";
  import "./Feed-Back.css";
  import { FEEDBACKBLOG } from "./feedback.js";

  export default function FeedBack() {
    const [currentDeveloper, setCurrentDeveloper] = useState(0);

    const figureSlides = [
      {
        image:
          "https://tse4.mm.bing.net/th?id=OIP.XWnN7YbhxsphQrbdYZgMQQHaIy&pid=Api&P=0&h=220",
        name: "Yuhan ken",
        positon: "Web Developer",
        description:
          "“People tend to think of the web as a way to get information or perhaps as a place to carry out ecommerce. But really, the web is about accessing applications. Think of each website as an application, and every single click, every single interaction with that site, is an opportunity to be on the very latest version of that application.”",
      },
      {
        image:
          "https://media.gettyimages.com/id/1450268558/photo/summer-selfie.jpg?s=612x612&w=0&k=20&c=IivGQIXV7pCu_tr10I0kaDouUtIi_pKzOrqB_NAGoCA=",
        name: "nami chan",
        positon: "Grapic Designer",
        description:
          "“If you do good work for good clients, it will lead to other good work for other good clients. If you do bad work for bad clients, it will lead to other bad work for other bad clients.” – Michael Bierut ",
      },
      {
        image:
          "https://media.gettyimages.com/id/644187477/photo/mixed-race-male-laughing-with-his-head-back.jpg?s=612x612&w=0&k=20&c=IK_xuXzx9N1HHB0kr3673VYiwEuifKlBBu2vOEAyVy8=",
        name: "Brook",
        positon: "Freelancer",
        description:
          "Freelancing is hard work, no matter your field or niche. When you start your freelancing career, a big part of it is knowing how to sell yourself and creating a good portfolio. That involves hours upon hours of scouring the internet for opportunities, jobs, and networking. It’s hard work that you must be willing to do if you want to be successful.",
      },
    ];

    const handlePrevFigure = () => {
      setCurrentDeveloper(
        (currentDeveloper - 1 + figureSlides.length) % figureSlides.length
      );
    };

    const handleNextFigure = () => {
      setCurrentDeveloper((currentDeveloper + 1) % figureSlides.length);
    };
    return (
      <div id="feedback-Fullview">
        <header className="feedback">
          <h2>What People Say</h2>
          <p>
            When unknown printer took a gallery of type and scramblted it to make
            a <br /> type spicemen book
          </p>
        </header>

        <figure className="feedback-Img">
          <img
            src="https://media.gettyimages.com/id/1334476315/photo/confident-mature-hispanic-man-against-white-background.jpg?s=612x612&w=0&k=20&c=QidM3xis7bJYnpH1htTgAfpasr_TLGCgdKwRAu272fE="
            alt="feedback-Image"
            className="down-image"
          />
          <img
            src="https://media.gettyimages.com/id/1450268558/photo/summer-selfie.jpg?s=612x612&w=0&k=20&c=IivGQIXV7pCu_tr10I0kaDouUtIi_pKzOrqB_NAGoCA="
            alt="feedback-Image"
            className="down-image"
          />
          <img
            src="https://media.gettyimages.com/id/1325053090/photo/confident-non-binary-person-standing-with-hand-on-hip-outdoors.jpg?s=612x612&w=0&k=20&c=Dem3BxFLj6g4yCqDRwYnl8rUMk8kao0lgW3km2iSm1o="
            alt="feedback-Image"
            className="down-image"
          />
          <img
            src="https://media.gettyimages.com/id/1485086832/photo/young-korean-businessman-at-the-office.jpg?s=612x612&w=0&k=20&c=HIS_O7AxOgm--oFQj7keHTTUVMIcK6BfmM6jFH-PVxE="
            alt="feedback-Image"
          />
          <img
            src="https://media.gettyimages.com/id/1335978911/photo/professional-photographer-at-the-studio-african-american-man-wear-black-hoodie-and-sunglasses.jpg?s=612x612&w=0&k=20&c=TOw_kaFbzKWdn6a4TV3DtBe1Cdxygo3fsqn3dG269XI="
            alt="feedback-Image"
            className="down-image"
          />
          <img
            src="https://media.gettyimages.com/id/638276322/photo/young-asian-man.jpg?s=612x612&w=0&k=20&c=0UZE23yPZLTx5qbZqYMlHjsC46NHAKdAuqygMG7-G2c="
            alt="feedback-Image"
          />
          <img
            src="https://media.gettyimages.com/id/644187477/photo/mixed-race-male-laughing-with-his-head-back.jpg?s=612x612&w=0&k=20&c=IK_xuXzx9N1HHB0kr3673VYiwEuifKlBBu2vOEAyVy8="
            alt="feedback-Image"
            className="down-image"
          />
        </figure>

        <div id="figure-Container">
          <div>
            {figureSlides.map(
              (figure, index) =>
                index === currentDeveloper && (
                  <div key={figure.name}>
                    <section id="middle-Container">
                      <img src={figure.image} alt="" />
                      <h2 className="names">{figure.name}</h2>
                      <h4 className="positions">{figure.positon}</h4>
                      <p className="description">{figure.description}</p>
                    </section>
                    <section>
                      <button className="btns" onClick={handlePrevFigure}>
                        previous
                      </button>
                      <button className="btns" onClick={handleNextFigure}>
                        next
                      </button>
                    </section>
                  </div>
                )
            )}
          </div>
        </div>

        <div>
          <header className="feedback">
            <h2>Latest Blog</h2>
            <p>
              When unknow printer took a gallery of type and scramblted it to make
              a <br /> type specimen book
            </p>
          </header>

          <section className="blog">
            {Object.keys(FEEDBACKBLOG).map((key) => {
              const item = FEEDBACKBLOG[key];
              return (
                <div key={key} id="blog-details">
                  <img src={item.image} alt="photo" />
                  <h3>{item.date}</h3>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <button>{item.button}</button>
                </div>
              );
            })}
          </section>

          <div id="submit-Information">
            <img
              src="https://media.istockphoto.com/id/1257825675/vector/web-design-and-development-concept-developer-team-designing-and-creating-a-website-modern.jpg?s=612x612&w=0&k=20&c=BGufOCcIrz4v2ESCAw4atttpqSjSlQnBf2NIPNUc--c="
              alt="web-developer"
            />

            <section id="submit-title">
              <h2>Get In Touch With Us</h2>
              <p>
                When unknow printer took a gallery of type and scramblted it to
                make a type specimen book
              </p>
            </section>

            <form action="log-in" id="input-area">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email Address" />
              <input type="number" placeholder="Phone No" />
              <input type="text" placeholder="Message" id="input-Message" />
            </form>
            <button>SUBMIT NOW</button>
          </div>

          <div id="hire-US">
            <section>
              <h2>Have Any Project in Mind ?</h2>
              <hr
                style={{
                  border: "0",
                  height: "2px",
                  backgroundColor: "white",
                  width: "150px",
                  marginLeft: "50px",
                }}
              />
              <p>
                "Focus on being free and effective, applying your skills and
                improving your organization, and let your creativity flow."
              </p>
            </section>
            <button>HIRE US</button>
          </div>

          <div id="bottom-Container">
            <div>
              <section className="bottom-Title">
                <h2>Mage.</h2>
                <p>
                  "Focus on being free and effective, applying your skills and
                  improving your organization, and let your creativity flow.
                </p>
              </section>
              <section>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#1877F2"
                    d="M15 8a7 7 0 0 0-7-7 7 7 0 0 0-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7 7 0 0 0 15 8"
                  />
                  <path
                    fill="#fff"
                    d="M10.725 10.023 11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7 7 0 0 0 2.188 0v-4.892z"
                  />
                </svg>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="20" fill="#1DA1F2" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" fill="white" fillOpacity="0.01" />
                  <path
                    d="M34 6H14C9.58172 6 6 9.58172 6 14V34C6 38.4183 9.58172 42 14 42H34C38.4183 42 42 38.4183 42 34V14C42 9.58172 38.4183 6 34 6Z"
                    fill="#2F88FF"
                    stroke="#000000"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"
                    fill="#43CCF8"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 15C36.1046 15 37 14.1046 37 13C37 11.8954 36.1046 11 35 11C33.8954 11 33 11.8954 33 13C33 14.1046 33.8954 15 35 15Z"
                    fill="white"
                  />
                </svg>
              </section>
            </div>

            <section id="bottom-Links">
              <h2>Links</h2>
              <a href="">About Us</a>
              <a href="">Services</a>
              <a href="">Portfolios</a>
              <a href="">Portfolios</a>
              <a href="">Contact Us</a>
            </section>

            <section id="bottom-Contact">
              <h2>Contact Us</h2>
              <p>
                <span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20px"
                    height="20px"
                    viewBox="0 0 100 100"
                    enableBackground="new 0 0 100 100"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#231F20"
                        d="M84.96,70.237c-0.167-1.032-0.814-1.914-1.783-2.438l-14.335-8.446l-0.118-0.066
      c-0.579-0.297-1.249-0.45-1.937-0.45c-1.201,0-2.348,0.455-3.144,1.253l-4.231,4.233c-0.181,0.172-0.771,0.421-0.95,0.43
      c-0.049-0.004-4.923-0.355-13.896-9.329c-8.957-8.955-9.337-13.844-9.34-13.844c0.005-0.25,0.251-0.838,0.426-1.02l3.608-3.607
      c1.271-1.274,1.652-3.386,0.898-5.022L32.19,16.938c-0.579-1.192-1.704-1.928-2.952-1.928c-0.883,0-1.735,0.366-2.401,1.031
      l-9.835,9.813c-0.943,0.938-1.755,2.578-1.932,3.898c-0.086,0.631-1.831,15.693,18.819,36.346
      C51.42,83.627,65.09,84.989,68.865,84.989l0,0c0.812,0,1.285-0.058,1.376-0.071c1.316-0.176,2.954-0.986,3.891-1.925l9.827-9.826
      C84.761,72.361,85.127,71.296,84.96,70.237z"
                      />
                    </g>
                  </svg>
                </span>
                +91 924-614-7999 <br />
                1800-121-3637
              </p>
              <a href="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                info@deneb.com
                <br />
                services@deneb.com
              </a>
              <p>
                <span>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h48v48H0z" fill="none" />
                    <g id="Shopicon">
                      <path
                        d="M24,44c0,0,14-12,14-26c0-7.732-6.268-14-14-14s-14,6.268-14,14C10,32,24,44,24,44z M24,16c1.105,0,2,0.895,2,2
      c0,1.105-0.895,2-2,2c-1.105,0-2-0.895-2-2C22,16.895,22.895,16,24,16z"
                      />
                    </g>
                  </svg>
                </span>
                125, Park street aven, Balon, Mariveles.
              </p>
            </section>
          </div>
        </div>

        <footer id="footer-Feedback">
          <p>
            Copyright © 2020 <strong>Mage.</strong>. All rights reserved..
          </p>
        </footer>
      </div>
    );
  }
