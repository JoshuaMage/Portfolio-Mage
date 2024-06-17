import { useState } from "react";
import "./Home.css"
import FeedBack from "../feedback/FeedBack.jsx"

export default function HeaderContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "We are Creative",
      companyName: "Mage Corporation",
      name: "We are Professional web Developer",
      description:
        "“Google Analytics is the best friend of all Digital Marketers as it dictates the decision-making and success of every website.”",
      image:
        "https://lyceumdo.org/wp-content/uploads/2022/02/Web-Developer.jpg",
    },
    {
      title: "We are Creative",
      companyName: "Mage Corporation",
      name: "We are Professional web Developer",
      description:
        "“We don't just build websites, we build websites that SELLS”",
      image:
        "https://images.idgesg.net/images/article/2019/07/teamwork_collaboration_developers_development_engineers_binary_code_virtual_interface_by_dean_mitchell_gettyimages-1055056834_2400x1600-100802360-large.jpg?auto=webp&quality=85,70",
    },
    {
      title: "We are Creative",
      companyName: "Mage Corporation",
      name: "We are Professional web Developer",
      description: "“Websites promote you 24/7: No employee will do that.”",
      image:
        "https://c0.wallpaperflare.com/preview/845/160/973/people-block-blockchain-business.jpg",
    },
  ];

  const handlePreview = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };
  return (
    <div id="home-Fullview">
    <div className="carousel-content">
      <div>
        {slides.map(
          (slide, index) =>
            index === currentIndex && (
              <div key={index} id="carousel-container">
                <div>
                  <h2>{slide.title}</h2>
                  <h3>{slide.companyName}</h3>
                  <p id="name">{slide.name}</p>
                  <p id="description" style={{ width: "90%" }}>
                    {slide.description}{" "}
                  </p>
                </div>
                <div>
                  <img
                    id="carousel-image"
                    src={slide.image}
                    alt="Carousel Image"
                  />
                  <br />
                  <button className="btn-Home" onClick={handlePreview}>
                    previous
                  </button>
                  <button className="btn-Home" onClick={handleNext}>
                    next
                  </button>
                </div>
              </div>
            )
        )}
        </div>
      </div>
      <FeedBack />
    </div>
    
  );
}
