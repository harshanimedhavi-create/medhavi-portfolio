
import React, {useContext} from "react";
import "./Talks.scss";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

const icons = {
  lightbulb: "💡",
  brain: "🧠",
  users: "🤝",
  rocket: "🚀"
};

export default function Talks() {
  const {isDark} = useContext(StyleContext);

  if (!talkSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "main what-bring dark-bring" : "main what-bring"} id="talks">
      <div className="what-bring-content">

        <Fade bottom duration={1000}>
          <div className="what-bring-heading">
            <span className="what-bring-label">✦ MY STRENGTHS</span>
            <h1 className="talk-header-title">
              {talkSection.title}
            </h1>
            <p className="talk-header-subtitle">
              {talkSection.subtitle}
            </p>
          </div>
        </Fade>

        <div className="talk-cards-div">
          {talkSection.talks.map((talk, index) => (
            <Fade bottom duration={900} delay={index * 150} key={index}>
              <div
                className="strength-card"
                style={{"--card-color": talk.color}}
              >
                <div className="strength-card-top">
                  <span className="strength-number">
                    0{index + 1}
                  </span>
                  <span className="strength-icon">
                    {icons[talk.icon] || "✨"}
                  </span>
                </div>

                <h2>{talk.title}</h2>

                <p>{talk.subtitle}</p>

                <div className="strength-card-bottom">
                  <span>CONTINUOUS IMPROVEMENT</span>
                  <span className="strength-arrow">↗</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </div>
  );
}
