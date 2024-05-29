import "../component-CSS/About.css";
import FeedBack from "./FeedBack.jsx";

export default function AboutUs() {
  return (
    <div className="about">
      <div className="firts-Container">
        <img
          className="hire-girlImg"
          src="https://media.gettyimages.com/id/1155187914/photo/portrait-of-a-young-asian-female-entrepreneur.jpg?s=612x612&w=0&k=20&c=m-28c9zEh30zwZhgkGk-nBZKyst58_XvUyMqnszFhjw="
          alt="Smile-girl"
        />
        <header>Why You Hire Us?</header>
        <p>
          I have a comprehensive understanding of web technologies, including
          HTML, CSS, JavaScript, and various frameworks like Vue.js and Angular.
          My attention to detail ensures that the applications I develop are not
          only functional but also visually appealing and user-friendly.
          <br />I thrive in collaborative environments and believe that
          effective communication is key to successful project outcomes. I have
          experience working in agile teams and using tools like Jira and Slack
          to streamline workflows and ensure clear communication.
        </p>
        <img
          className="award-img"
          src="https://tse4.mm.bing.net/th?id=OIP.IhqnDzI95h1szPfcv2jEmwHaGL&pid=Api&P=0&h=220"
          alt="award"
        />
      </div>

      <div className="second-Container">
        <h2>Let Know Our Expert Skills</h2>
        <p className="second-paragraph">
          I prioritize responsive and mobile-first design to ensure that web
          applications perform well on all devices, providing a consistent and
          accessible user experience.
        </p>

        <div>
          <>
            <section style={{ width: "77%" }} className="element">
              HTML
              <span style={{ paddingLeft: "95%" }}>85%</span>
            </section>
            <section
              className="empty-border"
              style={{ width: "85%" }}
            ></section>
          </>
          <>
            <section className="element">
              CSS <span style={{ paddingLeft: "67%" }}>75%</span>
            </section>
            <section
              className="empty-border"
              style={{ width: "75%" }}
            ></section>
          </>
          <>
            <section className="element">
              JAVASCRIPT <span style={{ paddingLeft: "40%" }}>60%</span>
            </section>
            <section
              className="empty-border"
              style={{ width: "60%" }}
            ></section>
          </>
          <>
            <section className="element">
              REACT <span style={{ paddingLeft: "28%" }}>40%</span>
            </section>
            <section
              className="empty-border"
              style={{ width: "40%" }}
            ></section>
          </>
        </div>
        <img
          className="second-Img"
          src="https://media.istockphoto.com/id/482073694/photo/time-for-a-quick-brainstorm.jpg?s=612x612&w=0&k=20&c=Zltbl9b1qQXrmGeYO4JllFolhHhLTqVt6VVfJx_DqtA="
          alt=""
        />
      </div>

      <div className="third-Container">
        <section id="third-Header">
          <h2>Our Work Experience</h2>
          <p>
            When unknow printer took a gallery of type and scramblted it to make
            a type specimen book
          </p>
        </section>

        <div id="third-FirstContainer">
          <section>
            <p>
              “Web development is the bridge between imagination and reality,
              where ideas transform into tangible digital experiences.” –
              Unknown
            </p>
          </section>

          <h3> 1. </h3>

          <section id="first">
            <h2>Graphic Designer</h2>
            <h4>Yuhan Del Rosario</h4>
            <h5>APRIL / May 2024</h5>
          </section>
        </div>

        <div id="third-SecondContainer">
          <section>
            <h2>Graphic Designer</h2>
            <h4>Yuhan Del Rosario</h4>
            <h5>APRIL / May 2024</h5>
          </section>
          <h3>2. </h3>
          <p>
            “In web development, the magic happens when technology and design
            come together to create seamless user experiences.” – Unknown
          </p>
        </div>

        <div id="third-FirstContainer">
          <section>
            <p>
              “In web development, the possibilities are endless. Embrace
              innovation, push boundaries, and create something extraordinary.”
              – Unknown
            </p>
          </section>
          <h3>3. </h3>
          <section id="first">
            <h2>Graphic Designer</h2>
            <h4>Yuhan Del Rosario</h4>
            <h5>APRIL / May 2024</h5>
          </section>
        </div>
      </div>
      <FeedBack />
    </div>
  );
}
