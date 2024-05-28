import { useState } from "react";
import "../component-CSS/Feed-Back.css";
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

      <figure>
        <img
          src="https://media.gettyimages.com/id/1334476315/photo/confident-mature-hispanic-man-against-white-background.jpg?s=612x612&w=0&k=20&c=QidM3xis7bJYnpH1htTgAfpasr_TLGCgdKwRAu272fE="
          alt="feedback-Image"
          className="down-image"
        />
        <img
          src="https://media.gettyimages.com/id/1450268558/photo/summer-selfie.jpg?s=612x612&w=0&k=20&c=IivGQIXV7pCu_tr10I0kaDouUtIi_pKzOrqB_NAGoCA="
          alt="feedback-Image"
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
                <div key={index}>
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
              <div id="blog-details">
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
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone No" />
            <input type="text" placeholder="Message" id="input-Message" />
          </form>
          <button>SUBMIT NOW</button>
        </div>

        <div id="hire-US">
          <section>
            <h2>Have Any Project in Mind ?</h2>
            <p>
              "Focus on being free and effective, applying your skills and
              improving your organization, and let your creativity flow."
            </p>
          </section>
          <button>HIRE US</button>
        </div>
      </div>
    </div>
  );
}
