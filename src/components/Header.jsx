import { useState } from "react";
import Home from "./Home";
import AboutUs from "./About-Us";
import Services from "./Services.jsx";

export default function Header() {
  const [showHome, setShowHome] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showService, setShowService] = useState(false);

  const toggleHome = () => {
    setShowHome((prevShowHome) => !prevShowHome);
  };

  const toggleAbout = () => {
    setShowAbout((prevAbout) => !prevAbout);
  };

  const toggleService = () => {
    setShowService((prevService) => !prevService);
  };
  return (
    <div id="header-Fullview">
      <header id="header">
        <h2 id="company-Name">Mage</h2>
        <ul id="header-ul">
          <li>
            <button onClick={toggleHome}>HOME</button>
            <button onClick={toggleAbout}>ABOUT US</button>
            <button onClick={toggleService}>SERVICE</button>
            <button>PORTFOLIO</button>
            <button>BLOG</button>
            <button>CONTACT US</button>
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
      </header>
      {showHome && <Home />}
      {showAbout && <AboutUs />}
      {showService && <Services />}
    </div>
  );
}
