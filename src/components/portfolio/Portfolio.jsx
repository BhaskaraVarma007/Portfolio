import "./portfolio.css";

import IMG1 from "../../assets/Presentation img.png";
import IMG2 from "../../assets/Health-Dashboard img.png";

import IMG4 from "../../assets/TyingKnot img.png";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [

    {
      id: 3,
      title: "TyingKnots",
      img: IMG4,
      description:
        "A dedicated, standalone web page built for Marriage site",
      technologies: "ReactJs | Styled-Components",
      // link: "https://frontlinedesign-n-yoim.vercel.app/",
      // github: "https://github.com/Manaswinimula/frontlinedesign_n",
    },
    {
      id: 1,
      title: "Currency-Converter with HTML CSS JS",
      img: IMG1,
      description:
        "A Currency Converter is convert the currency",
      technologies: "Html | CSS | Javascript | React Js",
      // link: "https://memory-game-nine-rust.vercel.app/",
      // github: "https://github.com/Manaswinimula/MemoryGame",
    },
    {
      id: 2,
      title: "Health-Dashboard",
      img: IMG2,
      description:
        "Health-Dashboard is to Filter the health-medications",
      technologies: "HTML | CSS | JavaScript",
      // link: "https://track-it-indol-zeta.vercel.app/signup.html",
      // github: "https://github.com/Manaswinimula/TrackIt",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {/* <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
